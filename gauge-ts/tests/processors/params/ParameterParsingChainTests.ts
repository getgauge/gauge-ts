import { Parameter, ProtoTable, ProtoTableRow } from "../../../src/gen/spec_pb";
import { ParameterParsingChain } from "../../../src/processors/params/ParameterParsingChain";

describe("ParameterParsingChain", () => {
  let parameterParsingChain: ParameterParsingChain;
  beforeEach(() => {
    jest.resetModules();
    parameterParsingChain = new ParameterParsingChain();
  });

  describe(".parse", () => {
    it("should return table when parameter is table", () => {
      const table = new Parameter();
      table.setParametertype(Parameter.ParameterType.TABLE);
      const protoTable = new ProtoTable();
      const headers = new ProtoTableRow();
      headers.setCellsList(["foo", "bar"]);
      protoTable.setHeaders(headers);
      table.setTable(protoTable);
      expect(parameterParsingChain.parse(table)).toBeDefined();
    });

    it("should return number when parameter is number", () => {
      const number = new Parameter();
      number.setParametertype(Parameter.ParameterType.STATIC);
      number.setValue("1");
      expect(parameterParsingChain.parse(number)).toBe(1);
    });

    it("should return boolean when parameter is boolean", () => {
      const bool = new Parameter();
      bool.setParametertype(Parameter.ParameterType.STATIC);
      bool.setValue("true");
      expect(parameterParsingChain.parse(bool)).toBe(true);
    });

    it("should return string when parameter is string", () => {
      const str = new Parameter();
      str.setParametertype(Parameter.ParameterType.STATIC);
      str.setValue("foo");
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
      const param = new Parameter();
      param.setParametertype(Parameter.ParameterType.STATIC);
      param.setValue("foo");
      expect(parameterParsingChain.parse(param)).toBe("custom");
    });
  });
});
