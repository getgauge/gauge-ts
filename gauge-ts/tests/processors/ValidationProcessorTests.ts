import {
  StepValidateRequest,
  StepValidateResponse_ErrorType,
} from "../../src/gen/messages";
import { ProtoStepValue } from "../../src/gen/spec";
import registry from "../../src/models/StepRegistry";
import { ValidationProcessor } from "../../src/processors/ValidationProcessor";

describe("ValidationProcessor", () => {
  let processor: ValidationProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    processor = new ValidationProcessor();
  });
  describe(".process", () => {
    it("should process StepValidateRequest request", () => {
      registry.isImplemented = jest.fn().mockReturnValue(true);
      const stepValue = ProtoStepValue.create({
        parameterizedStepValue: "foo",
        parameters: [],
        stepValue: "foo",
      });

      const req = StepValidateRequest.create({
        stepText: "foo",
        numberOfParameters: 0,
        stepValue,
      });

      const res = processor.process(req);

      expect(res.isValid).toBe(true);
    });

    it("should process StepValidateRequest request when step is not implemented", () => {
      registry.isImplemented = jest.fn().mockReturnValue(false);

      const stepValue = ProtoStepValue.create({
        parameterizedStepValue: "hello",
        stepValue: "hello",
      });

      const req = StepValidateRequest.create({
        stepText: "hello",
        stepValue,
      });

      const res = processor.process(req);

      expect(res.isValid).toBe(false);
      expect(res.errorType).toBe(
        StepValidateResponse_ErrorType.STEP_IMPLEMENTATION_NOT_FOUND,
      );
    });

    it("should process StepValidateRequest request and give suggestion when step is not implemented", () => {
      registry.isImplemented = jest.fn().mockReturnValue(false);

      const stepValue = ProtoStepValue.create({
        parameterizedStepValue: "say {} to {}",
        parameters: ["hello", "world"],
        stepValue: "say <hello> to <world>",
      });

      const req = StepValidateRequest.create({
        stepText: "say <hello> to <world>",
        numberOfParameters: 2,
        stepValue,
      });

      const res = processor.process(req);

      expect(res.isValid).toBe(false);
      expect(res.errorType).toBe(
        StepValidateResponse_ErrorType.STEP_IMPLEMENTATION_NOT_FOUND,
      );
    });

    it("should process StepValidateRequest request when step is implemented more than once", () => {
      registry.isImplemented = jest.fn().mockReturnValue(true);
      registry.hasMultipleImplementations = jest.fn().mockReturnValue(true);
      const stepValue = ProtoStepValue.create({
        parameterizedStepValue: "hello {}",
        parameters: ["world"],
        stepValue: "hello <world>",
      });

      const req = StepValidateRequest.create({
        stepText: "hello <world>",
        numberOfParameters: 1,
        stepValue,
      });

      const res = processor.process(req);

      expect(res.isValid).toBe(false);
      expect(res.errorType).toBe(
        StepValidateResponse_ErrorType.DUPLICATE_STEP_IMPLEMENTATION,
      );
    });
  });
});
