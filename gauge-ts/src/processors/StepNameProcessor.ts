import { type StepNameRequest, StepNameResponse } from "../gen/messages_pb";
import { Span } from "../gen/spec_pb";
import type { Range } from "../models/Range";
import registry from "../models/StepRegistry";

export class StepNameProcessor {
  public process(req: StepNameRequest): StepNameResponse {
    const res = new StepNameResponse();

    if (!registry.isImplemented(req.getStepvalue())) {
      res.setIssteppresent(false);
    } else {
      const info = registry.get(req.getStepvalue());
      const range = info.getRange() as Range;

      res.setIssteppresent(true);
      res.setFilename(info.getFilePath());
      res.setHasalias(info.hasAlias());
      res.setStepnameList([info.getStepText()]);
      const span = new Span();

      span.setStart(range.getStart().getLine());
      span.setStartchar(range.getStart().getChar());
      span.setEnd(range.getEnd().getLine());
      span.setEndchar(range.getEnd().getChar());
      res.setSpan(span);
    }

    return res;
  }
}
