import { ExecutionInfo, SpecExecutionEndingRequest, SpecInfo } from "../gen/messages_pb";
import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import { HookExectionRequest, HookExecutionProcessor } from "./HookExecutionProcessor";
export class SpecExecutionEndingProcessor extends HookExecutionProcessor {

    protected hookType: HookType = HookType.AfterSpec;

    constructor() {
        super();
    }

    protected getExecutionInfo(hookExecreq: HookExectionRequest): ExecutionInfo {
        const req = hookExecreq as SpecExecutionEndingRequest;

        return req.getCurrentexecutioninfo() as ExecutionInfo;
    }

    protected getApplicableHooks(hookExecReq: HookExectionRequest): Array<HookMethod> {
        const execInfo = this.getExecutionInfo(hookExecReq);
        const specInfo = execInfo.getCurrentspec() as SpecInfo;

        return hookRegistry.get(this.hookType, specInfo.getTagsList());
    }

}
