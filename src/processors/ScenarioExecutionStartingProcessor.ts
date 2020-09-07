import {gauge} from "../gen/messages";
import {HookMethod} from "../models/HookMethod";
import {HookType} from "../models/HookType";
import {HookExecutionProcessor} from "./HookExecutionProcessor";

export class ScenarioExecutionStartingProcessor extends HookExecutionProcessor {

    protected hookType: HookType = HookType.BeforeScenario;

    constructor() {
        super();
    }

    protected getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.scenarioExecutionStartingRequest as gauge.messages.ScenarioExecutionStartingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    protected getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        const request = message.scenarioExecutionStartingRequest as gauge.messages.ScenarioExecutionStartingRequest;

        return this.getApplicableHooksInternal(request);
    }

}
