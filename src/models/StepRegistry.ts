import { StepRegistryEntry } from "./StepRegistryEntry";
import { AssertionError } from "assert";


export class StepRegistry {

    private _registry: Map<string, Array<StepRegistryEntry>> = new Map();
    private _continuOnFailureFuncs: Map<Function, Array<string>> = new Map();

    public get(text: string): StepRegistryEntry {
        return (this._registry.get(text) as Array<StepRegistryEntry>)[0];
    }

    public isImplemented(text: string): boolean {
        return this._registry.has(text);
    }

    public hasMultipleImplementations(stepText: string): boolean {
        return this._registry.has(stepText) &&
            ((this._registry.get(stepText) as Array<StepRegistryEntry>)).length > 1
    }

    public add(text: string, entry: StepRegistryEntry) {
        if (this._registry.has(text)) {
            (this._registry.get(text) as Array<StepRegistryEntry>).push(entry)
        } else {
            this._registry.set(text, [entry])
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
}


const registry = new StepRegistry();
export default registry;

