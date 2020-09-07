import { EOL } from "os";
import { gauge } from "../../src/gen/messages";
import registry from "../../src/models/StepRegistry";
import { StepRegistryEntry } from "../../src/models/StepRegistryEntry";
import { RefactorProcessor } from "../../src/processors/RefactorProcessor";
import { Util } from "../../src/utils/Util";

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
    let processor: RefactorProcessor

    beforeEach(() => {
        jest.clearAllMocks();
        processor = new RefactorProcessor();
    })
    describe('.process', () => {
        it('should process RefactorRequest when step has mutiple impl and return response with error', async () => {
            registry.hasMultipleImplementations = jest.fn().mockReturnValue(true);
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.RefactorRequest,
                refactorRequest: new gauge.messages.RefactorRequest({
                    newStepValue: new gauge.messages.ProtoStepValue({
                        stepValue: "foo",
                        parameterizedStepValue: "foo"
                    }),
                    oldStepValue: new gauge.messages.ProtoStepValue({
                        stepValue: "bar",
                        parameterizedStepValue: "bar"
                    }),
                    saveChanges: false,
                })
            });

            const resMess = await processor.process(message);
            const res = resMess.refactorResponse as gauge.messages.RefactorResponse;

            expect(res.success).toBe(false);
            expect(res.error).toBe('Multiple Implementation found for bar');
        })

        it('should process RefactorRequest for a step and return response', async () => {
            registry.hasMultipleImplementations = jest.fn().mockReturnValue(false);
            registry.get = jest.fn().mockReturnValue(new StepRegistryEntry("foo", "foo", "StepImpl.ts"));
            Util.readFile = jest.fn().mockReturnValue(text1);
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.RefactorRequest,
                refactorRequest: new gauge.messages.RefactorRequest({
                    oldStepValue: new gauge.messages.ProtoStepValue({
                        stepValue: "foo",
                        parameterizedStepValue: "foo",
                    }),
                    newStepValue: new gauge.messages.ProtoStepValue({
                        stepValue: "bar",
                        parameterizedStepValue: "bar",
                    }),
                    saveChanges: false,
                })
            });

            const resMess = await processor.process(message);
            const res = resMess.refactorResponse as gauge.messages.RefactorResponse;

            expect(res.success).toBe(true);
            expect(res.error).toBe('');
            expect(res.filesChanged).toStrictEqual(['StepImpl.ts']);
            expect(res.fileChanges.length).toBe(2);
            const changes = res.fileChanges.map((c) => { return c as gauge.messages.FileChanges });

            expect(changes[0].fileName).toBe('StepImpl.ts');
            const diff = changes[0].diffs[0] as gauge.messages.TextDiff;

            expect(diff.content).toBe(`"bar"`);
            const span = diff.span as gauge.messages.Span;

            expect(span.start).toBe(3);
            expect(span.startChar).toBe(10);
            expect(span.end).toBe(3);
            expect(span.endChar).toBe(17);
        })

        it('should process RefactorRequest for a step with params and return response', async () => {
            registry.hasMultipleImplementations = jest.fn().mockReturnValue(false);
            registry.get = jest.fn().mockReturnValue(new StepRegistryEntry("The word <word> has <number> vowels.",
                "The word {} has {} vowels.", "StepImpl.ts"));
            Util.readFile = jest.fn().mockReturnValue(text2);
            Util.writeFile = jest.fn();

            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.RefactorRequest,
                refactorRequest: new gauge.messages.RefactorRequest({
                    oldStepValue: new gauge.messages.ProtoStepValue({
                        stepValue: "The word {} has {} vowels.",
                        parameterizedStepValue: "The word <word> has <number> vowels.",
                        parameters: ["word", "number"]
                    }),
                    newStepValue: new gauge.messages.ProtoStepValue({
                        stepValue: "This English word {} has {} vowels.",
                        parameterizedStepValue: "This English word <word_en> has <numbers> vowels.",
                        parameters: ["word_en", "numbers"]
                    }),
                    paramPositions: [
                        new gauge.messages.ParameterPosition({ oldPosition: -1, newPosition: 0 }),
                        new gauge.messages.ParameterPosition({ oldPosition: -1, newPosition: 1 })
                    ],
                    saveChanges: true,
                })
            });

            const resMess = await processor.process(message);
            const res = resMess.refactorResponse as gauge.messages.RefactorResponse;

            expect(res.success).toBe(true);
            expect(res.error).toBe('');
            expect(res.filesChanged).toStrictEqual(['StepImpl.ts']);
            expect(res.fileChanges.length).toBe(2);
            const changes = res.fileChanges.map((c) => { return c as gauge.messages.FileChanges });

            expect(changes[0].fileName).toBe('StepImpl.ts');
            const diff1 = changes[0].diffs[0] as gauge.messages.TextDiff;
            const diff2 = changes[1].diffs[0] as gauge.messages.TextDiff;

            expect(diff1.content).toBe('"This English word <word_en> has <numbers> vowels."');
            const span1 = diff1.span as gauge.messages.Span;

            expect(span1.start).toBe(3);
            expect(span1.startChar).toBe(10);
            expect(span1.end).toBe(3);
            expect(span1.endChar).toBe(48);

            expect(diff2.content).toBe("arg0: any, arg1: any");
            const span2 = diff2.span as gauge.messages.Span;

            expect(span2.start).toBe(4);
            expect(span2.startChar).toBe(21);
            expect(span2.end).toBe(4);
            expect(span2.endChar).toBe(43);
        })

        it('should process RefactorRequest for a step with params and return response', async () => {
            registry.hasMultipleImplementations = jest.fn().mockReturnValue(false);
            registry.get = jest.fn().mockReturnValue(new StepRegistryEntry("The word <word> has",
                "The word {} has", "StepImpl.ts"));
            Util.readFile = jest.fn().mockReturnValue(text3);
            Util.writeFile = jest.fn();

            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.RefactorRequest,
                refactorRequest: new gauge.messages.RefactorRequest({
                    oldStepValue: new gauge.messages.ProtoStepValue({
                        stepValue: "The word {} has",
                        parameterizedStepValue: "The word <word>",
                        parameters: ["word"]
                    }),
                    newStepValue: new gauge.messages.ProtoStepValue({
                        stepValue: "This English word {} has {} vowels.",
                        parameterizedStepValue: "This English word <word> has <number> vowels.",
                        parameters: ["word", "number"]
                    }),
                    paramPositions: [
                        new gauge.messages.ParameterPosition({ oldPosition: 0, newPosition: 0 }),
                        new gauge.messages.ParameterPosition({ oldPosition: -1, newPosition: 1 })
                    ],
                    saveChanges: true,
                })
            });

            const resMess = await processor.process(message);
            const res = resMess.refactorResponse as gauge.messages.RefactorResponse;

            expect(res.success).toBe(true);
            expect(res.error).toBe('');
            expect(res.filesChanged).toStrictEqual(['StepImpl.ts']);
            expect(res.fileChanges.length).toBe(2);
            const changes = res.fileChanges.map((c) => { return c as gauge.messages.FileChanges });

            expect(changes[0].fileName).toBe('StepImpl.ts');
            const diff1 = changes[0].diffs[0] as gauge.messages.TextDiff;
            const diff2 = changes[1].diffs[0] as gauge.messages.TextDiff;

            expect(diff1.content).toBe('"This English word <word> has <number> vowels."');
            const span1 = diff1.span as gauge.messages.Span;

            expect(span1.start).toBe(3);
            expect(span1.startChar).toBe(10);
            expect(span1.end).toBe(3);
            expect(span1.endChar).toBe(31);

            expect(diff2.content).toBe("word: any, arg1: any");
            const span2 = diff2.span as gauge.messages.Span;

            expect(span2.start).toBe(4);
            expect(span2.startChar).toBe(21);
            expect(span2.end).toBe(4);
            expect(span2.endChar).toBe(30);
        })

        it('should process RefactorRequest for a step and return response is fails', async () => {
            registry.hasMultipleImplementations = jest.fn().mockReturnValue(false);
            const error = new Error('fail to refactor');

            error.stack = "stacktrace";
            registry.get = jest.fn().mockImplementation(() => { throw error })

            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.RefactorRequest,
                refactorRequest: new gauge.messages.RefactorRequest({
                    oldStepValue: new gauge.messages.ProtoStepValue({
                        stepValue: "The word {} has",
                        parameterizedStepValue: "The word <word>",
                        parameters: ["word"]
                    }),
                    newStepValue: new gauge.messages.ProtoStepValue({
                        stepValue: "This English word {} has {} vowels.",
                        parameterizedStepValue: "This English word <word> has <number> vowels.",
                        parameters: ["word", "number"]
                    }),
                    paramPositions: [
                        new gauge.messages.ParameterPosition({ oldPosition: 0, newPosition: 0 }),
                        new gauge.messages.ParameterPosition({ oldPosition: -1, newPosition: 1 })
                    ],
                    saveChanges: true,
                })
            });

            const resMess = await processor.process(message);
            const res = resMess.refactorResponse as gauge.messages.RefactorResponse;

            expect(res.success).toBe(false);
            expect(res.error).toBe('fail to refactor' + EOL + "stacktrace");
        })
    })
})
