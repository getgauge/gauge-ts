import { gauge } from '../../src/gen/messages';
import { HookMethod } from '../../src/models/HookMethod';
import hookRegistry from '../../src/models/HookRegistry';
import { HookType } from '../../src/models/HookType';
import { SpecExecutionStartingProcessor } from '../../src/processors/SpecExecutionStartingProcessor';
jest.mock('inspector');

describe('SpecExecutionStartingProcessor', () => {

    let processor: SpecExecutionStartingProcessor

    beforeEach(() => {
        jest.clearAllMocks();
        hookRegistry.clear();
        process.env.screenshot_on_failure = "";
        processor = new SpecExecutionStartingProcessor();
    })

    describe('.process', () => {
        it('should process SpecExecutionStartingRequest and run BeforeSuite hooks', async () => {
            hookRegistry.addHook(HookType.BeforeSpec, new HookMethod(async () => {}, "Hooks.ts"))
            let message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.SpecExecutionStarting,
                specExecutionStartingRequest: new gauge.messages.SpecExecutionStartingRequest({
                    currentExecutionInfo: new gauge.messages.ExecutionInfo({
                        currentSpec: new gauge.messages.SpecInfo({
                            name: "Foo",
                            fileName:"foo.ts"
                        })
                    })
                })
            })

            let resMessage = await processor.process(message);
            let res = resMessage.executionStatusResponse as gauge.messages.ExecutionStatusResponse
            expect((res.executionResult as gauge.messages.ProtoExecutionResult).failed).toBe(false);
        })
    })

})
