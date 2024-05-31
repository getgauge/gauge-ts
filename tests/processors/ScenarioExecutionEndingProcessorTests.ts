import {
  ExecutionInfo,
  ScenarioExecutionStartingRequest,
  ScenarioInfo,
  SpecInfo,
} from "../../src/gen/messages_pb";
import { HookMethod } from "../../src/models/HookMethod";
import hookRegistry from "../../src/models/HookRegistry";
import { HookType } from "../../src/models/HookType";
import { ScenarioExecutionEndingProcessor } from "../../src/processors/ScenarioExecutionEndingProcessor";

describe("ScenarioExecutionEndingProcessor", () => {
  let processor: ScenarioExecutionEndingProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    hookRegistry.clear();
    process.env.screenshot_on_failure = "";
    processor = new ScenarioExecutionEndingProcessor();
  });

  describe(".process", () => {
    it("should process ScenarioExecutionEndingRequest and run AfterScenario hooks", async () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      hookRegistry.addHook(
        HookType.AfterScenario,
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
      const req = new ScenarioExecutionStartingRequest();

      req.setCurrentexecutioninfo(info);

      const res = await processor.process(req);

      expect(res?.getExecutionresult()?.getFailed()).toBe(false);
    });
  });
});
