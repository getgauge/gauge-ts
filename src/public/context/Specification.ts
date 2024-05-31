export class Specification {
  private readonly _name: string | null | undefined;
  private readonly _fileName: string | null | undefined;
  private readonly _isFailing: boolean | null | undefined;
  private readonly _tags: string[] | null | undefined;

  constructor(
    name: string | null | undefined,
    fileName: string | null | undefined,
    isFailing: boolean | null | undefined,
    tags: Array<string> | null | undefined,
  ) {
    this._name = name;
    this._fileName = fileName;
    this._isFailing = isFailing;
    this._tags = tags;
  }

  public getName(): string | null | undefined {
    return this._name;
  }

  public getFileName(): string | null | undefined {
    return this._fileName;
  }

  public getIsFailing(): boolean | null | undefined {
    return this._isFailing;
  }

  public getTags(): Array<string> | null | undefined {
    return this._tags;
  }
}
