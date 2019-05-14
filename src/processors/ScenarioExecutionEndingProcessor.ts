import { HookExecutionProcessor } from "./HookExecutionProcessor";
import { HookType } from "../models/HookType";
import { gauge } from "../messages";
export class ScenarioExecutionEndingProcessor extends HookExecutionProcessor {
    hookType: HookType = HookType.AfterScenario;

    constructor() {
        super();
    }

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.scenarioExecutionEndingRequest as gauge.messages.ScenarioExecutionEndingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

}
