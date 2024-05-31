import {
  ExecutionInfo,
  SpecExecutionEndingRequest,
  SpecInfo,
} from "../../src/gen/messages_pb";
import { HookMethod } from "../../src/models/HookMethod";
import hookRegistry from "../../src/models/HookRegistry";
import { HookType } from "../../src/models/HookType";
import { SpecExecutionEndingProcessor } from "../../src/processors/SpecExecutionEndingProcessor";

describe("SpecExecutionEndingProcessor", () => {
  let processor: SpecExecutionEndingProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    hookRegistry.clear();
    process.env.screenshot_on_failure = "";
    processor = new SpecExecutionEndingProcessor();
  });

  describe(".process", () => {
    it("should process SpecExecutionEndingRequest and run AfterSpec hooks", async () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      hookRegistry.addHook(
        HookType.AfterSpec,
        new HookMethod(async () => {}, "Hooks.ts"),
      );
      const currentSpec = new SpecInfo();

      currentSpec.setName("foo");
      currentSpec.setFilename("foo.spec");
      currentSpec.setTagsList(["hello"]);
      const info = new ExecutionInfo();

      info.setCurrentspec(currentSpec);
      const req = new SpecExecutionEndingRequest();

      req.setCurrentexecutioninfo(info);

      const res = (await processor.process(req)).getExecutionresult();

      expect(res?.getFailed()).toBe(false);
    });
  });
});
