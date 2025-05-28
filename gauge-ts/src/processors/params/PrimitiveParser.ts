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
    const disablePrimitiveParsing = process.env.GAUGE_TS_DISABLE_PRIMITIVE_PARSING;

    if (disablePrimitiveParsing && disablePrimitiveParsing.toLowerCase() === 'true') {
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

  private convertToNumber(value: string): number | undefined {
    const trimmedValue = value.trim();
    if (trimmedValue === "") {
      return undefined;
    }
    const num = Number(trimmedValue);
    if (!Number.isFinite(num)) {
      return undefined;
    }
    // Ensure that the string representation of the number is the same as the original trimmed string
    // This prevents partial parsing of strings like UUIDs or numbers with leading/trailing non-numeric characters,
    // and also handles cases like "012345" not being treated as 12345 unless String(12345) was "012345" (which it is not).
    if (String(num) !== trimmedValue) {
      return undefined;
    }
    return num;
  }

  private convertToBoolean(value: string): boolean | undefined {
    return value === "true" || value === "false" ? value === "true" : undefined;
  }
}
