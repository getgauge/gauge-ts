import { randomBytes } from "node:crypto";
import { EOL } from "node:os";
import {
  type StepValidateRequest,
  StepValidateResponse,
  StepValidateResponse_ErrorType,
} from "../gen/messages";
import type { ProtoStepValue } from "../gen/spec";
import registry from "../models/StepRegistry";

export class ValidationProcessor {
  public process(req: StepValidateRequest): StepValidateResponse {
    const step = req.stepValue as ProtoStepValue;
    const stepValue = step.parameterizedStepValue;

    const res = StepValidateResponse.create({
      isValid: true,
      errorMessage: "",
    });

    if (!registry.isImplemented(req.stepText)) {
      res.isValid = false;
      res.errorMessage = `No step implementation found for ${stepValue}`;
      res.errorType =
        StepValidateResponse_ErrorType.STEP_IMPLEMENTATION_NOT_FOUND;
      res.suggestion = this.getSuggestion(step);
    } else if (registry.hasMultipleImplementations(req.stepText)) {
      res.isValid = false;
      res.errorMessage = `Multiple step implementation found for ${stepValue}`;
      res.errorType =
        StepValidateResponse_ErrorType.DUPLICATE_STEP_IMPLEMENTATION;
    }

    return res;
  }

  private getSuggestion(step: ProtoStepValue): string {
    let argCount = 0;
    const stepText = step.parameterizedStepValue.replace(
      /{}/g,
      () => `<arg${argCount++}>`,
    );

    return `@Step("${stepText}")${EOL}public async ${this.getMethodName()}(${this.getParamsList(
      step.parameters,
    )}) {${EOL}\tthrow new Error("Method not implemented.");${EOL}}`;
  }

  private getMethodName() {
    return `implementation${randomBytes(10).toString("hex")}`;
  }

  private getParamsList(params: string[]): string {
    if (!params || !params.length) {
      return "";
    }

    return params
      .map((_, i) => {
        return `arg${i.toString()}: any`;
      })
      .join(", ");
  }
}
