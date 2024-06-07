import { ImplLoader } from "../../src/loaders/ImplLoader";
import { Util } from "../../src/utils/Util";

describe("ImplLoader", () => {
  let loader: ImplLoader;

  beforeEach(() => {
    loader = new ImplLoader();
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
  });
});
