import { HookExecutionProcessor } from "./HookExecutionProcessor";
import { HookType } from "../models/HookType";
import { gauge } from "../messages";
import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
export class SpecExecutionEndingProcessor extends HookExecutionProcessor {

    hookType: HookType = HookType.AfterSpec;

    constructor() {
        super();
    }
    public getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.specExecutionEndingRequest as gauge.messages.SpecExecutionEndingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    public getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        const request = message.specExecutionEndingRequest as gauge.messages.SpecExecutionEndingRequest;
        const execInfo = request.currentExecutionInfo as gauge.messages.ExecutionInfo;
        const specInfo = execInfo.currentSpec as gauge.messages.ISpecInfo;
        const tags = specInfo.tags ? specInfo.tags : [];
        return hookRegistry.get(this.hookType, tags);
    }
}
