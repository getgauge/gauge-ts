export class Specification {

    private readonly _name: string;
    private readonly _fileName: string;
    private readonly _isFailing: boolean;
    private readonly _tags: string[];

    constructor(name: string, fileName: string, isFailing: boolean, tags: string[]) {
        this._name = name;
        this._fileName = fileName;
        this._isFailing = isFailing;
        this._tags = tags;

    }

    public get name(): string {
        return this._name;
    }

    public get fileName(): string {
        return this._fileName;
    }

    public get isFailing(): boolean {
        return this._isFailing;
    }

    public get tags(): string[] {
        return this._tags;
    }
}
