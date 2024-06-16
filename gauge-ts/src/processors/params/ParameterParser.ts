import type { Parameter } from "../../gen/spec_pb";

export interface ParameterParser {
  canParse(paramter: Parameter): boolean;
  parse(parameter: Parameter): unknown;
}
