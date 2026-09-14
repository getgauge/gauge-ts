import { resolve } from "node:path";
import { API } from "typescript/unstable/sync";

import type { SourceFile } from "typescript/unstable/ast";

/**
 * The single point where gauge-ts talks to the TypeScript compiler.
 *
 * TypeScript 7 dropped the in-process compiler API: `typescript` now exports
 * only `version`, and parsing happens in the native `tsgo` server reached over
 * an IPC channel. Source files are therefore requested from a `Program` rather
 * than built with `createSourceFile`.
 *
 * gauge-ts only ever reads syntax -- decorators, method names, parameter text
 * and positions -- so the project handed to tsgo is a synthetic, minimal one:
 * `noResolve` and `noLib` keep it from following imports or loading lib files,
 * which makes parsing purely syntactic and avoids inheriting whatever state the
 * user's own tsconfig.json is in.
 *
 * Files are served from an in-memory overlay rather than from disk. Gauge sends
 * unsaved editor buffers through `cacheFile`, and those have no on-disk content
 * to read.
 */
export class TsProject {
  private static readonly CONFIG_FILE_NAME = ".gauge-ts.tsconfig.json";

  private readonly root: string;
  private readonly configPath: string;
  private readonly contents = new Map<string, string>();
  private api: API | null = null;

  constructor(root: string = TsProject.projectRoot()) {
    this.root = root;
    this.configPath = resolve(root, TsProject.CONFIG_FILE_NAME);
  }

  private static projectRoot(): string {
    return process.env.GAUGE_PROJECT_ROOT ?? process.cwd();
  }

  /**
   * Parses `content` as the contents of `filePath` and returns its syntax tree.
   *
   * `filePath` is what Gauge reported, which is not necessarily a file that
   * exists: `implementStub` names a file it is about to create, and the runner's
   * own tests parse fixture text under placeholder names.
   */
  public parse(filePath: string, content: string): SourceFile | undefined {
    const fileName = resolve(this.root, filePath);
    const changed: string[] = [];

    if (this.contents.get(fileName) !== content) {
      this.contents.set(fileName, content);
      // A new entry changes the synthetic config's `files` list as well as the
      // file itself; tsgo caches both, so both have to be invalidated.
      changed.push(fileName, this.configPath);
    }

    const snapshot = this.connection().updateSnapshot({
      openProjects: [this.configPath],
      ...(changed.length > 0 ? { fileChanges: { changed } } : {}),
    });

    return snapshot
      .getProject(this.configPath)
      ?.program.getSourceFile(fileName);
  }

  /** Drops a file from the overlay, so it stops being part of the project. */
  public remove(filePath: string): void {
    const fileName = resolve(this.root, filePath);

    if (this.contents.delete(fileName)) {
      this.connection().updateSnapshot({
        openProjects: [this.configPath],
        fileChanges: { changed: [this.configPath], deleted: [fileName] },
      });
    }
  }

  /** Shuts the tsgo server down. Without this the process keeps a child alive. */
  public dispose(): void {
    this.api?.close();
    this.api = null;
    this.contents.clear();
  }

  private connection(): API {
    if (!this.api) {
      this.api = new API({
        cwd: this.root,
        fs: {
          readFile: (fileName) =>
            fileName === this.configPath
              ? this.config()
              : this.contents.get(fileName),
          // `undefined` means "fall back to the real filesystem", so only the
          // files this overlay owns are claimed here.
          fileExists: (fileName) =>
            fileName === this.configPath || this.contents.has(fileName)
              ? true
              : undefined,
        },
      });
    }

    return this.api;
  }

  private config(): string {
    return JSON.stringify({
      files: [...this.contents.keys()],
      compilerOptions: {
        // Parse only: never follow an import, load a lib file, or type check.
        noResolve: true,
        noLib: true,
        noEmit: true,
        types: [],
        skipLibCheck: true,
        allowJs: false,
        target: "esnext",
        module: "preserve",
        moduleResolution: "bundler",
      },
    });
  }
}

export default new TsProject();
