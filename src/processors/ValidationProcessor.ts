import { randomBytes } from "node:crypto";
import { EOL } from "node:os";
import {
  type StepValidateRequest,
  StepValidateResponse,
} from "../gen/messages_pb";
import type { ProtoStepValue } from "../gen/spec_pb";
import registry from "../models/StepRegistry";

export class ValidationProcessor {
  public process(req: StepValidateRequest): StepValidateResponse {
    const step = req.getStepvalue() as ProtoStepValue;
    const stepValue = step.getParameterizedstepvalue();

    const res = new StepValidateResponse();

    res.setIsvalid(true);
    res.setErrormessage("");
    if (!registry.isImplemented(req.getSteptext())) {
      res.setIsvalid(false);
      res.setErrormessage(`No step implementation found for ${stepValue}`);
      res.setErrortype(
        StepValidateResponse.ErrorType.STEP_IMPLEMENTATION_NOT_FOUND,
      );
      res.setSuggestion(this.getSuggestion(step));
    } else if (registry.hasMultipleImplementations(req.getSteptext())) {
      res.setIsvalid(false);
      res.setErrormessage(
        `Multiple step implementation found for ${stepValue}`,
      );
      res.setErrortype(
        StepValidateResponse.ErrorType.DUPLICATE_STEP_IMPLEMENTATION,
      );
    }

    return res;
  }

  private getSuggestion(step: ProtoStepValue): string {
    let argCount = 0;
    const stepText = step
      .getParameterizedstepvalue()
      .replace(/{}/g, () => `<arg${argCount++}>`);

    return `@Step("${stepText}")${EOL}public async ${this.getMethodName()}(${this.getParamsList(
      step.getParametersList(),
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
