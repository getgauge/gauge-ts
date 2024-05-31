export class StepInfo {
  private readonly _text: string | null | undefined;
  private readonly _dynamicText: string | null | undefined;
  private readonly _isFailing: boolean | null | undefined;
  private readonly _stackTrace: string | null | undefined;
  private readonly _errorMessage: string | null | undefined;

  constructor(
    text: string | null | undefined,
    dynamicText: string | null | undefined,
    isFailing: boolean | null | undefined,
    message: string | null | undefined,
    stackTrace: string | null | undefined,
  ) {
    this._text = text;
    this._dynamicText = dynamicText;
    this._isFailing = isFailing;
    this._stackTrace = stackTrace;
    this._errorMessage = message;
  }

  public getText(): string | null | undefined {
    return this._text;
  }

  public getDynamicText(): string | null | undefined {
    return this._dynamicText;
  }

  public getErrorMessage(): string | null | undefined {
    return this._errorMessage;
  }

  public getStacktrace(): string | null | undefined {
    return this._stackTrace;
  }

  public getIsFailing(): boolean | null | undefined {
    return this._isFailing;
  }
}
