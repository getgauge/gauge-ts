import { Parameter } from "../../../../src/gen/spec_pb";
import { PrimitiveParser } from "../../../../src/processors/params/PrimitiveParser";

describe("PrimitiveParser", () => {
  let parser: PrimitiveParser;
  const originalEnv = process.env; // Store original env

  beforeEach(() => {
    jest.resetModules(); // Important to clear module cache for process.env changes
    process.env = { ...originalEnv }; // Reset to a copy of originalEnv before each test
    parser = new PrimitiveParser();
  });

  afterEach(() => {
    process.env = originalEnv; // Restore original env after each test
  });

  describe("convertToNumber", () => {
    // Access private method for testing purposes
    const convertToNumber = (value: string) => (parser as any).convertToNumber(value);

    it("should not convert UUIDs", () => {
      expect(convertToNumber("81423165-ad04-4c7b-9f85-75d1a8aa1b0d")).toBeUndefined();
    });

    it("should not convert strings with leading zeros that are not actual octal representations", () => {
      expect(convertToNumber("012345")).toBeUndefined(); // String(Number("012345")) is "12345"
    });

    it("should convert valid integer strings", () => {
      expect(convertToNumber("123")).toBe(123);
      expect(convertToNumber("-10")).toBe(-10);
      expect(convertToNumber("0")).toBe(0);
    });

    it("should convert valid float strings", () => {
      expect(convertToNumber("123.45")).toBe(123.45);
      expect(convertToNumber("-0.5")).toBe(-0.5);
      expect(convertToNumber(".5")).toBe(0.5);
      expect(convertToNumber("0.0")).toBe(0.0);
    });

    it("should not convert Infinity or -Infinity strings", () => {
      expect(convertToNumber("Infinity")).toBeUndefined();
      expect(convertToNumber("-Infinity")).toBeUndefined();
    });

    it("should not convert strings with extraneous non-numeric characters", () => {
      expect(convertToNumber("123px")).toBeUndefined();
      expect(convertToNumber("abc123")).toBeUndefined();
      expect(convertToNumber("123.45.67")).toBeUndefined();
      expect(convertToNumber("123a")).toBeUndefined();
      expect(convertToNumber("12.34a")).toBeUndefined();
    });

    it("should return undefined for empty or whitespace-only strings", () => {
      expect(convertToNumber("")).toBeUndefined();
      expect(convertToNumber("   ")).toBeUndefined();
    });

    it("should correctly handle numbers surrounded by whitespace", () => {
      expect(convertToNumber("  42  ")).toBe(42);
      expect(convertToNumber("  -1.23  ")).toBe(-1.23);
    });

    // Edge case: Number('') is 0, but our trim prevents this. String(0) is "0".
    // Edge case: Number('   ') is 0, but our trim prevents this.

    it("should not convert strings that are numbers but have extra non-numeric parts", () => {
      expect(convertToNumber("1.2.3")).toBeUndefined();
      expect(convertToNumber("--1")).toBeUndefined();
      expect(convertToNumber("++1")).toBeUndefined();
      expect(convertToNumber("1e+")).toBeUndefined();
      expect(convertToNumber("1e-")).toBeUndefined();
      expect(convertToNumber("NaN")).toBeUndefined(); // Number("NaN") is NaN
    });

    it("should convert valid exponential numbers", () => {
        expect(convertToNumber("1e3")).toBe(1000);
        expect(convertToNumber("1.2e-2")).toBe(0.012);
        expect(convertToNumber("-2.5e+2")).toBe(-250);
    });

  });

  describe("convertToBoolean", () => {
    // Access private method for testing purposes
    const convertToBoolean = (value: string) => (parser as any).convertToBoolean(value);

    it("should convert 'true' to true", () => {
      expect(convertToBoolean("true")).toBe(true);
    });

    it("should convert 'false' to false", () => {
      expect(convertToBoolean("false")).toBe(false);
    });

    it("should be case-sensitive and not convert 'TRUE' or 'FALSE'", () => {
      expect(convertToBoolean("TRUE")).toBeUndefined();
      expect(convertToBoolean("FALSE")).toBeUndefined();
      expect(convertToBoolean("True")).toBeUndefined();
      expect(convertToBoolean("False")).toBeUndefined();
    });

    it("should not convert other strings to boolean", () => {
      expect(convertToBoolean("")).toBeUndefined();
      expect(convertToBoolean("  ")).toBeUndefined();
      expect(convertToBoolean("abc")).toBeUndefined();
      expect(convertToBoolean("123")).toBeUndefined();
      expect(convertToBoolean("t r u e")).toBeUndefined(); // Contains spaces
    });

    it("should not convert strings with leading/trailing whitespace around 'true' or 'false'", () => {
      // The current implementation of convertToBoolean does not trim, so " true " would be undefined.
      // This is consistent with how it's written.
      expect(convertToBoolean(" true")).toBeUndefined();
      expect(convertToBoolean("true ")).toBeUndefined();
      expect(convertToBoolean(" false ")).toBeUndefined();
    });
  });

  describe("parse (with primitive parsing enabled)", () => {
    beforeEach(() => {
      // Explicitly ensure parsing is enabled for this suite
      delete process.env.GAUGE_TS_DISABLE_PRIMITIVE_PARSING;
      parser = new PrimitiveParser(); // Re-initialize to pick up env change if constructor-dependent
    });

    const createParameter = (value: string): Parameter => {
      const param = new Parameter();
      param.setValue(value);
      // PrimitiveParser does not use ParameterType, but set it for completeness if ever needed.
      // param.setParametertype(Parameter.ParameterType.STATIC);
      return param;
    };

    it("should return a number if the string is a valid number", () => {
      const param = createParameter("123.45");
      expect(parser.parse(param)).toBe(123.45);
    });

    it("should return a boolean if the string is 'true'", () => {
      const param = createParameter("true");
      expect(parser.parse(param)).toBe(true);
    });

    it("should return a boolean if the string is 'false'", () => {
      const param = createParameter("false");
      expect(parser.parse(param)).toBe(false);
    });

    it("should return the original string for UUIDs", () => {
      const uuid = "81423165-ad04-4c7b-9f85-75d1a8aa1b0d";
      const param = createParameter(uuid);
      expect(parser.parse(param)).toBe(uuid);
    });

    it("should return the original string for numbers with leading zeros (that are not valid octal)", () => {
      const leadingZeroNum = "012345";
      const param = createParameter(leadingZeroNum);
      expect(parser.parse(param)).toBe(leadingZeroNum);
    });

    it("should return the original string for generic non-numeric, non-boolean text", () => {
      const text = "hello world";
      const param = createParameter(text);
      expect(parser.parse(param)).toBe(text);
    });

    it("should return a number for strings with whitespace around a valid number", () => {
      const param = createParameter("  42  ");
      expect(parser.parse(param)).toBe(42);
    });

    it("should return the original string for 'TRUE' (boolean check is case-sensitive)", () => {
      const param = createParameter("TRUE");
      expect(parser.parse(param)).toBe("TRUE");
    });

    it("should return the original string for empty value", () => {
      // convertToNumber and convertToBoolean return undefined for empty string,
      // so the original value (empty string) should be returned by parse.
      const param = createParameter("");
      expect(parser.parse(param)).toBe("");
    });

    it("should return the original string for whitespace-only value", () => {
      // convertToNumber returns undefined for "   " after trim (empty),
      // convertToBoolean returns undefined.
      // So original "   " should be returned by parse.
      const param = createParameter("   ");
      expect(parser.parse(param)).toBe("   ");
    });

  });

  describe("parse (with GAUGE_TS_DISABLE_PRIMITIVE_PARSING=true)", () => {
    beforeEach(() => {
      process.env.GAUGE_TS_DISABLE_PRIMITIVE_PARSING = "true";
      // Re-initialize parser if it caches env var at construction (though current impl checks at parse time)
      parser = new PrimitiveParser();
    });

    const createParameter = (value: string): Parameter => {
      const param = new Parameter();
      param.setValue(value);
      return param;
    };

    it("should return original string for a number string like '123.45'", () => {
      const param = createParameter("123.45");
      expect(parser.parse(param)).toBe("123.45");
    });

    it("should return original string for 'true'", () => {
      const param = createParameter("true");
      expect(parser.parse(param)).toBe("true");
    });

    it("should return original string for 'false'", () => {
      const param = createParameter("false");
      expect(parser.parse(param)).toBe("false");
    });

    it("should return original string for UUIDs", () => {
      const uuid = "81423165-ad04-4c7b-9f85-75d1a8aa1b0d";
      const param = createParameter(uuid);
      expect(parser.parse(param)).toBe(uuid);
    });

    it("should return original string for numbers with leading zeros", () => {
      const leadingZeroNum = "012345";
      const param = createParameter(leadingZeroNum);
      expect(parser.parse(param)).toBe(leadingZeroNum);
    });

    it("should return original string for generic text", () => {
      const text = "hello world";
      const param = createParameter(text);
      expect(parser.parse(param)).toBe(text);
    });

    it("should return original string for '  42  '", () => {
      const param = createParameter("  42  ");
      expect(parser.parse(param)).toBe("  42  "); // Note: it's not trimmed
    });

    it("should return original string for empty value", () => {
      const param = createParameter("");
      expect(parser.parse(param)).toBe("");
    });
  });
});
