export class Step {
    private readonly _text: string;
    private readonly _isFailing: boolean;
    private readonly _errorMessage: string;
    private readonly _stackTrace: string;

    constructor(text: string, isFailing: boolean, errorMessage: string, stackTrace: string) {
        this._text = text;
        this._isFailing = isFailing;
        this._errorMessage = errorMessage;
        this._stackTrace = stackTrace;
    }

    public get text(): string {
        return this._text;
    }

    public get isFailing(): boolean {
        return this._isFailing;
    }

    public get errorMessage(): string {
        return this._errorMessage;
    }

    public get stackTrace(): string {
        return this._stackTrace;
    }

}
