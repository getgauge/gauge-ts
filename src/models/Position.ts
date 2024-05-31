export class Position {
  private readonly _line: number;
  private readonly _char: number;

  constructor(line: number, char: number) {
    this._line = line;
    this._char = char;
  }

  public getLine(): number {
    return this._line;
  }

  public getChar(): number {
    return this._char;
  }
}
