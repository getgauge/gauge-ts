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
    const disablePrimitiveParsing =
      process.env.GAUGE_TS_DISABLE_PRIMITIVE_PARSING;

    if (
      disablePrimitiveParsing &&
      disablePrimitiveParsing.toLowerCase() === "true"
    ) {
      return paramValue;
    }

    for (const converter of this.converters) {
      const v = converter(paramValue);
      if (v !== undefined) {
        return v;
      }
    }
    return paramValue;
  }

  public convertToNumber(value: string): number | undefined {
    const trimmedValue = value.trim();
    if (trimmedValue === "") {
      return undefined;
    }
    // Match valid numeric formats: integers without leading zeros, floats (.5, 0.5, 1.0), and exponentials
    const numericPattern =
      /^[+-]?(?:(?:0|[1-9]\d*)(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/;
    if (!numericPattern.test(trimmedValue)) {
      return undefined;
    }
    const num = Number(trimmedValue);
    if (!Number.isFinite(num)) {
      return undefined;
    }
    return num;
  }

  private convertToBoolean(value: string): boolean | undefined {
    return value === "true" || value === "false" ? value === "true" : undefined;
  }
}
