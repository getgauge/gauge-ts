/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { EOL } from "os";
import registry from "../../src/models/StepRegistry";
import { StepRegistryEntry } from "../../src/models/StepRegistryEntry";
import { RefactorProcessor } from "../../src/processors/RefactorProcessor";
import { Util } from "../../src/utils/Util";
import { ProtoStepValue } from "../../src/gen/spec_pb";
import { RefactorRequest, ParameterPosition } from "../../src/gen/messages_pb";

describe.only('RefactorProcessor', () => {

  const text1 = `import { Step } from "gauge-ts";` + EOL +
    `export default class StepImpl {` + EOL +
    `    @Step(["foo"])` + EOL +
    `    public async foo() {` + EOL +
    `        console.log("Hello World");` + EOL +
    `    }` + EOL +
    `}`;

  const text2 = `import { Step } from "gauge-ts";` + EOL +
    `export default class StepImpl {` + EOL +
    `    @Step("The word <word> has <number> vowels.")` + EOL +
    `    public async foo(word: any, number: any) {` + EOL +
    `        console.log("Hello World");` + EOL +
    `    }` + EOL +
    `}`;

  const text3 = `import { Step } from "gauge-ts";` + EOL +
    `export default class StepImpl {` + EOL +
    `    @Step("The word <word> has")` + EOL +
    `    public async foo(word: any) {` + EOL +
    `        console.log("Hello World");` + EOL +
    `    }` + EOL +
    `}`;
  let processor: RefactorProcessor;

  beforeEach(() => {
    jest.clearAllMocks();
    processor = new RefactorProcessor();
  });
  describe('.process', () => {
    it('should process RefactorRequest when step has mutiple impl and return response with error', () => {
      registry.hasMultipleImplementations = jest.fn().mockReturnValue(true);

      const newStepValue = new ProtoStepValue();

      newStepValue.setStepvalue("foo");
      newStepValue.setParameterizedstepvalue("foo");
      const oldStepValue = new ProtoStepValue();

      oldStepValue.setStepvalue("bar");
      oldStepValue.setParameterizedstepvalue("bar");
      const request = new RefactorRequest();

      request.setNewstepvalue(newStepValue);
      request.setOldstepvalue(oldStepValue);
      request.setSavechanges(false);

      const res = processor.process(request);

      expect(res?.getSuccess()).toBe(false);
      expect(res?.getError()).toBe('Multiple Implementation found for bar');
    });

    it('should process RefactorRequest for a step and return response', () => {
      registry.hasMultipleImplementations = jest.fn().mockReturnValue(false);
      registry.get = jest.fn().mockReturnValue(new StepRegistryEntry("foo", "foo", "StepImpl.ts"));
      Util.readFile = jest.fn().mockReturnValue(text1);

      const oldStepValue = new ProtoStepValue();

      oldStepValue.setStepvalue("foo");
      oldStepValue.setParameterizedstepvalue("foo");
      const newStepValue = new ProtoStepValue();

      newStepValue.setStepvalue("bar");
      newStepValue.setParameterizedstepvalue("bar");
      const request = new RefactorRequest();

      request.setNewstepvalue(newStepValue);
      request.setOldstepvalue(oldStepValue);
      request.setSavechanges(false);

      const res = processor.process(request);

      expect(res?.getSuccess()).toBe(true);
      expect(res?.getError()).toBe('');
      expect(res?.getFileschangedList()).toStrictEqual(['StepImpl.ts']);
      expect(res?.getFilechangesList().length).toBe(2);
      const changes = res?.getFilechangesList();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(changes?.[0].getFilename()).toBe('StepImpl.ts');
      const diff = changes?.[0].getDiffsList()[0];

      expect(diff?.getContent()).toBe('"bar"');
      const span = diff?.getSpan();

      expect(span?.getStart()).toBe(3);
      expect(span?.getStartchar()).toBe(10);
      expect(span?.getEnd()).toBe(3);
      expect(span?.getEndchar()).toBe(17);
    });

    it('should process RefactorRequest for a step with params and return response', () => {
      registry.hasMultipleImplementations = jest.fn().mockReturnValue(false);
      registry.get = jest.fn().mockReturnValue(new StepRegistryEntry("The word <word> has <number> vowels.",
        "The word {} has {} vowels.", "StepImpl.ts"));
      Util.readFile = jest.fn().mockReturnValue(text2);
      Util.writeFile = jest.fn();

      const oldStepValue = new ProtoStepValue();

      oldStepValue.setStepvalue("The word {} has {} vowels.");
      oldStepValue.setParameterizedstepvalue("The word <word> has <number> vowels.");
      oldStepValue.setParametersList(["word", "number"]);
      const newStepValue = new ProtoStepValue();

      newStepValue.setStepvalue("This English word {} has {} vowels.");
      newStepValue.setParameterizedstepvalue("This English word <word_en> has <numbers> vowels.");
      newStepValue.setParametersList(["word_en", "numbers"]);

      const pp1 = new ParameterPosition();

      pp1.setOldposition(-1);
      pp1.setNewposition(0);
      const pp2 = new ParameterPosition();

      pp2.setOldposition(-1);
      pp2.setNewposition(1);

      const request = new RefactorRequest();

      request.setNewstepvalue(newStepValue);
      request.setOldstepvalue(oldStepValue);
      request.setParampositionsList([pp1, pp2]);

      const res = processor.process(request);

      expect(res?.getSuccess()).toBe(true);
      expect(res?.getError()).toBe('');
      expect(res?.getFilechangesList().length).toBe(2);

      const changes = res?.getFilechangesList();

      expect(changes[0].getFilename()).toBe('StepImpl.ts');

      const diff1 = changes[0].getDiffsList()[0];

      expect(diff1.getContent()).toBe('"This English word <word_en> has <numbers> vowels."');

      const span1 = diff1.getSpan();

      expect(span1?.getStart()).toBe(3);
      expect(span1?.getStartchar()).toBe(10);
      expect(span1?.getEnd()).toBe(3);
      expect(span1?.getEndchar()).toBe(48);

      const diff2 = changes[1].getDiffsList()[0];

      expect(diff2.getContent()).toBe("arg0: any, arg1: any");

      const span2 = diff2.getSpan();

      expect(span2?.getStart()).toBe(4);
      expect(span2?.getStartchar()).toBe(21);
      expect(span2?.getEnd()).toBe(4);
      expect(span2?.getEndchar()).toBe(43);
    });

    it('should process RefactorRequest for a step with params and return response', () => {
      registry.hasMultipleImplementations = jest.fn().mockReturnValue(false);
      registry.get = jest.fn().mockReturnValue(new StepRegistryEntry("The word <word> has",
        "The word {} has", "StepImpl.ts"));
      Util.readFile = jest.fn().mockReturnValue(text3);
      Util.writeFile = jest.fn();

      const oldStepValue = new ProtoStepValue();

      oldStepValue.setStepvalue("The word {} has");
      oldStepValue.setParameterizedstepvalue("The word <word>");
      oldStepValue.setParametersList(["word"]);
      const newStepValue = new ProtoStepValue();

      newStepValue.setStepvalue("This English word {} has {} vowels.");
      newStepValue.setParameterizedstepvalue("This English word <word> has <number> vowels.");
      newStepValue.setParametersList(["word", "number"]);

      const pp1 = new ParameterPosition();

      pp1.setOldposition(0);
      pp1.setNewposition(0);
      const pp2 = new ParameterPosition();

      pp2.setOldposition(-1);
      pp2.setNewposition(1);

      const request = new RefactorRequest();

      request.setNewstepvalue(newStepValue);
      request.setOldstepvalue(oldStepValue);
      request.setParampositionsList([pp1, pp2]);

      const res = processor.process(request);

      expect(res?.getSuccess()).toBe(true);
      expect(res?.getError()).toBe('');
      expect(res?.getFilechangesList().length).toBe(2);

      const changes = res?.getFilechangesList();

      expect(changes[0].getFilename()).toBe('StepImpl.ts');

      const diff1 = changes[0].getDiffsList()[0];
      const diff2 = changes[1].getDiffsList()[0];

      expect(diff1.getContent()).toBe('"This English word <word> has <number> vowels."');

      const span1 = diff1.getSpan();

      expect(span1?.getStart()).toBe(3);
      expect(span1?.getStartchar()).toBe(10);
      expect(span1?.getEnd()).toBe(3);
      expect(span1?.getEndchar()).toBe(31);

      expect(diff2.getContent()).toBe("word: any, arg1: any");

      const span2 = diff2.getSpan();

      expect(span2?.getStart()).toBe(4);
      expect(span2?.getStartchar()).toBe(21);
      expect(span2?.getEnd()).toBe(4);
      expect(span2?.getEndchar()).toBe(30);
    });

    it('should process RefactorRequest for a step and return response is fails', () => {
      registry.hasMultipleImplementations = jest.fn().mockReturnValue(false);
      const error = new Error('fail to refactor');

      error.stack = "stacktrace";
      registry.get = jest.fn().mockImplementation(() => { throw error; });

      const oldStepValue = new ProtoStepValue();

      oldStepValue.setStepvalue("The word {} has");
      oldStepValue.setParameterizedstepvalue("The word <word>");
      oldStepValue.setParametersList(["word"]);
      const newStepValue = new ProtoStepValue();

      newStepValue.setStepvalue("This English word {} has {} vowels.");
      newStepValue.setParameterizedstepvalue("This English word <word> has <number> vowels.");
      newStepValue.setParametersList(["word", "number"]);

      const pp1 = new ParameterPosition();

      pp1.setOldposition(0);
      pp1.setNewposition(0);
      const pp2 = new ParameterPosition();

      pp2.setOldposition(-1);
      pp2.setNewposition(1);

      const request = new RefactorRequest();

      request.setNewstepvalue(newStepValue);
      request.setOldstepvalue(oldStepValue);
      request.setParampositionsList([pp1, pp2]);

      const res = processor.process(request);

      expect(res?.getSuccess()).toBe(false);
      expect(res?.getError()).toBe('fail to refactor' + EOL + "stacktrace");
    });
  });
});
