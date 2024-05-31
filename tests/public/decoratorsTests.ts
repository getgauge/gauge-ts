import hookRegistry from "../../src/models/HookRegistry";
import { HookType } from "../../src/models/HookType";
import regsitry from "../../src/models/StepRegistry";
import {
  AfterScenario,
  AfterSpec,
  AfterStep,
  AfterSuite,
  BeforeScenario,
  BeforeSpec,
  BeforeStep,
  BeforeSuite,
  ContinueOnFailure,
  CustomScreenGrabber,
  CustomScreenshotWriter,
  Step,
} from "../../src/public/decorators";
import { Screenshot } from "../../src/screenshot/Screenshot";

describe("decoators", () => {
  beforeEach(() => {
    regsitry.clear();
    hookRegistry.clear();
    jest.clearAllMocks();
  });

  describe("Step", () => {
    it("should add step to stepRegistry", () => {
      Step("hello")(new Object(), "", {
        value: () => {
          console.log("hello");
        },
      });
      expect(regsitry.isImplemented("hello")).toBeTruthy();
    });

    it("should add step with aliases to stepRegistry", () => {
      Step(["hi", "hello"])(new Object(), "", {
        value: () => {
          console.log("hello");
        },
      });
      expect(regsitry.isImplemented("hi")).toBeTruthy();
      expect(regsitry.isImplemented("hello")).toBeTruthy();
    });
  });

  describe("ContinueOnFailure", () => {
    it("should add function as recoverable", () => {
      const impl = () => {
        console.log("hello");
      };

      ContinueOnFailure()(new Object(), "", { value: impl });
      expect(regsitry.getContinueOnFailureFunctions(impl).length).toBe(1);
    });
  });

  describe("BeforeSuite", () => {
    it("should add before suite hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };

      BeforeSuite()(new Object(), "", { value: impl });
      expect(hookRegistry.get(HookType.BeforeSuite, []).length).toBe(1);
    });
  });

  describe("AfterSuite", () => {
    it("should add After suite hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };

      AfterSuite()(new Object(), "", { value: impl });
      expect(hookRegistry.get(HookType.AfterSuite, []).length).toBe(1);
    });
  });

  describe("BeforeSpec", () => {
    it("should add before Spec hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };

      BeforeSpec()(new Object(), "", { value: impl });
      expect(hookRegistry.get(HookType.BeforeSpec, []).length).toBe(1);
    });
  });
  describe("AfterSpec", () => {
    it("should add after spec hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };

      AfterSpec()(new Object(), "", { value: impl });
      expect(hookRegistry.get(HookType.AfterSpec, []).length).toBe(1);
    });
  });
  describe("BeforeScenario", () => {
    it("should add before scenario hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };

      BeforeScenario()(new Object(), "", { value: impl });
      expect(hookRegistry.get(HookType.BeforeScenario, []).length).toBe(1);
    });
  });
  describe("AfterScenario", () => {
    it("should add After scenario hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };

      AfterScenario()(new Object(), "", { value: impl });
      expect(hookRegistry.get(HookType.AfterScenario, []).length).toBe(1);
    });
  });
  describe("BeforeStep", () => {
    it("should add before step hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };

      BeforeStep()(new Object(), "", { value: impl });
      expect(hookRegistry.get(HookType.BeforeStep, []).length).toBe(1);
    });
  });

  describe("AfterStep", () => {
    it("should add after step hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };

      AfterStep()(new Object(), "", { value: impl });
      expect(hookRegistry.get(HookType.AfterStep, []).length).toBe(1);
    });
  });

  describe("CustomScreenGrabber", () => {
    it("should add screen grabber function and give the deprecation warning", async () => {
      const impl = () => {
        return new Uint8Array();
      };
      let warning = "";

      console.warn = jest.fn().mockImplementation((...str) => {
        warning = str as unknown as string;
      });
      CustomScreenGrabber()(new Object(), "", { value: impl });
      const file = await Screenshot.capture();

      expect(file).toContain(".png");
      expect(warning).not.toBe("");
    });
  });

  describe("CustomScreenshotWriter", () => {
    it("should add screen shot writer", async () => {
      const impl = () => {
        return "foo.png";
      };

      CustomScreenshotWriter()(new Object(), "", { value: impl });
      const file = await Screenshot.capture();

      expect(file).toBe("foo.png");
    });
  });
});
