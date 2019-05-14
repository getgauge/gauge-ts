import { HookExecutionProcessor } from "./HookExecutionProcessor";
import { HookType } from "../models/HookType";
import { gauge } from "../messages";
export class SpecExecutionEndingProcessor extends HookExecutionProcessor {
    hookType: HookType = HookType.AfterSpec;
    constructor() {
        super();
    }

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.specExecutionEndingRequest as gauge.messages.SpecExecutionEndingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

}
