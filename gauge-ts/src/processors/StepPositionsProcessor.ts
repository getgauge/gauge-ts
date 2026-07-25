import {
  type StepPositionsRequest,
  StepPositionsResponse,
  StepPositionsResponse_StepPosition,
} from "../gen/messages";
import { Span } from "../gen/spec";
import type { Range } from "../models/Range";
import registry from "../models/StepRegistry";

export class StepPositionsProcessor {
  public process(req: StepPositionsRequest): StepPositionsResponse {
    const positions = registry.getStepPositions(req.filePath);

    return this.createStepPostionsResponse(positions);
  }

  private createStepPostionsResponse(
    positions: { stepValue: string; span: Range }[],
  ): StepPositionsResponse {
    return StepPositionsResponse.create({
      error: "",
      stepPositions: positions.map((p) =>
        StepPositionsResponse_StepPosition.create({
          stepValue: p.stepValue,
          span: this.getSpan(p.span),
        }),
      ),
    });
  }

  private getSpan(range: Range): Span {
    return Span.create({
      start: String(range.getStart().getLine()),
      end: String(range.getEnd().getLine()),
      startChar: String(range.getStart().getChar()),
      endChar: String(range.getEnd().getChar()),
    });
  }
}
