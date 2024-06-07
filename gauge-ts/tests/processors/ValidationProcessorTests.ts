import {
  StepValidateRequest,
  StepValidateResponse,
} from "../../src/gen/messages_pb";
import { ProtoStepValue } from "../../src/gen/spec_pb";
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
      const stepValue = new ProtoStepValue();

      stepValue.setParameterizedstepvalue("foo");
      stepValue.setParametersList([]);
      stepValue.setStepvalue("foo");

      const req = new StepValidateRequest();

      req.setSteptext("foo");
      req.setNumberofparameters(0);
      req.setStepvalue(stepValue);

      const res = processor.process(req);

      expect(res.getIsvalid()).toBe(true);
    });

    it("should process StepValidateRequest request when step is not implemented", () => {
      registry.isImplemented = jest.fn().mockReturnValue(false);

      const stepValue = new ProtoStepValue();

      stepValue.setParameterizedstepvalue("hello");
      stepValue.setStepvalue("hello");

      const req = new StepValidateRequest();

      req.setSteptext("hello");
      req.setStepvalue(stepValue);

      const res = processor.process(req);

      expect(res.getIsvalid()).toBe(false);
      expect(res.getErrortype()).toBe(
        StepValidateResponse.ErrorType.STEP_IMPLEMENTATION_NOT_FOUND,
      );
    });

    it("should process StepValidateRequest request and give suggestion when step is not implemented", () => {
      registry.isImplemented = jest.fn().mockReturnValue(false);

      const stepValue = new ProtoStepValue();

      stepValue.setParameterizedstepvalue("say {} to {}");
      stepValue.setParametersList(["hello", "world"]);
      stepValue.setStepvalue("say <hello> to <world>");

      const req = new StepValidateRequest();

      req.setSteptext("say <hello> to <world>");
      req.setNumberofparameters(2);
      req.setStepvalue(stepValue);

      const res = processor.process(req);

      expect(res.getIsvalid()).toBe(false);
      expect(res.getErrortype()).toBe(
        StepValidateResponse.ErrorType.STEP_IMPLEMENTATION_NOT_FOUND,
      );
    });

    it("should process StepValidateRequest request when step is implemented more than once", () => {
      registry.isImplemented = jest.fn().mockReturnValue(true);
      registry.hasMultipleImplementations = jest.fn().mockReturnValue(true);
      const stepValue = new ProtoStepValue();

      stepValue.setParameterizedstepvalue("hello {}");
      stepValue.setParametersList(["world"]);
      stepValue.setStepvalue("hello <world>");

      const req = new StepValidateRequest();

      req.setSteptext("hello <world>");
      req.setNumberofparameters(1);
      req.setStepvalue(stepValue);

      const res = processor.process(req);

      expect(res.getIsvalid()).toBe(false);
      expect(res.getErrortype()).toBe(
        StepValidateResponse.ErrorType.DUPLICATE_STEP_IMPLEMENTATION,
      );
    });
  });
});
