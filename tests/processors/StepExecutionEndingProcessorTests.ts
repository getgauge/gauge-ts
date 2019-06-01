import { gauge } from '../../src/gen/messages';
import { HookMethod } from '../../src/models/HookMethod';
import hookRegistry from '../../src/models/HookRegistry';
import { HookType } from '../../src/models/HookType';
import { StepExecutionEndingProcessor } from '../../src/processors/StepExecutionEndingProcessor';

describe('StepExecutionEndingProcessor', () => {

    let processor: StepExecutionEndingProcessor

    beforeEach(() => {
        jest.clearAllMocks();
        hookRegistry.clear();
        process.env.screenshot_on_failure = "";
        processor = new StepExecutionEndingProcessor();
    })

    describe('.process', () => {
        it('should process StepExecutionEndingRequest and run AfterStepe hooks', async () => {
            hookRegistry.addHook(HookType.AfterStep, new HookMethod(async () => { }, "Hooks.ts"))
            let message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ScenarioExecutionEnding,
                stepExecutionEndingRequest: new gauge.messages.StepExecutionEndingRequest({
                    currentExecutionInfo: new gauge.messages.ExecutionInfo({
                        currentSpec: new gauge.messages.SpecInfo({
                            fileName: "foo.spec",
                            name: "foo",
                            tags: ["hello"],
                            isFailed: false
                        }),
                        currentScenario: new gauge.messages.ScenarioInfo({
                            name: "scenario",
                            isFailed: false,
                            tags: []
                        }),
                        currentStep: new gauge.messages.StepInfo({
                        }),
                    })
                })
            })

            let resMessage = await processor.process(message);
            let res = resMessage.executionStatusResponse as gauge.messages.ExecutionStatusResponse
            expect((res.executionResult as gauge.messages.ProtoExecutionResult).failed).toBe(false);
        })
    })

})
