import { gauge } from '../../src/gen/messages';
import { HookMethod } from '../../src/models/HookMethod';
import hookRegistry from '../../src/models/HookRegistry';
import { HookType } from '../../src/models/HookType';
import { StepExecutionStartingProcessor } from '../../src/processors/StepExecutionStartingProcessor';
jest.mock('inspector');

describe('StepExecutionStartingProcessor', () => {

    let processor: StepExecutionStartingProcessor

    beforeEach(() => {
        jest.clearAllMocks();
        hookRegistry.clear();
        process.env.screenshot_on_failure = "";
        processor = new StepExecutionStartingProcessor();
    })

    describe('.process', () => {
        it('should process StepExecutionStartingRequest and run BeforeSuite hooks', async () => {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            hookRegistry.addHook(HookType.BeforeStep, new HookMethod(async () => {}, "Hooks.ts"))
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.StepExecutionStarting,
                stepExecutionStartingRequest: new gauge.messages.StepExecutionStartingRequest({
                    currentExecutionInfo: new gauge.messages.ExecutionInfo({
                        currentSpec: new gauge.messages.SpecInfo({
                            name: "Foo",
                            fileName:"foo.ts",
                            tags:[]
                        }),
                        currentScenario: new gauge.messages.ScenarioInfo({
                            name:"scenario",
                            tags: []
                        }),
                        currentStep: new gauge.messages.StepInfo()
                    })
                })
            })

            const resMessage = await processor.process(message);
            const res = resMessage.executionStatusResponse as gauge.messages.ExecutionStatusResponse

            expect((res.executionResult as gauge.messages.ProtoExecutionResult).failed).toBe(false);
        })
    })

})
