import type {
  ExecutionInfo,
  SpecExecutionStartingRequest,
  SpecInfo,
} from "../gen/messages";
import type { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import {
  type HookExectionRequest,
  HookExecutionProcessor,
} from "./HookExecutionProcessor";

export class SpecExecutionStartingProcessor extends HookExecutionProcessor {
  protected hookType: HookType = HookType.BeforeSpec;

  protected getExecutionInfo(hookExecreq: HookExectionRequest): ExecutionInfo {
    const req = hookExecreq as SpecExecutionStartingRequest;

    return req.currentExecutionInfo as ExecutionInfo;
  }

  protected getApplicableHooks(
    hookExecReq: HookExectionRequest,
  ): Array<HookMethod> {
    const execInfo = this.getExecutionInfo(hookExecReq);
    const specInfo = execInfo.currentSpec as SpecInfo;

    return hookRegistry.get(this.hookType, specInfo.tags);
  }
}
