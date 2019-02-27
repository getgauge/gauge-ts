export class StepRegistryEntry {
    private readonly _method: Function;
    private _instance: object;

    constructor(method: Function, target: object) {
        this._method = method;
        this._instance = target;
    }

    public getMethod() {
        return this._method;
    }

    public getInstance() {
        return this._instance;
    }
}
