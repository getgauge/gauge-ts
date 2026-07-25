import {
  ExecuteStepRequest,
  ExecutionInfo,
  ScenarioInfo,
  SpecInfo,
  StepExecutionStartingRequest,
  StepInfo,
} from "../../src/gen/messages";
import { HookMethod } from "../../src/models/HookMethod";
import hookRegistry from "../../src/models/HookRegistry";
import { HookType } from "../../src/models/HookType";
import { StepExecutionStartingProcessor } from "../../src/processors/StepExecutionStartingProcessor";
jest.mock("inspector");

describe("StepExecutionStartingProcessor", () => {
  let processor: StepExecutionStartingProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    hookRegistry.clear();
    process.env.screenshot_on_failure = "";
    processor = new StepExecutionStartingProcessor();
  });

  describe(".process", () => {
    it("should process StepExecutionStartingRequest and run BeforeStep hooks no step in context", async () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      hookRegistry.addHook(
        HookType.BeforeStep,
        new HookMethod(async () => {}, "Hooks.ts"),
      );
      const currentSpec = SpecInfo.create({
        name: "Foo",
        fileName: "foo.ts",
        tags: [],
      });
      const currentScen = ScenarioInfo.create({ name: "scenario", tags: [] });
      const info = ExecutionInfo.create({
        currentSpec,
        currentScenario: currentScen,
      });
      const req = StepExecutionStartingRequest.create({
        currentExecutionInfo: info,
      });

      const res = await processor.process(req);

      expect(res?.executionResult?.failed).toBe(false);
    });

    it("should process StepExecutionStartingRequest and run BeforeStep hooks with step in context", async () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      hookRegistry.addHook(
        HookType.BeforeStep,
        new HookMethod(async () => {}, "Hooks.ts"),
      );
      const currentSpec = SpecInfo.create({
        name: "Foo",
        fileName: "foo.ts",
        tags: [],
      });
      const currentScen = ScenarioInfo.create({ name: "scenario", tags: [] });
      const currentStep = StepInfo.create({
        step: ExecuteStepRequest.create({}),
      });
      const info = ExecutionInfo.create({
        currentSpec,
        currentScenario: currentScen,
        currentStep,
      });
      const req = StepExecutionStartingRequest.create({
        currentExecutionInfo: info,
      });

      const res = await processor.process(req);

      expect(res?.executionResult?.failed).toBe(false);
    });

    it("should process StepExecutionStartingRequest and run BeforeStep hooks with step without request in context", async () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      hookRegistry.addHook(
        HookType.BeforeStep,
        new HookMethod(async () => {}, "Hooks.ts"),
      );
      const currentSpec = SpecInfo.create({
        name: "Foo",
        fileName: "foo.ts",
        tags: [],
      });
      const currentScen = ScenarioInfo.create({ name: "scenario", tags: [] });
      const currentStep = StepInfo.create({});
      const info = ExecutionInfo.create({
        currentSpec,
        currentScenario: currentScen,
        currentStep,
      });
      const req = StepExecutionStartingRequest.create({
        currentExecutionInfo: info,
      });

      const res = await processor.process(req);

      expect(res?.executionResult?.failed).toBe(false);
    });
  });
});
