import { gauge } from '../../src/gen/messages';
import { HookMethod } from '../../src/models/HookMethod';
import hookRegistry from '../../src/models/HookRegistry';
import { HookType } from '../../src/models/HookType';
import { ScenarioExecutionStartingProcessor } from '../../src/processors/ScenarioExecutionStartingProcessor';
jest.mock('inspector');

describe('ScenarioExecutionStartingProcessor', () => {

    let processor: ScenarioExecutionStartingProcessor

    beforeEach(() => {
        jest.clearAllMocks();
        hookRegistry.clear();
        process.env.screenshot_on_failure = "";
        processor = new ScenarioExecutionStartingProcessor();
    })

    describe('.process', () => {
        it('should process ScenarioExecutionStartingRequest and run BeforeSuite hooks', async () => {
            hookRegistry.addHook(HookType.BeforeScenario, new HookMethod(async () => {}, "Hooks.ts"))
            let message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ScenarioExecutionStarting,
                scenarioExecutionStartingRequest: new gauge.messages.ScenarioExecutionStartingRequest({
                    currentExecutionInfo: new gauge.messages.ExecutionInfo({
                        currentSpec: new gauge.messages.SpecInfo({
                            name: "Foo",
                            fileName:"foo.ts",
                            tags:[]
                        }),
                        currentScenario: new gauge.messages.ScenarioInfo({
                            name:"scenario",
                            tags: []
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
