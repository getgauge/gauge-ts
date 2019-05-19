import { Range } from "./Range";

export class StepRegistryEntry {
    private readonly _method: Function | undefined;
    private readonly _instance: object | undefined;
    private readonly _filePath: string | undefined;
    private readonly _span: Range | undefined;
    private readonly _stepText: string;
    private readonly _stepValue: string;

    constructor(stepText: string, stepValue: string, method?: Function, target?: object, filePath?: string, span?: Range) {
        this._stepText = stepText;
        this._stepValue = stepValue;
        this._method = method;
        this._instance = target;
        this._filePath = filePath;
        this._span = span;
    }

    public getMethod() {
        return this._method;
    }

    public getInstance() {
        return this._instance;
    }
}
