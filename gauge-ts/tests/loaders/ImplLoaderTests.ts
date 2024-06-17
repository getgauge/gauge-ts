import { ImplLoader } from "../../src/loaders/ImplLoader";
import type { ParameterParsingChain } from "../../src/processors/params/ParameterParsingChain";
import { Util } from "../../src/utils/Util";

jest.mock("../../src/processors/params/ParameterParsingChain");

describe("ImplLoader", () => {
  let loader: ImplLoader;
  let chain: ParameterParsingChain;
  beforeEach(() => {
    chain = {
      addCustomParser: jest.fn(),
      canParse: jest.fn(),
      parse: jest.fn(),
    } as unknown as ParameterParsingChain;
    loader = new ImplLoader(chain);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe(".loadImplementations", () => {
    it("should load implementation succesfully", async () => {
      Util.getListOfFiles = jest.fn().mockReturnValue(["StepImpl.ts"]);
      Util.importFile = jest.fn().mockReturnValue({});
      await loader.loadImplementations();
    });

    it("should load implementation succesfully when class is exported", async () => {
      Util.getListOfFiles = jest.fn().mockReturnValue(["StepImpl.ts"]);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      Util.importFile = jest.fn().mockReturnValue({
        default: function () {
          this.foo = "foo";
        },
      });
      await loader.loadImplementations();
    });

    it("should fail to load implementation if class is exported but does not have default constructor", async () => {
      let exception = "";

      console.error = (v: Error) => {
        exception = v.toString();
      };

      Util.getListOfFiles = jest.fn().mockReturnValue(["StepImpl.ts"]);
      Util.importFile = jest.fn().mockImplementation(() => {
        throw new Error("failed to import");
      });
      await loader.loadImplementations();
      expect(exception).toContain("failed to import");
    });

    it("should load custom parameter parser", async () => {
      Util.getListOfFiles = jest.fn().mockReturnValue(["CustomParser.ts"]);
      Util.importFile = jest.fn().mockReturnValue({
        default: function () {
          this.canParse = jest.fn().mockReturnValue(true);
          this.parse = jest.fn().mockReturnValue("parsed");
        },
      });
      await loader.loadImplementations();
      expect(chain.addCustomParser).toHaveBeenCalledWith(expect.any(Object));
    });
  });
});
