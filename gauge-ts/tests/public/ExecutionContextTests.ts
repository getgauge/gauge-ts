import { ExecutionContext } from "../../src/public/context/ExecutionContext";
import { Scenario } from "../../src/public/context/Scenario";
import { Specification } from "../../src/public/context/Specification";
import { StepInfo } from "../../src/public/context/StepInfo";

describe("ExecutionContext", () => {
  describe(".getCurrentSpec", () => {
    it("should give the current spec execution info", () => {
      const spec = new Specification("Spec", "foo.ts", false, []);
      const context = new ExecutionContext(spec, null, null, null);

      const info = context.getCurrentSpec();

      expect(info).not.toBeNull();
      expect(info?.getName()).toBe("Spec");
      expect(info?.getFileName()).toBe("foo.ts");
      expect(info?.getIsFailing()).toBeFalsy();
      expect(info?.getTags()).toStrictEqual([]);
    });
  });

  describe(".getCurrentScenario", () => {
    it("should give the current scenario execution info", () => {
      const scenario = new Scenario("scenario", false, []);
      const context = new ExecutionContext(null, scenario, null, null);

      const info = context.getCurrentScenario();

      expect(info).not.toBeNull();
      expect(info?.getName()).toBe("scenario");
      expect(info?.getIsFailing()).toBeFalsy();
      expect(info?.getTags()).toStrictEqual([]);
    });
  });

  describe(".getCurrentStep", () => {
    it("should give the currebnt step execution info", () => {
      const step = new StepInfo("step {}", "step <foo>", false, "", "");
      const context = new ExecutionContext(null, null, step, null);

      expect(context.getStacktrace()).toBe(null);

      const info = context.getCurrentStep();

      expect(info).not.toBeNull();
      expect(info?.getText()).toBe("step {}");
      expect(info?.getDynamicText()).toBe("step <foo>");
      expect(info?.getIsFailing()).toBeFalsy();
      expect(info?.getErrorMessage()).toBe("");
      expect(info?.getStacktrace()).toBe("");
    });
  });
});
