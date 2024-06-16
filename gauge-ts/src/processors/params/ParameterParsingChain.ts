import type { Parameter } from "../../gen/spec_pb";
import type { ParameterParser } from "./ParameterParser";
import { PrimitiveParser } from "./PrimitiveParser";
import { TableParameterParser } from "./TableParameterParser";

export class ParameterParsingChain {
  private chain: Array<ParameterParser> = [];

  public constructor() {
    this.chain.push(new TableParameterParser());
    this.chain.push(new PrimitiveParser());
  }

  public parse(parameter: Parameter): unknown {
    for (const parser of this.chain) {
      if (parser.canParse(parameter)) {
        return parser.parse(parameter);
      }
    }
    return parameter.getValue();
  }

  public addCustomParser(parser: ParameterParser): void {
    this.chain.unshift(parser);
  }
}
