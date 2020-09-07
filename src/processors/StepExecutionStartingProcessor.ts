import {gauge} from "../gen/messages";
import {HookMethod} from "../models/HookMethod";
import {HookType} from "../models/HookType";
import {HookExecutionProcessor} from "./HookExecutionProcessor";

export class StepExecutionStartingProcessor extends HookExecutionProcessor {

    protected hookType: HookType = HookType.BeforeStep;

    constructor() {
        super();
    }

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.stepExecutionStartingRequest as gauge.messages.StepExecutionStartingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    protected getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        const request = message.stepExecutionStartingRequest as gauge.messages.StepExecutionStartingRequest;

        return this.getApplicableHooksInternal(request);
    }

}
