import { gauge } from "../gen/messages";
import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import { HookExecutionProcessor } from "./HookExecutionProcessor";
export class ExecutionEndingProcessor extends HookExecutionProcessor {

    hookType: HookType = HookType.AfterSuite;

    constructor() {
        super();
    }

    public getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        return hookRegistry.get(this.hookType, [])
    }

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.executionEndingRequest as gauge.messages.ExecutionEndingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }
}
