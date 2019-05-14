import { HookExecutionProcessor } from "./HookExecutionProcessor";
import { HookType } from "../models/HookType";
import { gauge } from "../messages";
export class ExecutionEndingProcessor extends HookExecutionProcessor {

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.executionEndingRequest as gauge.messages.ExecutionEndingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    hookType: HookType = HookType.AfterSuite;
    constructor() {
        super();
    }

}
