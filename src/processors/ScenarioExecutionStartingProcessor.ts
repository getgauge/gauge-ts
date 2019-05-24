import { gauge } from "../gen/messages";
import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import { HookExecutionProcessor } from "./HookExecutionProcessor";
export class ScenarioExecutionStartingProcessor extends HookExecutionProcessor {

    hookType: HookType = HookType.BeforeScenario;

    constructor() {
        super();
    }

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.scenarioExecutionStartingRequest as gauge.messages.ScenarioExecutionStartingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    public getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        const request = message.scenarioExecutionStartingRequest as gauge.messages.ScenarioExecutionStartingRequest;
        const execInfo = request.currentExecutionInfo as gauge.messages.ExecutionInfo;
        const specInfo = execInfo.currentSpec as gauge.messages.ISpecInfo;
        const scenarioInfo = execInfo.currentScenario as gauge.messages.IScenarioInfo;
        const specTags = specInfo.tags ? specInfo.tags : [];
        const scenTags = scenarioInfo.tags ? scenarioInfo.tags : [];
        return hookRegistry.get(this.hookType, specTags.concat(scenTags));
    }

}
