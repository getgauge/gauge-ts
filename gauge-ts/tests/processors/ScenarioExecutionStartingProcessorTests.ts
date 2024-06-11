import {
  ExecutionInfo,
  ScenarioExecutionStartingRequest,
  ScenarioInfo,
  SpecInfo,
} from "../../src/gen/messages_pb";
import { HookMethod } from "../../src/models/HookMethod";
import hookRegistry from "../../src/models/HookRegistry";
import { HookType } from "../../src/models/HookType";
import { ScenarioExecutionStartingProcessor } from "../../src/processors/ScenarioExecutionStartingProcessor";
jest.mock("inspector");

describe("ScenarioExecutionStartingProcessor", () => {
  let processor: ScenarioExecutionStartingProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    hookRegistry.clear();
    process.env.screenshot_on_failure = "";
    processor = new ScenarioExecutionStartingProcessor();
  });

  describe(".process", () => {
    it("should process ScenarioExecutionStartingRequest and run BeforeScenariop hooks", async () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      hookRegistry.addHook(
        HookType.BeforeScenario,
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
      const req = new ScenarioExecutionStartingRequest();

      req.setCurrentexecutioninfo(info);

      const res = (await processor.process(req)).getExecutionresult();

      expect(res?.getFailed()).toBe(false);
    });
  });
});
