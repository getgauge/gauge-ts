import {
  ExecutionEndingRequest,
  ExecutionInfo,
} from "../../src/gen/messages_pb";
import { HookMethod } from "../../src/models/HookMethod";
import hookRegistry from "../../src/models/HookRegistry";
import { HookType } from "../../src/models/HookType";
import { ExecutionEndingProcessor } from "../../src/processors/ExecutionEndingProcessor";
import { Screenshot } from "../../src/screenshot/Screenshot";

describe("ExecutionEndingProcessor", () => {
  let processor: ExecutionEndingProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    hookRegistry.clear();
    process.env.screenshot_on_failure = "";
    processor = new ExecutionEndingProcessor();
  });

  describe(".process", () => {
    it("should process ExecutionEndingRequest and run AfterSuite hooks", async () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      hookRegistry.addHook(
        HookType.AfterSuite,
        new HookMethod(async () => {}, "Hooks.ts"),
      );
      const req = new ExecutionEndingRequest();

      req.setCurrentexecutioninfo(new ExecutionInfo());
      const res = await processor.process(req);

      expect(res?.getExecutionresult()?.getFailed()).toBe(false);
    });

    it("should process ExecutionEndingRequest and give error if a hook fails", async () => {
      process.env.screenshot_on_failure = "false";
      hookRegistry.addHook(
        HookType.AfterSuite,
        new HookMethod(
          jest.fn().mockImplementation(() => {
            const err = new Error("failed");

            err.stack = undefined;
            throw err;
          }),
          "Hooks.ts",
        ),
      );

      const req = new ExecutionEndingRequest();

      req.setCurrentexecutioninfo(new ExecutionInfo());

      const res = (await processor.process(req)).getExecutionresult();

      expect(res?.getFailed()).toBe(true);
      expect(res?.getErrormessage()).toBe("failed");
      expect(res?.getScreenshotsList().length).toBe(0);
    });

    it("should process ExecutionEndingRequest and give error with screenshot if a hook fails", async () => {
      Screenshot.capture = jest
        .fn()
        .mockReturnValue(new Uint8Array(new ArrayBuffer(10)));
      hookRegistry.addHook(
        HookType.AfterSuite,
        new HookMethod(
          jest.fn().mockImplementation(() => {
            throw new Error("failed");
          }),
          "Hooks.ts",
        ),
      );

      const req = new ExecutionEndingRequest();

      req.setCurrentexecutioninfo(new ExecutionInfo());

      const res = (await processor.process(req)).getExecutionresult();

      expect(res?.getFailed()).toBe(true);
      expect(res?.getErrormessage()).toBe("failed");

      expect(res?.getFailurescreenshotfile()).toBeTruthy();
    });
  });
});
