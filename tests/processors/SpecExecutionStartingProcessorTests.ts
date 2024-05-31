/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ExecutionInfo,
  SpecExecutionEndingRequest,
  SpecInfo,
} from "../../src/gen/messages_pb";
import { HookMethod } from "../../src/models/HookMethod";
import hookRegistry from "../../src/models/HookRegistry";
import { HookType } from "../../src/models/HookType";
import { SpecExecutionStartingProcessor } from "../../src/processors/SpecExecutionStartingProcessor";
jest.mock("inspector");

describe("SpecExecutionStartingProcessor", () => {
  let processor: SpecExecutionStartingProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    hookRegistry.clear();
    process.env.screenshot_on_failure = "";
    processor = new SpecExecutionStartingProcessor();
  });

  describe(".process", () => {
    it("should process SpecExecutionStartingRequest and run BeforeSuite hooks", async () => {
      hookRegistry.addHook(
        HookType.BeforeSpec,
        new HookMethod(async () => {}, "Hooks.ts"),
      );
      hookRegistry.addHook(
        HookType.AfterSpec,
        new HookMethod(async () => {}, "Hooks.ts"),
      );

      const currentSpec = new SpecInfo();

      currentSpec.setName("foo");
      currentSpec.setFilename("foo.spec");
      currentSpec.setTagsList([]);
      const info = new ExecutionInfo();

      info.setCurrentspec(currentSpec);
      const req = new SpecExecutionEndingRequest();

      req.setCurrentexecutioninfo(info);

      const res = (await processor.process(req)).getExecutionresult();

      expect(res?.getFailed()).toBe(false);
    });
  });
});
