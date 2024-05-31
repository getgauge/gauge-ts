import {
  type StepPositionsRequest,
  StepPositionsResponse,
} from "../gen/messages_pb";
import { Span } from "../gen/spec_pb";
import type { Range } from "../models/Range";
import registry from "../models/StepRegistry";

export class StepPositionsProcessor {
  public process(req: StepPositionsRequest): StepPositionsResponse {
    const positions = registry.getStepPositions(req.getFilepath());

    return this.createStepPostionsResponse(positions);
  }

  private createStepPostionsResponse(
    positions: { stepValue: string; span: Range }[],
  ): StepPositionsResponse {
    const res = new StepPositionsResponse();

    res.setError("");
    res.setSteppositionsList(
      positions.map((p) => {
        const sp = new StepPositionsResponse.StepPosition();

        sp.setStepvalue(p.stepValue);
        sp.setSpan(this.getSpan(p.span));

        return sp;
      }),
    );

    return res;
  }

  private getSpan(range: Range): Span {
    const span = new Span();

    span.setStart(range.getStart().getLine());
    span.setEnd(range.getEnd().getLine());
    span.setStartchar(range.getStart().getChar());
    span.setEndchar(range.getEnd().getChar());

    return span;
  }
}
