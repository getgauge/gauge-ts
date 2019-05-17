import { HookExecutionProcessor } from "./HookExecutionProcessor";
import { HookType } from "../models/HookType";
import { gauge } from "../messages";
import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
export class StepExecutionEndingProcessor extends HookExecutionProcessor {
    hookType: HookType = HookType.AfterStep;

    constructor() {
        super();
    }

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.stepExecutionEndingRequest as gauge.messages.StepExecutionEndingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    public getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        const request = message.stepExecutionEndingRequest as gauge.messages.StepExecutionEndingRequest;
        const execInfo = request.currentExecutionInfo as gauge.messages.ExecutionInfo;
        const specInfo = execInfo.currentSpec as gauge.messages.ISpecInfo;
        const scenarioInfo = execInfo.currentScenario as gauge.messages.IScenarioInfo;
        const specTags = specInfo.tags ? specInfo.tags : [];
        const scenTags = scenarioInfo.tags ? scenarioInfo.tags : [];
        return hookRegistry.get(this.hookType, specTags.concat(scenTags));
    }
}

