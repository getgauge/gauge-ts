import {gauge} from "../gen/messages";
import {HookMethod} from "../models/HookMethod";
import {HookType} from "../models/HookType";
import {HookExecutionProcessor} from "./HookExecutionProcessor";

export class SpecExecutionStartingProcessor extends HookExecutionProcessor {

    protected hookType: HookType = HookType.BeforeSpec;
    constructor() {
        super();
    }

    protected getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.specExecutionStartingRequest as gauge.messages.SpecExecutionStartingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    protected getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        const request = message.specExecutionStartingRequest as gauge.messages.SpecExecutionStartingRequest;

        return this.getApplicableHooksInternal(request);
    }

}
