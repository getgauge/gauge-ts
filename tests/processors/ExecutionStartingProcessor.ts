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
            hookRegistry.addHook(HookType.AfterSuite, new HookMethod(async () => {}, "Hooks.ts"))
            let message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecutionEnding,
                executionStartingRequest: new gauge.messages.ExecutionStartingRequest({
                    currentExecutionInfo: new gauge.messages.ExecutionInfo()
                })
            })

            let resMessage = await processor.process(message);
            let res = resMessage.executionStatusResponse as gauge.messages.ExecutionStatusResponse
            expect((res.executionResult as gauge.messages.ProtoExecutionResult).failed).toBe(false);
        })

        it('should process ExecutionStartingRequest and run BeforeSuite hooks', async () => {
            let open = jest.spyOn(inspector, 'open');
            process.env.DEBUGGING = 'true';
            process.env.DEBUG_PORT = '1234';
            hookRegistry.addHook(HookType.AfterSuite, new HookMethod(async () => {}, "Hooks.ts"))
            let message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecutionEnding,
                executionStartingRequest: new gauge.messages.ExecutionStartingRequest({
                    currentExecutionInfo: new gauge.messages.ExecutionInfo()
                })
            })

            let resMessage = await processor.process(message);
            expect(open).toHaveBeenCalledWith(1234, '127.0.0.1', true);
        })

    })

})
