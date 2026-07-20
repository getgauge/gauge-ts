import {
  ExecutionInfo,
  ScenarioExecutionStartingRequest,
  ScenarioInfo,
  SpecInfo,
} from "../../src/gen/messages";
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
      });
      const req = ScenarioExecutionStartingRequest.create({
        currentExecutionInfo: info,
      });

      const res = await processor.process(req);

      expect(res?.executionResult?.failed).toBe(false);
    });
  });
});
