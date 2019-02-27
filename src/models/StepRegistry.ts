import { StepRegistryEntry } from "./StepRegistryEntry";


export class StepRegistry {

    private _registry: Map<string, Array<StepRegistryEntry>> = new Map();

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
}


const registry = new StepRegistry();
export default registry;

