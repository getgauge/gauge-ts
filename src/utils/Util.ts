import { spawnSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { extname, join } from 'path';
import { Extension } from 'typescript';
let klawSync = require('klaw-sync');

export class Util {
    public static async importFile(file: string) {
        return await import(file);
    }
    public static spawn(command: string, args: string[]) {
        return spawnSync(command, args);
    }
    public static writeFile(filePath: string, content: string) {
        writeFileSync(filePath, content);
    }

    public static exists(filePath: string) {
        return existsSync(filePath)
    }

    public static readFile(file: string): string {
        return readFileSync(file, 'utf-8')
    }

    public static readFileBuffer(file: string): ArrayBuffer {
        return readFileSync(file).buffer
    }

    public static getListOfFiles() {
        var results = this.getImplDirs().reduce((files, dir) => {
            if (!existsSync(dir)) {
                console.log("Failed to load implementations from " + dir);
                return files;
            }
            return files.concat(this.collectFilesIn(dir));
        }, []);
        return results;
    }

    public static isTSFile(file: any) {
        return extname(file) === Extension.Ts;
    }

    public static collectFilesIn(dir: any) {
        return klawSync(dir, {
            filter: function (item: { path: any; }) {
                return Util.isTSFile(item.path);
            },
            traverseAll: true
        }).map(function (item: { path: any; }) {
            return item.path;
        });
    }

    public static getImplDirs() {
        const projectRoot = process.env.GAUGE_PROJECT_ROOT as string;
        if (process.env.STEP_IMPL_DIR) {
            return process.env.STEP_IMPL_DIR.split(",").map(function (dir) {
                return join(projectRoot, dir.trim());
            });
        }
        return [join(projectRoot, "tests")];
    }

    public static getNewTSFileName(dir: string, counter = 0): string {
        var tmpl = counter && "StepImplementation" + counter + Extension.Ts || "StepImplementation.ts";
        var fileName = join(dir, tmpl);
        if (!existsSync(fileName)) {
            return fileName;
        }
        return Util.getNewTSFileName(dir, ++counter);
    }

    public static isAsync(m: Function): boolean {
        let r = (m instanceof (async () => { }).constructor) === true;
        return r
    }
}
