import { HookExecutionProcessor } from "./HookExecutionProcessor";
import { HookType } from "../models/HookType";
import { gauge } from "../messages";
export class ScenarioExecutionStartingProcessor extends HookExecutionProcessor {
    hookType: HookType = HookType.BeforeScenario;
    constructor() {
        super();
    }

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.scenarioExecutionStartingRequest as gauge.messages.ScenarioExecutionStartingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

}
