import { Parameter, type ProtoTable } from "../../gen/spec_pb";
import { Table } from "../../public/Table";
import type { ParameterParser } from "./ParameterParser";

export class TableParameterParser implements ParameterParser {
  public canParse(parameter: Parameter): boolean {
    return (
      parameter.getParametertype() === Parameter.ParameterType.TABLE ||
      parameter.getParametertype() === Parameter.ParameterType.SPECIAL_TABLE
    );
  }

  public parse(parameter: Parameter): Table {
    return Table.from(parameter.getTable() as ProtoTable);
  }
}
