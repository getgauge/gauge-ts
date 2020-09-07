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
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            hookRegistry.addHook(HookType.BeforeSpec, new HookMethod(async () => {}, "Hooks.ts"))
            const message = new gauge.messages.Message({
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

            const resMessage = await processor.process(message);
            const res = resMessage.executionStatusResponse as gauge.messages.ExecutionStatusResponse

            expect((res.executionResult as gauge.messages.ProtoExecutionResult).failed).toBe(false);
        })
    })

})
