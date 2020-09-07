import {gauge} from "../gen/messages";
import {HookMethod} from "../models/HookMethod";
import {HookType} from "../models/HookType";
import {HookExecutionProcessor} from "./HookExecutionProcessor";

export class StepExecutionEndingProcessor extends HookExecutionProcessor {

    protected hookType: HookType = HookType.AfterStep;

    constructor() {
        super();
    }

    protected getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.stepExecutionEndingRequest as gauge.messages.StepExecutionEndingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    protected getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        const request = message.stepExecutionEndingRequest as gauge.messages.StepExecutionEndingRequest;

        return this.getApplicableHooksInternal(request);
    }

}
