import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";
import { Extension } from "typescript";
import { v4 } from "uuid";
import klawSync = require("klaw-sync");

export type CommonFunction<T = unknown> = (...args: unknown[]) => T;
export type CommonAsyncFunction<T = unknown> = (
  ...args: unknown[]
) => Promise<T>;

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class Util {
  public static async importFile(file: string): Promise<unknown> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await import(file);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static spawn(command: string, args: string[]) {
    return spawnSync(command, args);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static writeFile(filePath: string, content: string) {
    writeFileSync(filePath, content);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static exists(filePath: string) {
    return existsSync(filePath);
  }

  public static readFile(file: string): string {
    return readFileSync(file, "utf-8");
  }

  public static readFileBuffer(file: string): ArrayBuffer {
    return readFileSync(file).buffer;
  }

  public static getListOfFiles(): Array<string> {
    return Util.getImplDirs().reduce((files: Array<string>, dir) => {
      if (!existsSync(dir)) {
        console.log(`Failed to load implementations from ${dir}`);

        return files;
      }

      return files.concat(Util.collectFilesIn(dir));
    }, []);
  }

  public static isTSFile(file: string): boolean {
    return extname(file) === Extension.Ts;
  }

  public static collectFilesIn(dir: string): string[] {
    return klawSync(dir, {
      filter: (item) => Util.isTSFile(item.path),
      traverseAll: true,
    }).map((item) => item.path);
  }

  public static getImplDirs(): Array<string> {
    const projectRoot = process.env.GAUGE_PROJECT_ROOT as string;

    if (process.env.STEP_IMPL_DIR) {
      return process.env.STEP_IMPL_DIR.split(",").map((dir) =>
        join(projectRoot, dir.trim()),
      );
    }

    return [join(projectRoot, "tests")];
  }

  public static getNewTSFileName(dir: string, counter = 0): string {
    const tmpl =
      (counter && `StepImplementation${counter}${Extension.Ts}`) ||
      "StepImplementation.ts";
    const fileName = join(dir, tmpl);

    if (!existsSync(fileName)) {
      return fileName;
    }

    return Util.getNewTSFileName(dir, counter + 1);
  }

  public static isAsync(m: CommonFunction): boolean {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return m instanceof (async () => { }).constructor;
  }

  public static getUniqueScreenshotFileName(): string {
    const dir = (process.env.gauge_screenshots_dir as string) ?? "";

    return join(dir, `screenshot-${v4()}.png`);
  }
}
