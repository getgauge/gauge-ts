import * as inspector from "node:inspector";
import {
  ExecutionInfo,
  ExecutionStartingRequest,
} from "../../src/gen/messages";
import { HookMethod } from "../../src/models/HookMethod";
import hookRegistry from "../../src/models/HookRegistry";
import { HookType } from "../../src/models/HookType";
import { ExecutionStartingProcessor } from "../../src/processors/ExecutionStartingProcessor";
jest.mock("node:inspector");

describe("ExecutionStartingProcessor", () => {
  let processor: ExecutionStartingProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    hookRegistry.clear();
    process.env.screenshot_on_failure = "";
    processor = new ExecutionStartingProcessor();
  });

  describe(".process", () => {
    it("should process ExecutionStartingRequest and run BeforeSuite hooks", async () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      hookRegistry.addHook(
        HookType.BeforeSuite,
        new HookMethod(async () => {}, "Hooks.ts"),
      );

      const req = ExecutionStartingRequest.create({
        currentExecutionInfo: ExecutionInfo.create({}),
      });

      const res = await processor.process(req);

      expect(res?.executionResult?.failed).toBe(false);
    });

    it("should process ExecutionStartingRequest and start debugger", async () => {
      console.log = jest.fn();
      const open = jest.spyOn(inspector, "open");

      process.env.DEBUGGING = "true";
      process.env.DEBUG_PORT = "1234";
      hookRegistry.addHook(
        HookType.AfterSuite,
        new HookMethod(async () => {}, "Hooks.ts"),
      );

      const req = ExecutionStartingRequest.create({
        currentExecutionInfo: ExecutionInfo.create({}),
      });

      await processor.process(req);

      expect(open).toHaveBeenCalledWith(1234, "127.0.0.1", true);
    });
  });
});
