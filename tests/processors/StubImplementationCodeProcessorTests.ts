import { EOL } from 'os';
import { gauge } from '../../src/gen/messages';
import hookRegistry from '../../src/models/HookRegistry';
import { StubImplementationCodeProcessor } from '../../src/processors/StubImplementationCodeProcessor';
import { Util } from '../../src/utils/Util';

describe('StubImplementationCodeProcessor', () => {

    const text1 = `import { Step } from "gauge-ts";` + EOL +
        `export default class StepImpl {` + EOL +
        `    @Step("foo")` + EOL +
        `    public async foo() {` + EOL +
        `        console.log("Hello World");` + EOL +
        `    }` + EOL +
        `}`;

    let processor: StubImplementationCodeProcessor

    beforeEach(() => {
        jest.clearAllMocks();
        hookRegistry.clear();
        process.env.screenshot_on_failure = "";
        processor = new StubImplementationCodeProcessor();
    })

    describe('.process', () => {
        it.only('should process StubImplementationCodeRequest and give the diff when file exists', async () => {
            Util.exists = jest.fn().mockReturnValue(true);
            Util.readFile = jest.fn().mockReturnValue(text1);
            const code = `@Step("foo")` + EOL +
                `public async foo() {` + EOL +
                `    console.log("Hello World");` + EOL +
                `}`
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.StubImplementationCodeRequest,
                stubImplementationCodeRequest: new gauge.messages.StubImplementationCodeRequest({
                    implementationFilePath: 'foo.ts',
                    codes: [code]
                })
            })
            const resMessage = (await processor.process(message)).fileDiff as gauge.messages.FileDiff;
            const diff = resMessage.textDiffs.map(d => d as gauge.messages.TextDiff);

            expect(diff.length).toBe(1);
            const span = diff[0].span as gauge.messages.Span;

            expect(span.start).toBe(6);
            expect(span.startChar).toBe(0);
            expect(span.end).toBe(6);
            expect(span.endChar).toBe(0);
            const expected = code.split(EOL).map((s) => { return '\t' + s }).join(EOL) + EOL;

            expect(diff[0].content).toBe(expected);
        })

        it.only('should process StubImplementationCodeRequest and give the diff when file does not exists', async () => {
            Util.exists = jest.fn().mockReturnValue(false);
            Util.getNewTSFileName = jest.fn().mockReturnValue('StepImpl.ts');
            Util.getImplDirs = jest.fn().mockReturnValue([]);
            const code = `@Step("foo")` + EOL +
                `public async foo() {` + EOL +
                `    console.log("Hello World");` + EOL +
                `}`
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.StubImplementationCodeRequest,
                stubImplementationCodeRequest: new gauge.messages.StubImplementationCodeRequest({
                    implementationFilePath: '',
                    codes: [code]
                })
            })
            const resMessage = (await processor.process(message)).fileDiff as gauge.messages.FileDiff;
            const diff = resMessage.textDiffs.map(d => d as gauge.messages.TextDiff);

            expect(diff.length).toBe(1);
            const span = diff[0].span as gauge.messages.Span;

            expect(span.start).toBe(0);
            expect(span.startChar).toBe(0);
            expect(span.end).toBe(0);
            expect(span.endChar).toBe(0);
            const expected = `import { Step } from "gauge-ts";` + EOL +
                `export default class StepImpl {` + EOL +
                `\t@Step("foo")` + EOL +
                `\tpublic async foo() {` + EOL +
                `\t    console.log("Hello World");` + EOL +
                `\t}` + EOL +
                `}`;

            expect(diff[0].content).toBe(expected);

        })
    })

})
