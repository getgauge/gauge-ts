import type {
  ExecutionInfo,
  ScenarioExecutionStartingRequest,
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
export class ScenarioExecutionStartingProcessor extends HookExecutionProcessor {
  protected hookType: HookType = HookType.BeforeScenario;

  protected getExecutionInfo(hookExecreq: HookExectionRequest): ExecutionInfo {
    const req = hookExecreq as ScenarioExecutionStartingRequest;

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
