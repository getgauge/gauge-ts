import {gauge} from "../gen/messages";
import {HookMethod} from "../models/HookMethod";
import {HookType} from "../models/HookType";
import {HookExecutionProcessor} from "./HookExecutionProcessor";

export class ScenarioExecutionEndingProcessor extends HookExecutionProcessor {

    protected hookType: HookType = HookType.AfterScenario;

    constructor() {
        super();
    }

    protected getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.scenarioExecutionEndingRequest as gauge.messages.ScenarioExecutionEndingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    protected getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        const request = message.scenarioExecutionEndingRequest as gauge.messages.ScenarioExecutionEndingRequest;

        return this.getApplicableHooksInternal(request);
    }

}
