import type { Parameter } from "../../gen/spec";

export interface ParameterParser {
  canParse(parameter: Parameter): boolean;
  parse(parameter: Parameter): unknown;
}
