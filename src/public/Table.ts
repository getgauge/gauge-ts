import type { ProtoTable } from "../gen/spec_pb";
import { TableRow } from "./TableRow";

export class Table {
  private readonly _headers: string[];
  private readonly _tableRows: TableRow[];
  private readonly _rows: string[][];

  public static from(table: ProtoTable): Table {
    if (!table.getHeaders()) {
      throw new Error("Invalid table passed");
    }
    const header = table.getHeaders();
    const gaugeTable = new Table(header?.getCellsList() ?? []);

    for (const row of table.getRowsList()) {
      gaugeTable.addRow(row.getCellsList());
    }

    return gaugeTable;
  }

  constructor(headers: string[]) {
    this._headers = headers;
    this._rows = new Array<Array<string>>();
    this._tableRows = new Array<TableRow>();
  }

  /**
   * @deprecated Use getTableRows() instead.
   * @public
   */
  public get rows(): Array<TableRow> {
    console.warn(".rows accessor is deprecated. Use .getTableRows() instead.");

    return this._tableRows;
  }

  public addRow(row: Array<string>): void {
    if (row.length !== this._headers.length) {
      throw new Error(
        `Row size mismatch. Expected row size: ${this._headers.length}.` +
        `Obtained row size: ${row.length}.`,
      );
    }
    this._rows.push(row);
    const tableRow = new TableRow();

    for (const header of this._headers) {
      tableRow.addCell(header, row[this._headers.indexOf(header)]);
    }
    this._tableRows.push(tableRow);
  }

  public getColumnNames(): Array<string> {
    return this._headers;
  }

  public getColumnName(index: number): string {
    if (index < 0 || index >= this._headers.length) {
      throw new Error(
        `Column with index ${index} not found. Actual column size: ${this._headers.length}.`,
      );
    }

    return this._headers[index];
  }

  public getTableRows(): TableRow[] {
    return this._tableRows;
  }

  public getColumnValues(columnName: string): Array<string> {
    const i = this._headers.indexOf(columnName);

    return this.getColumnValuesForIndex(i);
  }

  public getColumnValuesForIndex(index: number): string[] {
    if (index >= 0) {
      return this._rows.map((row) => row[index]);
    }

    return [];
  }
}
