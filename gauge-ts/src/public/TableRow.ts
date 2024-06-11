export class TableRow {
  private readonly _cells: Map<string, string>;

  constructor() {
    this._cells = new Map<string, string>();
  }

  public addCell(header: string, value: string): void {
    this._cells.set(header, value);
  }

  public getCell(columnName: string): string {
    return this._cells.has(columnName)
      ? (this._cells.get(columnName) as string)
      : "";
  }

  public getCellValues(): Array<string> {
    return Array.from(this._cells.values());
  }

  public get size(): number {
    return this._cells.size;
  }

  /**
   * @deprecated Use getCellValues() instead.
   * @public
   */
  public get cells(): Array<string> {
    console.warn(
      ".cells accessor is deprecated. Use .getCellValues() instead.",
    );

    return Array.from(this._cells.values());
  }
}
