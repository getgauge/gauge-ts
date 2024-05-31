import type { Position } from "./Position";

export class Range {
  private readonly _start: Position;
  private readonly _end: Position;

  constructor(start: Position, end: Position) {
    this._start = start;
    this._end = end;
  }

  public getStart(): Position {
    return this._start;
  }

  public getEnd(): Position {
    return this._end;
  }
}
