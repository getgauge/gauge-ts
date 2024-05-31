import { EOL } from "os";
import { StaticLoader } from "../../src/loaders/StaticLoader";
import registry from "../../src/models/StepRegistry";
import { Util } from "../../src/utils/Util";

describe("StaticLoaderTests", () => {
  let loader: StaticLoader;
  const TEXT_1 =
    `import { Step } from "gauge-ts";` +
    EOL +
    `export default class StepImpl {` +
    EOL +
    `    @Step("foo")` +
    EOL +
    `    public async foo() {` +
    EOL +
    `        console.log("Hello World");` +
    EOL +
    `    }` +
    EOL +
    `}`;

  const TEXT_2 =
    `import { Step } from "gauge-ts";` +
    EOL +
    `export default class StepImpl {` +
    EOL +
    `    @Step("bar")` +
    EOL +
    `    public async bar() {` +
    EOL +
    `        console.log("Hello World");` +
    EOL +
    `    }` +
    EOL +
    `}`;
  const TEXT_3 =
    `import { Step } from "gauge-ts";` +
    EOL +
    `export default class StepImpl {` +
    EOL +
    `    @Step(["hello","hi"])` +
    EOL +
    `    public async bar() {` +
    EOL +
    `        console.log("Hello World");` +
    EOL +
    `    }` +
    EOL +
    `}`;

  beforeEach(() => {
    jest.clearAllMocks();
    loader = new StaticLoader();
    registry.clear();
  });

  describe(".loadFromText", () => {
    it("should load steps from given text", () => {
      const file = "StepImpl.ts";

      loader.loadStepsFromText(file, TEXT_1);

      expect(registry.isImplemented("foo")).toBe(true);
    });

    it("should load steps from file with alias", () => {
      const file = "StepImpl.ts";

      loader.loadStepsFromText(file, TEXT_3);
      expect(registry.isImplemented("hello")).toBe(true);
    });
  });

  describe(".reloadSteps", () => {
    it("should reload steps from given test", () => {
      const file = "StepImpl.ts";

      loader.loadStepsFromText(file, TEXT_1);

      expect(registry.isImplemented("foo")).toBe(true);

      loader.reloadSteps(TEXT_2, file);

      expect(registry.isImplemented("foo")).toBe(false);
      expect(registry.isImplemented("bar")).toBe(true);
    });
  });

  describe(".removeSteps", () => {
    it("should remove steps for a given file", () => {
      const file = "StepImpl.ts";
      const file2 = "StepImpl2.ts";

      loader.loadStepsFromText(file, TEXT_1);
      loader.loadStepsFromText(file2, TEXT_2);

      expect(registry.isImplemented("foo")).toBe(true);
      expect(registry.isImplemented("bar")).toBe(true);

      loader.removeSteps(file);
      expect(registry.isImplemented("foo")).toBe(false);
      expect(registry.isImplemented("bar")).toBe(true);
    });
  });

  describe(".loadImplementations", () => {
    it("should load steps from all the files", () => {
      const file1 = "StepImpl.ts";
      const file2 = "StepImpl2.ts";

      const mockFn = jest.fn().mockImplementation((file: string) => {
        return file == file1 ? TEXT_1 : TEXT_2;
      });

      Util.readFile = mockFn;
      Util.getListOfFiles = jest.fn().mockReturnValue([file1, file2]);

      loader.loadImplementations();

      expect(registry.isImplemented("foo")).toBe(true);
      expect(registry.isImplemented("bar")).toBe(true);
    });
  });
});
