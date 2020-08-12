import * as inspector from 'inspector';
import { gauge } from '../../src/gen/messages';
import { HookMethod } from '../../src/models/HookMethod';
import hookRegistry from '../../src/models/HookRegistry';
import { HookType } from '../../src/models/HookType';
import { ExecutionStartingProcessor } from '../../src/processors/ExecutionStartingProcessor';
jest.mock('inspector');

describe('ExecutionStartingProcessor', () => {

    let processor: ExecutionStartingProcessor

    beforeEach(() => {
        jest.clearAllMocks();
        hookRegistry.clear();
        process.env.screenshot_on_failure = "";
        processor = new ExecutionStartingProcessor();
    })

    describe('.process', () => {
        it('should process ExecutionStartingRequest and run BeforeSuite hooks', async () => {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            hookRegistry.addHook(HookType.BeforeSuite, new HookMethod(async () => {}, "Hooks.ts"))
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecutionEnding,
                executionStartingRequest: new gauge.messages.ExecutionStartingRequest({
                    currentExecutionInfo: new gauge.messages.ExecutionInfo()
                })
            })

            const resMessage = await processor.process(message);
            const res = resMessage.executionStatusResponse as gauge.messages.ExecutionStatusResponse

            expect((res.executionResult as gauge.messages.ProtoExecutionResult).failed).toBe(false);
        })

        it('should process ExecutionStartingRequest and run BeforeSuite hooks', async () => {
            console.log = jest.fn();
            const open = jest.spyOn(inspector, 'open');

            process.env.DEBUGGING = 'true';
            process.env.DEBUG_PORT = '1234';
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            hookRegistry.addHook(HookType.AfterSuite, new HookMethod(async () => {}, "Hooks.ts"))
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecutionEnding,
                executionStartingRequest: new gauge.messages.ExecutionStartingRequest({
                    currentExecutionInfo: new gauge.messages.ExecutionInfo()
                })
            })

            await processor.process(message);
            expect(open).toHaveBeenCalledWith(1234, '127.0.0.1', true);
        })

    })

})
