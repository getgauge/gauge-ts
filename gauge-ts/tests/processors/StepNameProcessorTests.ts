import { StepNameRequest } from "../../src/gen/messages_pb";
import { Position } from "../../src/models/Position";
import { Range } from "../../src/models/Range";
import registry from "../../src/models/StepRegistry";
import { StepRegistryEntry } from "../../src/models/StepRegistryEntry";
import { StepNameProcessor } from "../../src/processors/StepNameProcessor";

describe("StepNameProcessor", () => {
  describe(".process", () => {
    let processor: StepNameProcessor;

    beforeEach(() => {
      jest.clearAllMocks();
      registry.clear();
      process.env.screenshot_on_failure = "";
      processor = new StepNameProcessor();
    });
    it("should give the step info", () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      registry.add(
        "foo",
        new StepRegistryEntry(
          "foo",
          "foo",
          "foo.ts",
          () => {},
          new Range(new Position(3, 3), new Position(7, 3)),
        ),
      );

      const req = new StepNameRequest();

      req.setStepvalue("foo");

      const res = processor.process(req);

      expect(res?.getFilename()).toBe("foo.ts");
      expect(res?.getIssteppresent()).toBe(true);
      expect(res?.getHasalias()).toBe(false);
      expect(res?.getStepnameList()).toStrictEqual(["foo"]);

      const span = res?.getSpan();

      expect(span?.getStart()).toBe(3);
      expect(span?.getStartchar()).toBe(3);
      expect(span?.getEnd()).toBe(7);
      expect(span?.getEndchar()).toBe(3);
    });

    it("should give the step info if step is not implemented", () => {
      const req = new StepNameRequest();

      req.setStepvalue("foo");

      const res = processor.process(req);

      expect(res?.getIssteppresent()).toBe(false);
    });
  });
});
