import { HookExecutionProcessor } from "./HookExecutionProcessor";
import { HookType } from "../models/HookType";
import { gauge } from "../messages";
export class SpecExecutionStartingProcessor extends HookExecutionProcessor {
    hookType: HookType = HookType.BeforeSpec;
    constructor() {
        super();
    }

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.specExecutionStartingRequest as gauge.messages.SpecExecutionStartingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }
}
