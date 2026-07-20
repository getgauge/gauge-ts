import {
  ExecutionInfo,
  ScenarioInfo,
  SpecInfo,
  StepExecutionStartingRequest,
  StepInfo,
} from "../../src/gen/messages";
import { HookMethod } from "../../src/models/HookMethod";
import hookRegistry from "../../src/models/HookRegistry";
import { HookType } from "../../src/models/HookType";
import { StepExecutionEndingProcessor } from "../../src/processors/StepExecutionEndingProcessor";

describe("StepExecutionEndingProcessor", () => {
  let processor: StepExecutionEndingProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    hookRegistry.clear();
    process.env.screenshot_on_failure = "";
    processor = new StepExecutionEndingProcessor();
  });

  describe(".process", () => {
    it("should process StepExecutionEndingRequest and run AfterStepe hooks", async () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      hookRegistry.addHook(
        HookType.AfterStep,
        new HookMethod(async () => {}, "Hooks.ts"),
      );

      const currentSpec = SpecInfo.create({
        name: "foo",
        fileName: "foo.spec",
        tags: ["hello"],
        isFailed: false,
      });
      const currentScen = ScenarioInfo.create({
        name: "scenario",
        isFailed: false,
        tags: [],
      });
      const info = ExecutionInfo.create({
        currentSpec,
        currentScenario: currentScen,
        currentStep: StepInfo.create({}),
      });
      const req = StepExecutionStartingRequest.create({
        currentExecutionInfo: info,
      });

      const res = (await processor.process(req)).executionResult;

      expect(res?.failed).toBe(false);
    });
  });
});
