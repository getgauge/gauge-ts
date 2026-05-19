import hookRegistry from "../../src/models/HookRegistry";
import { HookType } from "../../src/models/HookType";
import registry from "../../src/models/StepRegistry";
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
  CustomScreenshotWriter,
  Step,
} from "../../src/public/decorators";
import { Screenshot } from "../../src/screenshot/Screenshot";

describe("decorators", () => {
  beforeEach(() => {
    registry.clear();
    hookRegistry.clear();
    jest.clearAllMocks();
  });

  describe("Step", () => {
    it("should add step to stepRegistry", () => {
      const stepCtx = {
        addInitializer: (fn: () => void) => fn(),
      } as unknown as ClassMethodDecoratorContext;
      const stepMethod = () => {
        console.log("hello");
      };
      Step("hello")(stepMethod, stepCtx);
      expect(registry.isImplemented("hello")).toBeTruthy();
    });

    it("should add step with aliases to stepRegistry", () => {
      const stepCtx = {
        addInitializer: (fn: () => void) => fn(),
      } as unknown as ClassMethodDecoratorContext;
      const stepMethod = () => {
        console.log("hello");
      };
      Step(["hi", "hello"])(stepMethod, stepCtx);
      expect(registry.isImplemented("hi")).toBeTruthy();
      expect(registry.isImplemented("hello")).toBeTruthy();
    });
  });

  describe("ContinueOnFailure", () => {
    it("should add function as recoverable", () => {
      const impl = () => {
        console.log("hello");
      };
      const cfCtx = {
        addInitializer: (fn: () => void) => fn(),
      } as unknown as ClassMethodDecoratorContext;
      ContinueOnFailure()(impl, cfCtx);
      expect(registry.getContinueOnFailureFunctions(impl).length).toBe(1);
    });
  });

  describe("BeforeSuite", () => {
    it("should add before suite hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };
      const hookCtx = {
        addInitializer: (fn: () => void) => fn(),
      } as unknown as ClassMethodDecoratorContext;
      BeforeSuite()(impl, hookCtx);
      expect(hookRegistry.get(HookType.BeforeSuite, []).length).toBe(1);
    });
  });

  describe("AfterSuite", () => {
    it("should add After suite hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };
      const hookCtx = {
        addInitializer: (fn: () => void) => fn(),
      } as unknown as ClassMethodDecoratorContext;
      AfterSuite()(impl, hookCtx);
      expect(hookRegistry.get(HookType.AfterSuite, []).length).toBe(1);
    });
  });

  describe("BeforeSpec", () => {
    it("should add before Spec hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };
      const hookCtx = {
        addInitializer: (fn: () => void) => fn(),
      } as unknown as ClassMethodDecoratorContext;
      BeforeSpec()(impl, hookCtx);
      expect(hookRegistry.get(HookType.BeforeSpec, []).length).toBe(1);
    });
  });
  describe("AfterSpec", () => {
    it("should add after spec hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };
      const hookCtx = {
        addInitializer: (fn: () => void) => fn(),
      } as unknown as ClassMethodDecoratorContext;
      AfterSpec()(impl, hookCtx);
      expect(hookRegistry.get(HookType.AfterSpec, []).length).toBe(1);
    });
  });
  describe("BeforeScenario", () => {
    it("should add before scenario hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };
      const hookCtx = {
        addInitializer: (fn: () => void) => fn(),
      } as unknown as ClassMethodDecoratorContext;
      BeforeScenario()(impl, hookCtx);
      expect(hookRegistry.get(HookType.BeforeScenario, []).length).toBe(1);
    });
  });
  describe("AfterScenario", () => {
    it("should add After scenario hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };
      const hookCtx = {
        addInitializer: (fn: () => void) => fn(),
      } as unknown as ClassMethodDecoratorContext;
      AfterScenario()(impl, hookCtx);
      expect(hookRegistry.get(HookType.AfterScenario, []).length).toBe(1);
    });
  });
  describe("BeforeStep", () => {
    it("should add before step hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };
      const hookCtx = {
        addInitializer: (fn: () => void) => fn(),
      } as unknown as ClassMethodDecoratorContext;
      BeforeStep()(impl, hookCtx);
      expect(hookRegistry.get(HookType.BeforeStep, []).length).toBe(1);
    });
  });

  describe("AfterStep", () => {
    it("should add after step hook to hookRegistry", () => {
      const impl = () => {
        console.log("hello");
      };
      const hookCtx = {
        addInitializer: (fn: () => void) => fn(),
      } as unknown as ClassMethodDecoratorContext;
      AfterStep()(impl, hookCtx);
      expect(hookRegistry.get(HookType.AfterStep, []).length).toBe(1);
    });
  });

  describe("CustomScreenshotWriter", () => {
    it("should add screen shot writer", async () => {
      const impl = () => {
        return "foo.png";
      };
      const csCtx = {
        addInitializer: (fn: () => void) => fn(),
      } as unknown as ClassMethodDecoratorContext;
      CustomScreenshotWriter()(impl, csCtx);
      const file = await Screenshot.capture();

      expect(file).toBe("foo.png");
    });
  });
});
