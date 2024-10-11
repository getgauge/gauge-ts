import type { Parameter } from "../../gen/spec_pb";
import type { ParameterParser } from "./ParameterParser";

type ConvertFunction = (value: string) => unknown | undefined;

export class PrimitiveParser implements ParameterParser {
  public readonly converters: ConvertFunction[] = [];

  constructor() {
    this.converters.push(this.convertToNumber);
    this.converters.push(this.convertToBoolean);
  }

  public canParse(parameter: Parameter): boolean {
    return true;
  }

  public parse(parameter: Parameter): unknown {
    const paramValue = parameter.getValue();
    for (const converter of this.converters) {
      const v = converter(paramValue);
      if (v !== undefined) {
        return v;
      }
    }
    return paramValue;
  }

  private convertToNumber(value: string): number | undefined {
    if (value.trim() === "") {
      return undefined;
    }
    const num = Number(value);
    return Number.isFinite(num) ? num : undefined;
  }

  private convertToBoolean(value: string): boolean | undefined {
    return value === "true" || value === "false" ? value === "true" : undefined;
  }
}
