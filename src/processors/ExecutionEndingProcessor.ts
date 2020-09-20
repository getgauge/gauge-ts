import { ExecutionEndingRequest, ExecutionInfo } from "../gen/messages_pb";
import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import { HookExectionRequest, HookExecutionProcessor } from "./HookExecutionProcessor";

export class ExecutionEndingProcessor extends HookExecutionProcessor {

    protected hookType: HookType = HookType.AfterSuite;

    constructor() {
        super();
    }

    protected getApplicableHooks(): Array<HookMethod> {
        return hookRegistry.get(this.hookType, []);
    }

    protected getExecutionInfo(message: HookExectionRequest): ExecutionInfo {
        const req = message as ExecutionEndingRequest;

        return req.getCurrentexecutioninfo() as ExecutionInfo;
    }

}
