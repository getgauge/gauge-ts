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

function getImplDirs() {
    const projectRoot = process.env.GAUGE_PROJECT_ROOT as string;
    if (process.env.STEP_IMPL_DIR) {
        return process.env.STEP_IMPL_DIR.split(",").map(function (dir) {
            return join(projectRoot, dir.trim());
        });
    }
    return [join(projectRoot, "src")];
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

export function isAsync(m: Function): boolean {
    return m instanceof (async () => { }).constructor;
}