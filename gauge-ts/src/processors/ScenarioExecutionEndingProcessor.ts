import type {
  ExecutionInfo,
  ScenarioExecutionEndingRequest,
  ScenarioInfo,
  SpecInfo,
} from "../gen/messages";
import type { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import {
  type HookExectionRequest,
  HookExecutionProcessor,
} from "./HookExecutionProcessor";

export class ScenarioExecutionEndingProcessor extends HookExecutionProcessor {
  protected hookType: HookType = HookType.AfterScenario;

  protected getExecutionInfo(hookExecreq: HookExectionRequest): ExecutionInfo {
    const req = hookExecreq as ScenarioExecutionEndingRequest;

    return req.currentExecutionInfo as ExecutionInfo;
  }

  protected getApplicableHooks(
    hookExecReq: HookExectionRequest,
  ): Array<HookMethod> {
    const execInfo = this.getExecutionInfo(hookExecReq);
    const specInfo = execInfo.currentSpec as SpecInfo;
    const scenInfo = execInfo.currentScenario as ScenarioInfo;

    return hookRegistry.get(this.hookType, specInfo.tags.concat(scenInfo.tags));
  }
}
