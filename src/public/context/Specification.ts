export class Specification {
    private readonly _name: string | null | undefined;
    private readonly _fileName: string | null | undefined;
    private readonly _isFailing: boolean | null | undefined;
    private readonly _tags: string[] | null | undefined;
    constructor(name: string | null | undefined, fileName: string | null | undefined, isFailing: boolean | null | undefined, tags: Array<string> | null | undefined) {
        this._name = name;
        this._fileName = fileName;
        this._isFailing = isFailing;
        this._tags = tags;
    }
    public getName() {
        return this._name;
    }
    public getFileName() {
        return this._fileName;
    }
    public getIsFailing() {
        return this._isFailing;
    }
    public getTags() {
        return this._tags;
    }
}
