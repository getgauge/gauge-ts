import { AssertionError } from "assert";
import { Range } from './Range';
import { StepRegistryEntry } from "./StepRegistryEntry";
import klawSync = require("klaw-sync");


export class StepRegistry {

    private _registry: Map<string, Array<StepRegistryEntry>>;
    private _continuOnFailureFuncs: Map<Function, Array<string>>;

    constructor() {
        this._registry = new Map();
        this._continuOnFailureFuncs = new Map();
    }

    public get(text: string): StepRegistryEntry {
        return (this._registry.get(text) as Array<StepRegistryEntry>)[0];
    }

    public isImplemented(text: string): boolean {
        return this._registry.has(text);
    }

    public hasMultipleImplementations(stepText: string): boolean {
        return this._registry.has(stepText) &&
            ((this._registry.get(stepText) as Array<StepRegistryEntry>)).length > 1;
    }

    public add(text: string, entry: StepRegistryEntry) {
        if (this._registry.has(text)) {
            (this._registry.get(text) as Array<StepRegistryEntry>).push(entry);
        } else {
            this._registry.set(text, [entry]);
        }
    }

    public addContinueOnFailure(func: Function, exceptions?: Array<string>) {
        if (!exceptions) exceptions = [AssertionError.name];
        this._continuOnFailureFuncs.set(func, exceptions)
    }


    public getContinueOnFailure(func: Function): Array<string> {
        if (this._continuOnFailureFuncs.has(func)) return this._continuOnFailureFuncs.get(func) as Array<string>;
        return [];
    }

    public getStepPositions(filePath: string): Array<{ stepValue: string, span: Range }> {
        let positions: Array<{ stepValue: string, span: Range }> = new Array();
        this._registry.forEach((entries, step) => {
            entries.forEach((entry) => {
                if (entry.getFilePath() === filePath) {
                    positions.push({
                        stepValue: step,
                        span: entry.getRange() as Range
                    })
                }
            });
        });
        return positions;
    }

    public getStepTexts(): Array<string> {
        let steps: Array<string> = new Array();
        this._registry.forEach((v: StepRegistryEntry[], k) => {
            steps.push(v[0].getStepText()); //TODO: Alias support
        });
        return steps;

    }

    public isFileCached(filePath: string): boolean {
        for (const kv of this._registry) {
            if (kv[1].some(i => i.getFilePath() === filePath)) return true;
        }
        return false;
    }

    public removeSteps(filePath: string) {
        let newReg = new Map<string, Array<StepRegistryEntry>>();
        this._registry.forEach((entries, stepValue) => {
            let methods = entries.filter(entry => entry.getFilePath() !== filePath);
            if (methods.length > 0) newReg.set(stepValue, methods);
        });
        this._registry = newReg;
    }

    public setInstanceForMethodsIn(file: string, instance: object) {
        this._registry.forEach((entries, _) => {
            entries.forEach((entry) => {
                if (entry.getFilePath() === file) {
                    entry.setInstance(instance);
                }
            });
        });
    }

    public clear() {
        this._registry.clear();
        this._continuOnFailureFuncs.clear();
    }
}


const registry = new StepRegistry();
export default registry;

