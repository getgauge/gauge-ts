import { Operator } from "../models/Operator";

export class HookMethod {

    private readonly _method: Function;

    private readonly _instance: object;
    private readonly _options: { tags: string[]; operator?: Operator | undefined; } | undefined;

    constructor(method: Function, target: object, options?: { tags: Array<string>, operator?: Operator }) {
        this._method = method;
        this._instance = target;
        this._options = options;
    }

    public getMethod() {
        return this._method;
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
