import {
  ExecutionInfo,
  ScenarioInfo,
  SpecInfo,
  StepExecutionStartingRequest,
  StepInfo,
} from "../../src/gen/messages_pb";
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

      const currentSpec = new SpecInfo();

      currentSpec.setName("foo");
      currentSpec.setFilename("foo.spec");
      currentSpec.setTagsList(["hello"]);
      currentSpec.setIsfailed(false);
      const currentScen = new ScenarioInfo();

      currentScen.setName("scenario");
      currentScen.setIsfailed(false);
      currentScen.setTagsList([]);
      const info = new ExecutionInfo();

      info.setCurrentspec(currentSpec);
      info.setCurrentscenario(currentScen);
      info.setCurrentstep(new StepInfo());
      const req = new StepExecutionStartingRequest();

      req.setCurrentexecutioninfo(info);

      const res = (await processor.process(req)).getExecutionresult();

      expect(res?.getFailed()).toBe(false);
    });
  });
});
