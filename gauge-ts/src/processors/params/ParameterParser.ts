import type { Parameter } from "../../gen/spec_pb";

export interface ParameterParser {
  canParse(parameter: Parameter): boolean;
  parse(parameter: Parameter): unknown;
}
