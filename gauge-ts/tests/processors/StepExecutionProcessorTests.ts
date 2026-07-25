/* eslint-disable @typescript-eslint/no-empty-function */
import { strictEqual } from "node:assert";
import { ExecuteStepRequest } from "../../src/gen/messages";
import {
  Parameter,
  Parameter_ParameterType,
  ProtoTable,
  ProtoTableRow,
} from "../../src/gen/spec";
import registry from "../../src/models/StepRegistry";
import { StepRegistryEntry } from "../../src/models/StepRegistryEntry";
import { StepExecutionProcessor } from "../../src/processors/StepExecutionProcessor";
import type { ParameterParsingChain } from "../../src/processors/params/ParameterParsingChain";
import { Screenshot } from "../../src/screenshot/Screenshot";

describe("StepExecutionProcessor", () => {
  let processor: StepExecutionProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    Screenshot.capture = jest.fn();
    const chain = {
      parse: jest.fn(),
      canParse: jest.fn(),
      addCustomParser: jest.fn(),
    } as unknown as ParameterParsingChain;
    processor = new StepExecutionProcessor(chain);
  });

  describe(".process", () => {
    it("should process step execution request when step is unimplemented", async () => {
      const req = ExecuteStepRequest.create({
        actualStepText: "foo",
        parsedStepText: "foo",
      });

      const response = await processor.process(req);
      const result = response.executionResult;

      expect(result?.failed).toBe(true);
      expect(result?.errorMessage).toBe("Step Implementation not found");
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
            (a: unknown) => {},
          ),
        );

      const req = ExecuteStepRequest.create({
        actualStepText: "hello",
        parsedStepText: "hello",
      });

      const response = await processor.process(req);
      const result = response.executionResult;

      expect(result?.failed).toBe(true);
      expect(result?.errorMessage).toBe(
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
          (arg0: unknown, arg1: unknown) => {},
        ),
      );

      const table = ProtoTable.create({
        headers: ProtoTableRow.create({ cells: ["header"] }),
        rows: [ProtoTableRow.create({ cells: ["value"] })],
      });
      const p1 = Parameter.create({
        name: "world",
        value: "world",
        parameterType: Parameter_ParameterType.Static,
      });
      const p2 = Parameter.create({
        name: "table",
        table,
        parameterType: Parameter_ParameterType.Table,
      });

      const req = ExecuteStepRequest.create({
        parsedStepText: "hello {} to {}",
        actualStepText: "hello <world> to <table>",
        parameters: [p1, p2],
      });

      const resMess = await processor.process(req);
      const result = resMess.executionResult;

      expect(result?.failed).toBe(false);
      expect(result?.errorMessage).toBe("");
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

      const req = ExecuteStepRequest.create({
        actualStepText: "hello",
        parsedStepText: "hello",
      });

      const resMess = await processor.process(req);

      const result = resMess.executionResult;

      expect(result?.failed).toBe(true);
      expect(result?.errorMessage).toContain("1 !== 2");
      expect(result?.recoverableError).toBe(true);
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
      const req = ExecuteStepRequest.create({
        actualStepText: "hello",
        parsedStepText: "hello",
      });

      const resMess = await processor.process(req);

      const result = resMess.executionResult;

      expect(result?.failed).toBe(true);
      expect(result?.errorMessage).toBe("failed");
      expect(result?.stackTrace).toBe("");
      expect(capture).toBeCalledTimes(0);
    });
  });
});
