import { mkdirSync, readFileSync, writeFileSync , ensureFileSync } from "fs-extra";
import { basename, join,normalize, extname } from "path";
import { ModuleKind, ModuleResolutionKind, ScriptTarget, transpileModule, TranspileOptions } from "typescript";
import { getListOfFiles } from "../utils/fileUtils";

export class GaugeProjectBuilder {
    private readonly _compilerOptions: TranspileOptions;
    constructor() {
        this._compilerOptions = {
            compilerOptions: {
                target: ScriptTarget.ES5,
                module: ModuleKind.CommonJS,
                lib: ["es2016"],
                declaration: false,
                outDir: 'lib',
                moduleResolution: ModuleResolutionKind.NodeJs,
                experimentalDecorators: true,
                emitDecoratorMetadata: true
            }
        }
    }
    public build(): Array<string> {
        let files = new Array<string>();
        getListOfFiles().forEach((file: string) => {
            let c = readFileSync(file, 'UTF-8');
            let transpiled = transpileModule(c, this._compilerOptions);
            if (transpiled.diagnostics && transpiled.diagnostics.length) {
                console.log(transpiled.diagnostics);
                console.log("Wrong");
            }else {
                let pr = process.env.GAUGE_PROJECT_ROOT as string;
                let out = join(pr ,'lib', basename(file).replace('.ts', '.js'));
                ensureFileSync(out)
                writeFileSync(out, transpiled.outputText);
                files.push(out)
            }
        })
        return  files;
    }
}
