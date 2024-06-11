import {
  ExecuteStepRequest,
  ExecutionInfo,
  ScenarioInfo,
  SpecInfo,
  StepExecutionStartingRequest,
  StepInfo,
} from "../../src/gen/messages_pb";
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
      const currentSpec = new SpecInfo();

      currentSpec.setName("Foo");
      currentSpec.setFilename("foo.ts");
      currentSpec.setTagsList([]);
      const currentScen = new ScenarioInfo();

      currentScen.setName("scenario");
      currentScen.setTagsList([]);

      const info = new ExecutionInfo();

      info.setCurrentspec(currentSpec);
      info.setCurrentscenario(currentScen);
      info.setCurrentstep();
      const req = new StepExecutionStartingRequest();

      req.setCurrentexecutioninfo(info);

      const res = await processor.process(req);

      expect(res?.getExecutionresult()?.getFailed()).toBe(false);
    });

    it("should process StepExecutionStartingRequest and run BeforeStep hooks with step in context", async () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      hookRegistry.addHook(
        HookType.BeforeStep,
        new HookMethod(async () => {}, "Hooks.ts"),
      );
      const currentSpec = new SpecInfo();

      currentSpec.setName("Foo");
      currentSpec.setFilename("foo.ts");
      currentSpec.setTagsList([]);
      const currentScen = new ScenarioInfo();

      currentScen.setName("scenario");
      currentScen.setTagsList([]);

      const currentStep = new StepInfo();

      currentStep.setStep(new ExecuteStepRequest());
      const info = new ExecutionInfo();

      info.setCurrentspec(currentSpec);
      info.setCurrentscenario(currentScen);
      info.setCurrentstep(currentStep);
      const req = new StepExecutionStartingRequest();

      req.setCurrentexecutioninfo(info);

      const res = await processor.process(req);

      expect(res?.getExecutionresult()?.getFailed()).toBe(false);
    });

    it("should process StepExecutionStartingRequest and run BeforeStep hooks with step without request in context", async () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      hookRegistry.addHook(
        HookType.BeforeStep,
        new HookMethod(async () => {}, "Hooks.ts"),
      );
      const currentSpec = new SpecInfo();

      currentSpec.setName("Foo");
      currentSpec.setFilename("foo.ts");
      currentSpec.setTagsList([]);
      const currentScen = new ScenarioInfo();

      currentScen.setName("scenario");
      currentScen.setTagsList([]);

      const currentStep = new StepInfo();

      const info = new ExecutionInfo();

      info.setCurrentspec(currentSpec);
      info.setCurrentscenario(currentScen);
      info.setCurrentstep(currentStep);
      const req = new StepExecutionStartingRequest();

      req.setCurrentexecutioninfo(info);

      const res = await processor.process(req);

      expect(res?.getExecutionresult()?.getFailed()).toBe(false);
    });
  });
});
