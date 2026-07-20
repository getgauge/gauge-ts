import {
  type Parameter,
  Parameter_ParameterType,
  type ProtoTable,
} from "../../gen/spec";
import { Table } from "../../public/Table";
import type { ParameterParser } from "./ParameterParser";

export class TableParameterParser implements ParameterParser {
  public canParse(parameter: Parameter): boolean {
    return (
      parameter.parameterType === Parameter_ParameterType.Table ||
      parameter.parameterType === Parameter_ParameterType.Special_Table
    );
  }

  public parse(parameter: Parameter): Table {
    return Table.from(parameter.table as ProtoTable);
  }
}
