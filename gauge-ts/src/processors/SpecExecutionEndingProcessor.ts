import type {
  ExecutionInfo,
  SpecExecutionEndingRequest,
  SpecInfo,
} from "../gen/messages_pb";
import type { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import {
  type HookExectionRequest,
  HookExecutionProcessor,
} from "./HookExecutionProcessor";
export class SpecExecutionEndingProcessor extends HookExecutionProcessor {
  protected hookType: HookType = HookType.AfterSpec;

  protected getExecutionInfo(hookExecreq: HookExectionRequest): ExecutionInfo {
    const req = hookExecreq as SpecExecutionEndingRequest;

    return req.getCurrentexecutioninfo() as ExecutionInfo;
  }

  protected getApplicableHooks(
    hookExecReq: HookExectionRequest,
  ): Array<HookMethod> {
    const execInfo = this.getExecutionInfo(hookExecReq);
    const specInfo = execInfo.getCurrentspec() as SpecInfo;

    return hookRegistry.get(this.hookType, specInfo.getTagsList());
  }
}
