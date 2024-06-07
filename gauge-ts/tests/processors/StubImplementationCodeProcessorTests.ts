import { EOL } from "node:os";
import { StubImplementationCodeRequest } from "../../src/gen/messages_pb";
import hookRegistry from "../../src/models/HookRegistry";
import { StubImplementationCodeProcessor } from "../../src/processors/StubImplementationCodeProcessor";
import { Util } from "../../src/utils/Util";

describe("StubImplementationCodeProcessor", () => {
  const text1 = `import { Step } from "gauge-ts";${EOL}export default class StepImpl {${EOL}    @Step("foo")${EOL}    public async foo() {${EOL}        console.log("Hello World");${EOL}    }${EOL}}`;

  let processor: StubImplementationCodeProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    hookRegistry.clear();
    process.env.screenshot_on_failure = "";
    processor = new StubImplementationCodeProcessor();
  });

  describe(".process", () => {
    it("should process StubImplementationCodeRequest and give the diff when file exists", () => {
      Util.exists = jest.fn().mockReturnValue(true);
      Util.readFile = jest.fn().mockReturnValue(text1);
      const code = `@Step("foo")${EOL}public async foo() {${EOL}    console.log("Hello World");${EOL}}`;

      const req = new StubImplementationCodeRequest();

      req.setImplementationfilepath("foo.ts");
      req.setCodesList([code]);

      const res = processor.process(req);
      const diffs = res?.getTextdiffsList();

      expect(diffs.length).toBe(1);

      const span = diffs[0].getSpan();

      expect(span?.getStart()).toBe(6);
      expect(span?.getStartchar()).toBe(0);
      expect(span?.getEnd()).toBe(6);
      expect(span?.getEndchar()).toBe(0);

      const expected =
        code
          .split(EOL)
          .map((s) => {
            return `\t${s}`;
          })
          .join(EOL) + EOL;

      expect(diffs[0].getContent()).toBe(expected);
    });

    it("should process StubImplementationCodeRequest and give the diff when file does not exists", () => {
      Util.exists = jest.fn().mockReturnValue(false);
      Util.getNewTSFileName = jest.fn().mockReturnValue("StepImpl.ts");
      Util.getImplDirs = jest.fn().mockReturnValue([]);
      const code1 = `@Step("foo")${EOL}public async foo() {${EOL}    console.log("Hello World");${EOL}}`;

      const code2 = `@Step("bar")${EOL}public async foo() {${EOL}    console.log("Hello World");${EOL}}`;

      const req = new StubImplementationCodeRequest();

      req.setImplementationfilepath("foo.ts");
      req.setCodesList([code1, code2]);

      const res = processor.process(req);
      const diffs = res?.getTextdiffsList();

      expect(diffs.length).toBe(1);

      const span = diffs[0].getSpan();

      expect(span?.getStart()).toBe(0);
      expect(span?.getStartchar()).toBe(0);
      expect(span?.getEnd()).toBe(0);
      expect(span?.getEndchar()).toBe(0);

      const expected = `import { Step } from "gauge-ts";${EOL}export default class StepImpl {${EOL}${code1
        .split(EOL)
        .map((s) => {
          return `\t${s}`;
        })
        .join(EOL)}${EOL}${code2
        .split(EOL)
        .map((s) => {
          return `\t${s}`;
        })
        .join(EOL)}${EOL}}`;

      expect(diffs[0].getContent()).toBe(expected);
    });
  });
});
