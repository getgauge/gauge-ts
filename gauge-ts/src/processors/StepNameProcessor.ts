import { type StepNameRequest, StepNameResponse } from "../gen/messages";
import { Span } from "../gen/spec";
import type { Range } from "../models/Range";
import registry from "../models/StepRegistry";

export class StepNameProcessor {
  public process(req: StepNameRequest): StepNameResponse {
    if (!registry.isImplemented(req.stepValue)) {
      return StepNameResponse.create({ isStepPresent: false });
    }

    const info = registry.get(req.stepValue);
    const range = info.getRange() as Range;

    return StepNameResponse.create({
      isStepPresent: true,
      fileName: info.getFilePath(),
      hasAlias: info.hasAlias(),
      stepName: [info.getStepText()],
      span: Span.create({
        start: String(range.getStart().getLine()),
        startChar: String(range.getStart().getChar()),
        end: String(range.getEnd().getLine()),
        endChar: String(range.getEnd().getChar()),
      }),
    });
  }
}
