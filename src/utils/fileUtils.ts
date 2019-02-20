import { existsSync } from 'fs';
import { extname, join } from 'path';
let klawSync = require('klaw-sync');

function isJSFile(file: any) {
    return extname(file) === ".ts";
}

function collectFilesIn(dir: any) {
    return klawSync(dir, {
        filter: function (item: { path: any; }) {
            return isJSFile(item.path);
        },
        traverseAll:true
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

