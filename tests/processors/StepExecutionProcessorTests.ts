import { equal } from 'assert';
import { gauge } from '../../src/gen/messages';
import registry from '../../src/models/StepRegistry';
import { StepRegistryEntry } from '../../src/models/StepRegistryEntry';
import { StepExecutionProcessor } from '../../src/processors/StepExecutionProcessor';
import { Screenshot } from '../../src/screenshot/Screenshot';

describe('StepExecutionProcessor', () => {

    let processor: StepExecutionProcessor;

    beforeEach(() => {
        jest.clearAllMocks();
        Screenshot.capture = jest.fn()
        processor = new StepExecutionProcessor();
    })

    describe('.process', () => {
        it('should process step execution request when step is unimplemented', async () => {
            let message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecuteStep,
                executeStepRequest: new gauge.messages.ExecuteStepRequest({
                    parsedStepText: "hello",
                    actualStepText: "hello",
                })
            })
            let resMess = await processor.process(message);
            let response = resMess.executionStatusResponse as gauge.messages.ExecutionStatusResponse;
            let result = response.executionResult as gauge.messages.ProtoExecutionResult;
            expect(result.failed).toBe(true);
            expect(result.errorMessage).toBe('Step Implementation not found');
        })

        it('should process step execution request when there is param lenght mismatch', async () => {
            let capture = jest.spyOn(Screenshot, "capture");
            registry.isImplemented = jest.fn().mockReturnValue(true);
            registry.get = jest.fn().mockReturnValue(new StepRegistryEntry('hello', 'hello', 'StepImpl.ts', (a: any) => { }))
            let message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecuteStep,
                executeStepRequest: new gauge.messages.ExecuteStepRequest({
                    parsedStepText: "hello",
                    actualStepText: "hello",
                })
            })
            let resMess = await processor.process(message);
            let response = resMess.executionStatusResponse as gauge.messages.ExecutionStatusResponse;
            let result = response.executionResult as gauge.messages.ProtoExecutionResult;
            expect(result.failed).toBe(true);
            expect(result.errorMessage).toBe('Argument length mismatch for `hello`. Actual Count: [1], Expected Count: [0]');
            expect(capture).toBeCalled();
        })

        it('should process step execution request', async () => {
            registry.isImplemented = jest.fn().mockReturnValue(true);
            registry.get = jest.fn().mockReturnValue(new StepRegistryEntry('hello <world> to <table>',
                'hello {} to {}',
                'StepImpl.ts',
                (arg0: any, arg1: any) => { }
            ));
            let message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecuteStep,
                executeStepRequest: new gauge.messages.ExecuteStepRequest({
                    parsedStepText: "hello {} to {}",
                    actualStepText: "hello <world> to <table>",
                    parameters: [
                        new gauge.messages.Parameter({
                            name: "world",
                            parameterType: gauge.messages.Parameter.ParameterType.Static,
                            value: "world"
                        }), new gauge.messages.Parameter({
                            name: "table",
                            parameterType: gauge.messages.Parameter.ParameterType.Table,
                            table: new gauge.messages.ProtoTable({})
                        })
                    ]
                })
            })
            let resMess = await processor.process(message);
            let response = resMess.executionStatusResponse as gauge.messages.ExecutionStatusResponse;
            let result = response.executionResult as gauge.messages.ProtoExecutionResult;
            expect(result.failed).toBe(false);
            expect(result.errorMessage).toBe('');
        })

        it('should process step execution request when step is recoverable', async () => {
            let capture = jest.spyOn(Screenshot, "capture");
            process.env.screenshot_on_failure = 'false';

            registry.isImplemented = jest.fn().mockReturnValue(true);
            let method = () => { equal(1, 2) };
            registry.get = jest.fn().mockReturnValue(new StepRegistryEntry('hello', 'hello', 'StepImpl.ts', method))
            registry.getContinueOnFailureFuncs = jest.fn().mockReturnValue(['AssertionError'])
            let message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecuteStep,
                executeStepRequest: new gauge.messages.ExecuteStepRequest({
                    parsedStepText: "hello",
                    actualStepText: "hello",
                })
            })
            let resMess = await processor.process(message);
            let response = resMess.executionStatusResponse as gauge.messages.ExecutionStatusResponse;
            let result = response.executionResult as gauge.messages.ProtoExecutionResult;
            expect(result.failed).toBe(true);
            expect(result.errorMessage).toBe('1 == 2');
            expect(result.recoverableError).toBe(true);
            expect(capture).toBeCalledTimes(0);
        })
    })
})
