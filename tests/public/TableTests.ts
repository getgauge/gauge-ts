import { ProtoTable, ProtoTableRow } from '../../src/gen/spec_pb';
import { Table } from '../../src/public/Table';

describe('Table', () => {
  describe('.from', () => {
    it('should throw error for invalid prototable', () => {
      const protoTable = new ProtoTable();

      expect(() => { Table.from(protoTable); }).toThrowError('Invalid table passed');
    });
    it('should throw error for given prototable', () => {
      const protoTable = new ProtoTable();
      const headers = new ProtoTableRow();

      headers.setCellsList(["name"]);
      const row1 = new ProtoTableRow();

      row1.setCellsList(["gauge"]);
      protoTable.setHeaders(headers);
      protoTable.setRowsList([row1]);

      expect(Table.from(protoTable).getTableRows()[0].getCellValues()).toStrictEqual(["gauge"]);
    });
  });

  describe('.addRow', () => {
    it('should add arow to table', () => {
      const table = new Table(["name"]);

      table.addRow(["gauge"]);
      expect(table.getTableRows()[0].getCell("name")).toStrictEqual("gauge");
    });

    it('should throw error for mismatched row size', () => {
      const table = new Table(["name"]);

      expect(() => { table.addRow(["gauge", "foo"]); }).toThrowError("Row size mismatch.");
    });
  });

  describe('.getColumnName', () => {
    it('should get the column name for given index', () => {
      const table = new Table(["name"]);

      expect(table.getColumnName(0)).toStrictEqual("name");
    });

    it('should trow error invalid index', () => {
      const table = new Table(["name"]);

      expect(() => { table.getColumnName(2); }).toThrowError("Column with index 2 not found. Actual column size: 1.");
    });
  });
  describe('.getColumnNames', () => {
    it('should give all the headers', () => {
      const table = new Table(["name"]);

      expect(table.getColumnNames()).toStrictEqual(["name"]);
    });
  });

  describe('.getColumnValues', () => {
    it('should give all values for given column name', () => {
      const table = new Table(["name"]);

      table.addRow(["gauge"]);
      expect(table.getColumnValues("name")).toStrictEqual(["gauge"]);
    });

    it('should give empty list for non existing column name', () => {
      const table = new Table(["name"]);

      table.addRow(["gauge"]);
      expect(table.getColumnValues("foo")).toStrictEqual([]);
    });
  });

  describe('.getTableRows', () => {
    it('should give all table rows', () => {
      const table = new Table(["name"]);

      table.addRow(["gauge"]);
      expect(table.getTableRows()[0].getCellValues()).toStrictEqual(["gauge"]);
      expect(table.getTableRows()[0].getCell("tag")).toStrictEqual('');
      expect(table.getTableRows()[0].size).toStrictEqual(1);
    });
  });
});
