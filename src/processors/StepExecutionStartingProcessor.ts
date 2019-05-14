import { HookExecutionProcessor } from "./HookExecutionProcessor";
import { HookType } from "../models/HookType";
import { gauge } from "../messages";
export class StepExecutionStartingProcessor extends HookExecutionProcessor {

    hookType: HookType = HookType.BeforeStep;

    constructor() {
        super();
    }

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.stepExecutionStartingRequest as gauge.messages.StepExecutionStartingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }
}

