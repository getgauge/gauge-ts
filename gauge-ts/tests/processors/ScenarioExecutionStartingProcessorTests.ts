import {
  ExecutionInfo,
  ScenarioExecutionStartingRequest,
  ScenarioInfo,
  SpecInfo,
} from "../../src/gen/messages";
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
      const req = ScenarioExecutionStartingRequest.create({
        currentExecutionInfo: info,
      });

      const res = (await processor.process(req)).executionResult;

      expect(res?.failed).toBe(false);
    });
  });
});
