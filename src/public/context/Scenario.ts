export class Scenario {
    private readonly _name: string | null | undefined;
    private readonly _isFailing: boolean | null | undefined;
    private readonly _tags: string[] | null | undefined;
    constructor(name: string | null | undefined, isFailing: boolean | null | undefined, tags: Array<string> | null | undefined) {
        this._name = name;
        this._isFailing = isFailing;
        this._tags = tags;
    }
    public getName() {
        return this._name;
    }
    public getIsFailing() {
        return this._isFailing;
    }
    public getTags() {
        return this._tags;
    }
}
