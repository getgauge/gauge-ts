/* eslint-disable @typescript-eslint/no-empty-function */
import { strictEqual } from "node:assert";
import { ExecuteStepRequest } from "../../src/gen/messages_pb";
import { Parameter, ProtoTable, ProtoTableRow } from "../../src/gen/spec_pb";
import registry from "../../src/models/StepRegistry";
import { StepRegistryEntry } from "../../src/models/StepRegistryEntry";
import { StepExecutionProcessor } from "../../src/processors/StepExecutionProcessor";
import { Screenshot } from "../../src/screenshot/Screenshot";

describe("StepExecutionProcessor", () => {
  let processor: StepExecutionProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    Screenshot.capture = jest.fn();
    processor = new StepExecutionProcessor();
  });

  describe(".process", () => {
    it("should process step execution request when step is unimplemented", async () => {
      const req = new ExecuteStepRequest();

      req.setActualsteptext("foo");
      req.setParsedsteptext("foo");
      const response = await processor.process(req);
      const result = response.getExecutionresult();

      expect(result?.getFailed()).toBe(true);
      expect(result?.getErrormessage()).toBe("Step Implementation not found");
    });

    it("should process step execution request when there is param lenght mismatch", async () => {
      const capture = jest.spyOn(Screenshot, "capture");

      registry.isImplemented = jest.fn().mockReturnValue(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      registry.get = jest
        .fn()
        .mockReturnValue(
          new StepRegistryEntry(
            "hello",
            "hello",
            "StepImpl.ts",
            (a: unknown) => { },
          ),
        );

      const req = new ExecuteStepRequest();

      req.setActualsteptext("hello");
      req.setParsedsteptext("hello");

      const response = await processor.process(req);
      const result = response.getExecutionresult();

      expect(result?.getFailed()).toBe(true);
      expect(result?.getErrormessage()).toBe(
        "Argument length mismatch for `hello`. Actual Count: [1], Expected Count: [0]",
      );
      expect(capture).toBeCalled();
    });

    it("should process step execution request", async () => {
      registry.isImplemented = jest.fn().mockReturnValue(true);
      registry.get = jest.fn().mockReturnValue(
        new StepRegistryEntry(
          "hello <world> to <table>",
          "hello {} to {}",
          "StepImpl.ts",
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (arg0: unknown, arg1: unknown) => { },
        ),
      );

      const p1 = new Parameter();

      p1.setName("world");
      p1.setValue("world");
      p1.setParametertype(Parameter.ParameterType.STATIC);
      const p2 = new Parameter();

      const table = new ProtoTable();
      const row1 = new ProtoTableRow();

      row1.setCellsList(["header"]);
      const row2 = new ProtoTableRow();

      row2.setCellsList(["value"]);
      table.setHeaders(row1);
      table.setRowsList([row2]);
      p2.setName("table");
      p2.setTable(table);
      p2.setParametertype(Parameter.ParameterType.TABLE);

      const req = new ExecuteStepRequest();

      req.setParsedsteptext("hello {} to {}");
      req.setActualsteptext("hello <world> to <table>");
      req.setParametersList([p1, p2]);

      const resMess = await processor.process(req);
      const result = resMess.getExecutionresult();

      expect(result?.getFailed()).toBe(false);
      expect(result?.getErrormessage()).toBe("");
    });

    it("should process step execution request when step is recoverable", async () => {
      const capture = jest.spyOn(Screenshot, "capture");

      process.env.screenshot_on_failure = "false";

      registry.isImplemented = jest.fn().mockReturnValue(true);
      const method = () => {
        strictEqual(1, 2);
      };

      registry.get = jest
        .fn()
        .mockReturnValue(
          new StepRegistryEntry("hello", "hello", "StepImpl.ts", method),
        );
      registry.getContinueOnFailureFunctions = jest
        .fn()
        .mockReturnValue(["AssertionError"]);

      const req = new ExecuteStepRequest();

      req.setActualsteptext("hello");
      req.setParsedsteptext("hello");

      const resMess = await processor.process(req);

      const result = resMess.getExecutionresult();

      expect(result?.getFailed()).toBe(true);
      expect(result?.getErrormessage()).toContain("1 !== 2");
      expect(result?.getRecoverableerror()).toBe(true);
      expect(capture).toBeCalledTimes(0);
    });

    it("should process step execution request when step fails", async () => {
      const capture = jest.spyOn(Screenshot, "capture");

      process.env.screenshot_on_failure = "false";

      registry.isImplemented = jest.fn().mockReturnValue(true);
      const method = () => {
        const err = new Error("failed");

        err.stack = undefined;
        throw err;
      };

      registry.get = jest
        .fn()
        .mockReturnValue(
          new StepRegistryEntry("hello", "hello", "StepImpl.ts", method),
        );
      const req = new ExecuteStepRequest();

      req.setActualsteptext("hello");
      req.setParsedsteptext("hello");

      const resMess = await processor.process(req);

      const result = resMess.getExecutionresult();

      expect(result?.getFailed()).toBe(true);
      expect(result?.getErrormessage()).toBe("failed");
      expect(result?.getStacktrace()).toBe("");
      expect(capture).toBeCalledTimes(0);
    });
  });
});
