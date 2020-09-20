import { ExecutionInfo, ScenarioInfo, SpecInfo, StepExecutionStartingRequest } from "../gen/messages_pb";
import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import { HookExectionRequest, HookExecutionProcessor } from "./HookExecutionProcessor";

export class StepExecutionStartingProcessor extends HookExecutionProcessor {

    protected hookType: HookType = HookType.BeforeStep;

    constructor() {
        super();
    }

    protected getExecutionInfo(hookExecreq: HookExectionRequest): ExecutionInfo {
        const req = hookExecreq as StepExecutionStartingRequest;

        return req.getCurrentexecutioninfo() as ExecutionInfo;
    }

    protected getApplicableHooks(hookExecReq: HookExectionRequest): Array<HookMethod> {
        const execInfo = this.getExecutionInfo(hookExecReq);
        const specInfo = execInfo.getCurrentspec() as SpecInfo;
        const scenInfo = execInfo.getCurrentscenario() as ScenarioInfo;

        return hookRegistry.get(this.hookType, specInfo.getTagsList().concat(scenInfo.getTagsList()));
    }

}
