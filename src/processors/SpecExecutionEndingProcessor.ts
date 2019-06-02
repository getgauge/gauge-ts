import { gauge } from "../gen/messages";
import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import { HookExecutionProcessor } from "./HookExecutionProcessor";
export class SpecExecutionEndingProcessor extends HookExecutionProcessor {

    protected hookType: HookType = HookType.AfterSpec;

    constructor() {
        super();
    }

    protected getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        return (message.specExecutionEndingRequest as gauge.messages.SpecExecutionEndingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    protected getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        const request = message.specExecutionEndingRequest as gauge.messages.SpecExecutionEndingRequest;
        const execInfo = request.currentExecutionInfo as gauge.messages.ExecutionInfo;
        const specInfo = execInfo.currentSpec as gauge.messages.ISpecInfo;
        const tags = specInfo.tags ? specInfo.tags : [];
        return hookRegistry.get(this.hookType, tags);
    }
}
