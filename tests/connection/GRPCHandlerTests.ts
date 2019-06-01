import { Server } from 'grpc';
import { mockProcessExit } from 'jest-mock-process';
import { EOL } from 'os';
import { GRPCHandler } from '../../src/connection/GRPCHandler';
import { gauge } from '../../src/gen/messages';
import { StaticLoader } from '../../src/loaders/StaticLoader';
import { Position } from '../../src/models/Position';
import { Range } from '../../src/models/Range';
import registry from '../../src/models/StepRegistry';
import { MessageProcessorFactory } from '../../src/processors/MessageProcessorFactory';
import { Util } from '../../src/utils/Util';

describe('GRPCHandler', () => {

    let text1 = `import { Step } from "gauge-ts";` + EOL +
        `export default class StepImpl {` + EOL +
        `    @Step("foo")` + EOL +
        `    public async foo() {` + EOL +
        `        console.log("Hello World");` + EOL +
        `    }` + EOL +
        `}`;

    let hanlder: GRPCHandler;
    let factory: MessageProcessorFactory;
    let loader: StaticLoader;

    beforeEach(() => {
        jest.clearAllMocks();
        loader = new StaticLoader();
        factory = new MessageProcessorFactory(loader)
        hanlder = new GRPCHandler(null, factory);
        registry.clear();
    })

    describe('.getStepNames', () => {
        it('should give all the step names', () => {
            let res = new gauge.messages.StepNamesRequest({});
            Util.getImplDirs = jest.fn().mockReturnValue(['src', 'tests'])
            hanlder.getGlobPatterns({ request: res }, (err: gauge.messages.Error | null, res?: gauge.messages.ImplementationFileGlobPatternResponse) => {
                expect(err).toBe(null);
                let patterns = (res as gauge.messages.ImplementationFileGlobPatternResponse).globPatterns;
                expect(patterns).toStrictEqual(['src/**/*.ts', 'tests/**/*.ts']);
            })
        })
    })

    describe('.cacheFile', () => {
        it('should update the registry', () => {
            let res = new gauge.messages.CacheFileRequest({
                content: text1,
                filePath: 'StepImpl.ts',
                status: gauge.messages.CacheFileRequest.FileStatus.OPENED
            })
            hanlder.cacheFile({ request: res }, (err: gauge.messages.Error | null, res?: gauge.messages.Empty) => {
                expect(err).toBe(null);
                expect(registry.isImplemented('foo')).toBe(true);
            })
        })
    })

    describe('.getStepNames', () => {
        it('should give all the step names', () => {
            let res = new gauge.messages.StepNamesRequest({});
            registry.getStepTexts = jest.fn().mockReturnValue(['foo']);
            hanlder.getStepNames({ request: res }, (err: gauge.messages.Error | null, res?: gauge.messages.StepNamesResponse) => {
                expect(err).toBe(null);
                expect((res as gauge.messages.StepNamesResponse).steps).toStrictEqual(['foo']);
            })
        })
    })

    describe('.getStepPositions', () => {
        it('should give step positions', () => {
            let res = new gauge.messages.StepPositionsRequest({ filePath: "StepImpl.ts" });
            registry.getStepPositions = jest.fn().mockReturnValue([{ stepValue: 'foo', span: new Range(new Position(3, 5), new Position(8, 5)) }])
            hanlder.getStepPositions({ request: res }, (err: gauge.messages.Error | null, res?: gauge.messages.StepPositionsResponse) => {
                expect(err).toBe(null);
                let positions = (res as gauge.messages.StepPositionsResponse).stepPositions;
                expect(positions.length).toBe(1);
                expect(positions[0].stepValue).toBe('foo');
                let span = positions[0].span as gauge.messages.Span;
                expect(span.start).toBe(3);
                expect(span.startChar).toBe(5);
                expect(span.end).toBe(8);
                expect(span.endChar).toBe(5);
            })
        })
    })

    describe('.getImplementationFiles', () => {
        it('should give all the step impl files', () => {
            let res = new gauge.messages.ImplementationFileListRequest({});
            Util.getListOfFiles = jest.fn().mockReturnValue(['StepImpl.ts']);
            hanlder.getImplementationFiles({ request: res }, (err: gauge.messages.Error | null, res?: gauge.messages.ImplementationFileListRequest) => {
                expect(err).toBe(null);
                expect((res as gauge.messages.ImplementationFileListResponse).implementationFilePaths).toStrictEqual(['StepImpl.ts']);
            })
        })
    })

    describe('.implementStub', () => {
        it('implement a stub', () => {
            Util.exists = jest.fn().mockReturnValue(true);
            Util.readFile = jest.fn().mockReturnValue(text1);
            let code = `@Step("bar")` + EOL +
                `public async foo() {` + EOL +
                `    console.log("Hello World");` + EOL +
                `}`
            let res = new gauge.messages.StubImplementationCodeRequest({
                implementationFilePath: 'StepImpl.ts',
                codes: [code],
            });
            hanlder.implementStub({ request: res }, (err: gauge.messages.Error | null, res?: gauge.messages.FileDiff) => {
                expect(err).toBe(null);
                expect((res as gauge.messages.FileDiff).filePath).toStrictEqual('StepImpl.ts');
                let diffs = (res as gauge.messages.FileDiff).textDiffs.map((d) => { return d as gauge.messages.TextDiff });
                expect(diffs[0].content).toBe(code.split(EOL).map((p) => { return `\t${p}` }).join(EOL) + EOL);
            })
        })
    })

    describe('.validateStep', () => {
        it('should valiadate a step', () => {
            registry.isImplemented = jest.fn().mockReturnValue(true);
            let res = new gauge.messages.StepValidateRequest({
                stepText: "foo",
                stepValue: new gauge.messages.ProtoStepValue({
                    stepValue: "foo", parameterizedStepValue: "foo"
                }),
            });
            hanlder.validateStep({ request: res }, (err: gauge.messages.Error | null, res?: gauge.messages.StepValidateResponse) => {
                expect(err).toBe(null);
                expect((res as gauge.messages.StepValidateResponse).isValid).toBe(true);
            })
        })
    })

    describe('.refactor', () => {
        it('should refactor a step', () => {
            loader.loadStepsFromText('StepImpl.ts', text1);
            let res = new gauge.messages.RefactorRequest({
                oldStepValue: new gauge.messages.ProtoStepValue({
                    stepValue: "foo",
                    parameterizedStepValue: "foo",
                }),
                newStepValue: new gauge.messages.ProtoStepValue({
                    stepValue: "bar",
                    parameterizedStepValue: "bar",
                }), paramPositions: [],
                saveChanges: false
            });
            hanlder.refactor({ request: res }, (err: gauge.messages.Error | null, res?: gauge.messages.RefactorResponse) => {
                expect(err).toBe(null);
                expect((res as gauge.messages.RefactorResponse).success).toBe(true);
            })
        })
    })

    describe('.getStepName', () => {
        it('should give a step info', () => {
            loader.loadStepsFromText('StepImpl.ts', text1);
            let res = new gauge.messages.StepNameRequest({
                stepValue: "foo",
            });
            hanlder.getStepName({ request: res }, (err: gauge.messages.Error | null, res?: gauge.messages.StepNameResponse) => {
                expect(err).toBe(null);
                expect((res as gauge.messages.StepNameResponse).fileName).toBe('StepImpl.ts');
                expect((res as gauge.messages.StepNameResponse).isStepPresent).toBe(true);
            })
        })
    })

    describe('.killProcess', () => {
        it('should give a step info', () => {
            let s = new Server();
            hanlder = new GRPCHandler(s, factory);
            mockProcessExit();
            let mockShutdown = jest.spyOn(s, 'forceShutdown');
            let req = new gauge.messages.KillProcessRequest();
            hanlder.killProcess({ request: req }, (err: gauge.messages.Error | null, res?: gauge.messages.Empty) => {
                expect(err).toBe(null);
                expect(mockShutdown).toHaveBeenCalled();
            })
        })
    })

})
