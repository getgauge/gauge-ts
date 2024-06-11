import type {
  ExecuteStepRequest,
  ExecutionEndingRequest,
  ExecutionInfo,
  ExecutionStartingRequest,
  ExecutionStatusResponse,
  StepInfo as ProtoStepInfo,
  ScenarioExecutionEndingRequest,
  ScenarioExecutionStartingRequest,
  ScenarioInfo,
  SpecExecutionEndingRequest,
  SpecExecutionStartingRequest,
  SpecInfo,
  StepExecutionEndingRequest,
  StepExecutionStartingRequest,
} from "../gen/messages_pb";
import { ProtoExecutionResult } from "../gen/spec_pb";
import type { HookMethod } from "../models/HookMethod";
import type { HookType } from "../models/HookType";
import { ExecutionContext } from "../public/context/ExecutionContext";
import { Scenario } from "../public/context/Scenario";
import { Specification } from "../public/context/Specification";
import { StepInfo } from "../public/context/StepInfo";
import { Screenshot } from "../screenshot/Screenshot";
import { MessageStore } from "../stores/MessageStore";
import { ScreenshotStore } from "../stores/ScreenshotStore";
import { ExecutionProcessor } from "./ExecutionProcessor";

export type HookExectionRequest =
  | ExecutionStartingRequest
  | SpecExecutionStartingRequest
  | ScenarioExecutionStartingRequest
  | StepExecutionStartingRequest
  | StepExecutionEndingRequest
  | ScenarioExecutionEndingRequest
  | SpecExecutionEndingRequest
  | ExecutionEndingRequest;

export abstract class HookExecutionProcessor extends ExecutionProcessor {
  protected abstract hookType: HookType;

  protected abstract getExecutionInfo(req: HookExectionRequest): ExecutionInfo;
  protected abstract getApplicableHooks(
    req: HookExectionRequest,
  ): Array<HookMethod>;

  public async process(
    req: HookExectionRequest,
  ): Promise<ExecutionStatusResponse> {
    const res = await this.executeHooks(req);

    return this.createExecutionResponse(res);
  }

  private async executeHooks(
    req: HookExectionRequest,
  ): Promise<ProtoExecutionResult> {
    const start = Date.now();
    const context = this.getExecutionContext(this.getExecutionInfo(req));
    const hooks = this.getApplicableHooks(req);
    const result = new ProtoExecutionResult();

    result.setFailed(false);
    try {
      for (const hook of hooks) {
        await this.executeMethod(
          hook.getInstance() as Record<string, unknown>,
          hook.getMethod(),
          [context],
        );
      }
    } catch (error) {
      const err = error as Error;

      result.setFailed(true);
      result.setRecoverableerror(false);
      result.setErrormessage(err.message);
      result.setStacktrace(err.stack ?? "");
      if (process.env.screenshot_on_failure !== "false") {
        const s = await Screenshot.capture();

        result.setFailurescreenshotfile(s);
      }
    }
    result.setExecutiontime(Date.now() - start);
    result.setMessageList(MessageStore.pendingMessages());
    result.setScreenshotfilesList(ScreenshotStore.pendingScreenshots());

    return result;
  }

  private getExecutionContext(info: ExecutionInfo): ExecutionContext {
    if (!info) {
      return new ExecutionContext(null, null, null, null);
    }
    const specInfo = info.getCurrentspec();
    const scenarioInfo = info.getCurrentscenario();
    const stepInfo = info.getCurrentstep();
    const trace = info.getStacktrace();

    return new ExecutionContext(
      this.toSpec(specInfo),
      this.toScenario(scenarioInfo),
      this.toStepInfo(stepInfo),
      trace,
    );
  }

  private toSpec(specInfo: SpecInfo | undefined): Specification | null {
    if (!specInfo) {
      return null;
    }
    const info = specInfo;

    return new Specification(
      info.getName(),
      info.getFilename(),
      info.getIsfailed(),
      info.getTagsList(),
    );
  }

  private toScenario(scenInfo: ScenarioInfo | undefined): Scenario | null {
    if (!scenInfo) {
      return null;
    }
    const info = scenInfo;

    return new Scenario(info.getName(), info.getIsfailed(), info.getTagsList());
  }

  private toStepInfo(stepInfo: ProtoStepInfo | undefined): StepInfo | null {
    if (!stepInfo) {
      return null;
    }
    const info = stepInfo;

    if (info.getStep()) {
      const step = info.getStep() as ExecuteStepRequest;

      return new StepInfo(
        step.getParsedsteptext(),
        step.getActualsteptext(),
        stepInfo.getIsfailed(),
        stepInfo.getErrormessage(),
        stepInfo.getStacktrace(),
      );
    }

    return new StepInfo(
      null,
      null,
      info.getIsfailed(),
      stepInfo.getErrormessage(),
      stepInfo.getStacktrace(),
    );
  }
}
