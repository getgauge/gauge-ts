import type {
  ExecutionInfo,
  ScenarioInfo,
  SpecInfo,
  StepExecutionStartingRequest,
} from "../gen/messages_pb";
import type { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import {
  type HookExectionRequest,
  HookExecutionProcessor,
} from "./HookExecutionProcessor";

export class StepExecutionStartingProcessor extends HookExecutionProcessor {
  protected hookType: HookType = HookType.BeforeStep;

  protected getExecutionInfo(hookExecreq: HookExectionRequest): ExecutionInfo {
    const req = hookExecreq as StepExecutionStartingRequest;

    return req.getCurrentexecutioninfo() as ExecutionInfo;
  }

  protected getApplicableHooks(
    hookExecReq: HookExectionRequest,
  ): Array<HookMethod> {
    const execInfo = this.getExecutionInfo(hookExecReq);
    const specInfo = execInfo.getCurrentspec() as SpecInfo;
    const scenInfo = execInfo.getCurrentscenario() as ScenarioInfo;

    return hookRegistry.get(
      this.hookType,
      specInfo.getTagsList().concat(scenInfo.getTagsList()),
    );
  }
}
