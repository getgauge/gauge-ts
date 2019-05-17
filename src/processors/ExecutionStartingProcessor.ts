import { HookExecutionProcessor } from "./HookExecutionProcessor";
import { HookType } from "../models/HookType";
import { gauge } from "../messages";
import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";

export class ExecutionStartingProcessor extends HookExecutionProcessor {

    hookType: HookType = HookType.BeforeSuite

    constructor() {
        super();
    }

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.executionStartingRequest as gauge.messages.ExecutionStartingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    public getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        return hookRegistry.get(this.hookType, [])
    }
}

