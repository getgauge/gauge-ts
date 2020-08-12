import { gauge } from '../../src/gen/messages';
import { HookMethod } from '../../src/models/HookMethod';
import hookRegistry from '../../src/models/HookRegistry';
import { HookType } from '../../src/models/HookType';
import { ExecutionEndingProcessor } from '../../src/processors/ExecutionEndingProcessor';
import { Screenshot } from '../../src/screenshot/Screenshot';

describe('ExecutionEndingProcessor', () => {

    let processor: ExecutionEndingProcessor

    beforeEach(() => {
        jest.clearAllMocks();
        hookRegistry.clear();
        process.env.screenshot_on_failure = "";
        processor = new ExecutionEndingProcessor();
    })

    describe('.process', () => {
        it('should process ExecutionEndingRequest and run AfterSuite hooks', async () => {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            hookRegistry.addHook(HookType.AfterSuite, new HookMethod(async () => {}, "Hooks.ts"))
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecutionEnding,
                executionEndingRequest: new gauge.messages.ExecutionEndingRequest({
                    currentExecutionInfo: new gauge.messages.ExecutionInfo()
                })
            })

            const resMessage = await processor.process(message);
            const res = resMessage.executionStatusResponse as gauge.messages.ExecutionStatusResponse

            expect((res.executionResult as gauge.messages.ProtoExecutionResult).failed).toBe(false);
        })

        it('should process ExecutionEndingRequest and give error if a hook fails', async () => {
            process.env.screenshot_on_failure = "false";
            hookRegistry.addHook(HookType.AfterSuite, new HookMethod(jest.fn().mockImplementation(() => {
                throw new Error("failed");
            }), "Hooks.ts"))
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecutionEnding,
                executionEndingRequest: new gauge.messages.ExecutionEndingRequest({
                    currentExecutionInfo: new gauge.messages.ExecutionInfo()
                })
            })

            const resMessage = await processor.process(message);
            const res = resMessage.executionStatusResponse as gauge.messages.ExecutionStatusResponse
            const pRes = res.executionResult as gauge.messages.ProtoExecutionResult;

            expect(pRes.failed).toBe(true);
            expect(pRes.errorMessage).toBe("failed");
            expect(pRes.screenShot.length).toBe(0);
        })

        it('should process ExecutionEndingRequest and give error with screenshot if a hook fails', async () => {
            Screenshot.capture = jest.fn().mockReturnValue(new Uint8Array(new ArrayBuffer(10)));
            hookRegistry.addHook(HookType.AfterSuite, new HookMethod(jest.fn().mockImplementation(() => {
                throw new Error("failed");
            }), "Hooks.ts"))
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecutionEnding,
                executionEndingRequest: new gauge.messages.ExecutionEndingRequest({
                    currentExecutionInfo: new gauge.messages.ExecutionInfo()
                })
            })

            const resMessage = await processor.process(message);
            const res = resMessage.executionStatusResponse as gauge.messages.ExecutionStatusResponse
            const pRes = res.executionResult as gauge.messages.ProtoExecutionResult;

            expect(pRes.failed).toBe(true);
            expect(pRes.errorMessage).toBe("failed");
            expect(pRes.failureScreenshotFile).toBeTruthy();
        })
    })

})
