import {
  Parameter,
  Parameter_ParameterType,
  ProtoTable,
  ProtoTableRow,
} from "../../../src/gen/spec";
import { ParameterParsingChain } from "../../../src/processors/params/ParameterParsingChain";

describe("ParameterParsingChain", () => {
  let parameterParsingChain: ParameterParsingChain;
  beforeEach(() => {
    jest.resetModules();
    parameterParsingChain = new ParameterParsingChain();
  });

  describe(".parse", () => {
    it("should return table when parameter is table", () => {
      const table = Parameter.create({
        parameterType: Parameter_ParameterType.Table,
        table: ProtoTable.create({
          headers: ProtoTableRow.create({ cells: ["foo", "bar"] }),
        }),
      });
      expect(parameterParsingChain.parse(table)).toBeDefined();
    });

    it("should return number when parameter is number", () => {
      const number = Parameter.create({
        parameterType: Parameter_ParameterType.Static,
        value: "1",
      });
      expect(parameterParsingChain.parse(number)).toBe(1);
    });

    it("should return boolean when parameter is boolean", () => {
      const bool = Parameter.create({
        parameterType: Parameter_ParameterType.Static,
        value: "true",
      });
      expect(parameterParsingChain.parse(bool)).toBe(true);
    });

    it("should return string when parameter is string", () => {
      const str = Parameter.create({
        parameterType: Parameter_ParameterType.Static,
        value: "foo",
      });
      expect(parameterParsingChain.parse(str)).toBe("foo");
    });
  });

  describe(".addCustomParser", () => {
    it("should add custom parser to the chain", () => {
      const customParser = {
        canParse: jest.fn().mockReturnValue(true),
        parse: jest.fn().mockReturnValue("custom"),
      };
      parameterParsingChain.addCustomParser(customParser);
      const param = Parameter.create({
        parameterType: Parameter_ParameterType.Static,
        value: "foo",
      });
      expect(parameterParsingChain.parse(param)).toBe("custom");
    });
  });
});
