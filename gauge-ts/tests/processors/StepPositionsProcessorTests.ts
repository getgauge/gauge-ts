import { StepPositionsRequest } from "../../src/gen/messages_pb";
import { Position } from "../../src/models/Position";
import { Range } from "../../src/models/Range";
import registry from "../../src/models/StepRegistry";
import { StepPositionsProcessor } from "../../src/processors/StepPositionsProcessor";

describe("StepPositionsProcessor", () => {
  let processor: StepPositionsProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    registry.clear();
    processor = new StepPositionsProcessor();
  });
  describe(".prcoess", () => {
    it("should StepPositionsRequest and give step positions for a given file", () => {
      registry.getStepPositions = jest.fn().mockReturnValue([
        {
          stepValue: "foo",
          span: new Range(new Position(3, 3), new Position(5, 3)),
        },
        {
          stepValue: "bar",
          span: new Range(new Position(7, 3), new Position(9, 3)),
        },
        {
          stepValue: "foo",
          span: new Range(new Position(11, 3), new Position(15, 3)),
        },
      ]);
      const req = new StepPositionsRequest();

      req.setFilepath("foo.js");
      const res = processor.process(req);

      expect(res.getError()).toBe("");
      expect(res.getSteppositionsList().length).toBe(3);
    });
  });
});
