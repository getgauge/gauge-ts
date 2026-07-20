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
} from "../gen/messages";
import { ProtoExecutionResult } from "../gen/spec";
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
    const result = ProtoExecutionResult.create({ failed: false });

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

      result.failed = true;
      result.recoverableError = false;
      result.errorMessage = err.message;
      result.stackTrace = err.stack ?? "";
      if (process.env.screenshot_on_failure !== "false") {
        const s = await Screenshot.capture();

        result.failureScreenshotFile = s;
      }
    }
    result.executionTime = String(Date.now() - start);
    result.message = MessageStore.pendingMessages();
    result.screenshotFiles = ScreenshotStore.pendingScreenshots();

    return result;
  }

  private getExecutionContext(info: ExecutionInfo): ExecutionContext {
    if (!info) {
      return new ExecutionContext(null, null, null, null);
    }
    const specInfo = info.currentSpec;
    const scenarioInfo = info.currentScenario;
    const stepInfo = info.currentStep;
    const trace = info.stacktrace;

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
      info.name,
      info.fileName,
      info.isFailed,
      info.tags,
    );
  }

  private toScenario(scenInfo: ScenarioInfo | undefined): Scenario | null {
    if (!scenInfo) {
      return null;
    }
    const info = scenInfo;

    return new Scenario(info.name, info.isFailed, info.tags);
  }

  private toStepInfo(stepInfo: ProtoStepInfo | undefined): StepInfo | null {
    if (!stepInfo) {
      return null;
    }
    const info = stepInfo;

    if (info.step) {
      const step = info.step as ExecuteStepRequest;

      return new StepInfo(
        step.parsedStepText,
        step.actualStepText,
        stepInfo.isFailed,
        stepInfo.errorMessage,
        stepInfo.stackTrace,
      );
    }

    return new StepInfo(
      null,
      null,
      info.isFailed,
      stepInfo.errorMessage,
      stepInfo.stackTrace,
    );
  }
}
