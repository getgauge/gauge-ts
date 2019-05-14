export class Scenario {
    private readonly _name: string;
    private readonly _isFailing: boolean;
    private readonly _tags: string[];

    constructor(name: string, isFailing: boolean, tags: Array<string>) {
        this._name = name;
        this._isFailing = isFailing
        this._tags = tags
    }

    public get name(): string {
        return this._name;
    }

    public get isFailing(): boolean {
        return this._isFailing;
    }

    public get tags(): string[] {
        return this._tags;
    }
}
