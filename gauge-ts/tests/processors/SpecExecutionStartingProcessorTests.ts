/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ExecutionInfo,
  SpecExecutionEndingRequest,
  SpecInfo,
} from "../../src/gen/messages";
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

      const currentSpec = SpecInfo.create({
        name: "foo",
        fileName: "foo.spec",
        tags: [],
      });
      const info = ExecutionInfo.create({ currentSpec });
      const req = SpecExecutionEndingRequest.create({
        currentExecutionInfo: info,
      });

      const res = (await processor.process(req)).executionResult;

      expect(res?.failed).toBe(false);
    });
  });
});
