import { spawnSync } from "node:child_process";
import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { extname, join } from "node:path";
import { Extension } from "typescript";
import { v4 } from "uuid";

export type CommonFunction<T = unknown> = (...args: unknown[]) => T;
export type CommonAsyncFunction<T = unknown> = (
  ...args: unknown[]
) => Promise<T>;

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class Util {
  public static async importFile(file: string) {
    return await import(file);
  }

  public static writeFile(filePath: string, content: string) {
    writeFileSync(filePath, content);
  }

  public static exists(filePath: string) {
    return existsSync(filePath);
  }

  public static readFile(file: string): string {
    return readFileSync(file, "utf-8");
  }

  public static readFileBuffer(file: string) {
    return readFileSync(file).buffer;
  }

  public static spawn(command: string, args: string[]) {
    return spawnSync(command, args);
  }

  public static getListOfFiles() {
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

  private static walkSync(dir: string, fileList: string[] = []): string[] {
    const files = readdirSync(dir);

    for (const file of files) {
      const filePath = join(dir, file);
      const stat = statSync(filePath);

      if (stat.isDirectory()) {
        Util.walkSync(filePath, fileList);
      } else if (stat.isFile() && Util.isTSFile(file)) {
        fileList.push(filePath);
      }
    }

    return fileList;
  }

  public static collectFilesIn(dir: string): string[] {
    return Util.walkSync(dir);
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

  public static getNewTSFileName(dir: string): string {
    let counter = 0;
    let fileName: string;

    do {
      const tmpl = `StepImplementation${counter || ""}${Extension.Ts}`;
      fileName = join(dir, tmpl);
      counter++;
    } while (existsSync(fileName));

    return fileName;
  }

  public static isAsync(m: CommonFunction): boolean {
    return m instanceof (async () => {}).constructor;
  }

  public static getUniqueScreenshotFileName(): string {
    const dir = (process.env.gauge_screenshots_dir as string) ?? "";

    return join(dir, `screenshot-${v4()}.png`);
  }
}
