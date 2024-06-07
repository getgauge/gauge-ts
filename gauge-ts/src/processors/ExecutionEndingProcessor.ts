import type { ExecutionEndingRequest, ExecutionInfo } from "../gen/messages_pb";
import type { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import {
  type HookExectionRequest,
  HookExecutionProcessor,
} from "./HookExecutionProcessor";

export class ExecutionEndingProcessor extends HookExecutionProcessor {
  protected hookType: HookType = HookType.AfterSuite;

  protected getApplicableHooks(): Array<HookMethod> {
    return hookRegistry.get(this.hookType, []);
  }

  protected getExecutionInfo(message: HookExectionRequest): ExecutionInfo {
    const req = message as ExecutionEndingRequest;

    return req.getCurrentexecutioninfo() as ExecutionInfo;
  }
}
