import { Operator } from "../public/Operator";

export class HookMethod {

    private readonly _method: Function;
    private readonly _file: string;
    private readonly _options: { tags: string[]; operator?: Operator | undefined; } | undefined;

    private _instance: object | undefined;

    constructor(method: Function, file: string, options?: { tags: Array<string>, operator?: Operator }) {
        this._method = method;
        this._file = file;
        this._options = options;
    }

    public getMethod() {
        return this._method;
    }

    public getFilePath() {
        return this._file;
    }

    public setInstance(instance: object) {
        this._instance = instance;
    }

    public getTags(): Array<string> {
        return this._options ? this._options.tags : [];
    }

    public getTagAggregationOperator() {
        return (this._options && this._options.operator) ? this._options.operator : Operator.And;
    }

    public getInstance() {
        return this._instance;
    }
}
