import { gauge } from '../../src/gen/messages';
import { HookMethod } from '../../src/models/HookMethod';
import hookRegistry from '../../src/models/HookRegistry';
import { HookType } from '../../src/models/HookType';
import { SpecExecutionEndingProcessor } from '../../src/processors/SpecExecutionEndingProcessor';

describe('SpecExecutionEndingProcessor', () => {

    let processor: SpecExecutionEndingProcessor

    beforeEach(() => {
        jest.clearAllMocks();
        hookRegistry.clear();
        process.env.screenshot_on_failure = "";
        processor = new SpecExecutionEndingProcessor();
    })

    describe('.process', () => {
        it('should process SpecExecutionEndingRequest and run AfterSpec hooks', async () => {
            hookRegistry.addHook(HookType.AfterSpec, new HookMethod(async () => { }, "Hooks.ts"))
            let message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecutionEnding,
                specExecutionEndingRequest: new gauge.messages.SpecExecutionEndingRequest({
                    currentExecutionInfo: new gauge.messages.ExecutionInfo({
                        currentSpec: new gauge.messages.SpecInfo({
                            fileName: "foo.spec",
                            name: "foo",
                            tags: ["hello"],
                            isFailed: false
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
