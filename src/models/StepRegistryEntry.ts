export class StepRegistryEntry {
    private _method: Function;
    constructor(method: Function){
        this._method = method;
    }

    public getMethod() {
        return this._method;
    }
}
