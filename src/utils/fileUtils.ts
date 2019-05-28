import { existsSync } from 'fs';
import { extname, join } from 'path';
import { Extension } from 'typescript';
let klawSync = require('klaw-sync');

function isTSFile(file: any) {
    return extname(file) === Extension.Ts;
}

function collectFilesIn(dir: any) {
    return klawSync(dir, {
        filter: function (item: { path: any; }) {
            return isTSFile(item.path);
        },
        traverseAll: true
    }).map(function (item: { path: any; }) {
        return item.path;
    });
}

export function getImplDirs() {
    const projectRoot = process.env.GAUGE_PROJECT_ROOT as string;
    if (process.env.STEP_IMPL_DIR) {
        return process.env.STEP_IMPL_DIR.split(",").map(function (dir) {
            return join(projectRoot, dir.trim());
        });
    }
    return [join(projectRoot, "tests")];
}


export function getListOfFiles() {
    var results = getImplDirs().reduce(function (files, dir) {
        if (!existsSync(dir)) {
            console.log("Failed to load implementations from " + dir);
            return files;
        }
        return files.concat(collectFilesIn(dir));
    }, []);
    return results;
}

export function getNewTSFileName(dir: string, counter = 0): string {
    var tmpl = counter && "StepImplementation" + counter + ".ts" || "StepImplementation.ts";
    var fileName = join(dir, tmpl);
    if (!existsSync(fileName)) {
        return fileName;
    }
    return getNewTSFileName(dir, ++counter);
}

export function isAsync(m: Function): boolean {
    return m instanceof (async () => { }).constructor;
}