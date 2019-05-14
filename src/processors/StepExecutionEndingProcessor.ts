import { HookExecutionProcessor } from "./HookExecutionProcessor";
import { HookType } from "../models/HookType";
import { gauge } from "../messages";
export class StepExecutionEndingProcessor extends HookExecutionProcessor {
    hookType: HookType = HookType.AfterStep;

    constructor() {
        super();
    }

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.stepExecutionEndingRequest as gauge.messages.StepExecutionEndingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }
}

