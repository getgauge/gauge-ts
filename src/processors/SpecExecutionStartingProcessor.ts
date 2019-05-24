import { gauge } from "../gen/messages";
import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import { HookExecutionProcessor } from "./HookExecutionProcessor";
export class SpecExecutionStartingProcessor extends HookExecutionProcessor {
    hookType: HookType = HookType.BeforeSpec;
    constructor() {
        super();
    }

    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.specExecutionStartingRequest as gauge.messages.SpecExecutionStartingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    public getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        const request = message.specExecutionStartingRequest as gauge.messages.SpecExecutionStartingRequest;
        const execInfo = request.currentExecutionInfo as gauge.messages.ExecutionInfo;
        const specInfo = execInfo.currentSpec as gauge.messages.ISpecInfo;
        const tags = specInfo.tags ? specInfo.tags : [];
        return hookRegistry.get(this.hookType, tags);
    }
}
