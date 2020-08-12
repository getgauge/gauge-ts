import { gauge } from '../../src/gen/messages';
import { HookMethod } from '../../src/models/HookMethod';
import hookRegistry from '../../src/models/HookRegistry';
import { HookType } from '../../src/models/HookType';
import { ScenarioExecutionEndingProcessor } from '../../src/processors/ScenarioExecutionEndingProcessor';

describe('ScenarioExecutionEndingProcessor', () => {

    let processor: ScenarioExecutionEndingProcessor

    beforeEach(() => {
        jest.clearAllMocks();
        hookRegistry.clear();
        process.env.screenshot_on_failure = "";
        processor = new ScenarioExecutionEndingProcessor();
    })

    describe('.process', () => {
        it('should process ScenarioExecutionEndingRequest and run AfterScenario hooks', async () => {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            hookRegistry.addHook(HookType.AfterScenario, new HookMethod(async () => { }, "Hooks.ts"))
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ScenarioExecutionEnding,
                scenarioExecutionEndingRequest: new gauge.messages.ScenarioExecutionEndingRequest({
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
