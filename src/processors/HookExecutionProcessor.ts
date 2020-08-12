import {gauge} from "../gen/messages";
import {HookMethod} from "../models/HookMethod";
import {HookType} from "../models/HookType";
import {ExecutionContext, Scenario, Specification, StepInfo} from "..";
import {Screenshot} from "../screenshot/Screenshot";
import {MessageStore} from "../stores/MessageStore";
import {ScreenshotStore} from "../stores/ScreenshotStore";
import {ExecutionProcessor} from "./ExecutionProcessor";
import hookRegistry from '../models/HookRegistry';

type GaugeExecutionRequestType =
    gauge.messages.ScenarioExecutionEndingRequest
    | gauge.messages.ScenarioExecutionStartingRequest
    | gauge.messages.SpecExecutionEndingRequest
    | gauge.messages.SpecExecutionStartingRequest
    | gauge.messages.StepExecutionEndingRequest
    | gauge.messages.StepExecutionStartingRequest;

export abstract class HookExecutionProcessor extends ExecutionProcessor {

    protected abstract hookType: HookType;

    protected abstract getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo;

    protected abstract getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod>;

    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        const res = await this.executeHooks(message);

        return this.wrapInMessage(res, message)
    }

    protected getApplicableHooksInternal(request: GaugeExecutionRequestType): Array<HookMethod> {
        const execInfo = request.currentExecutionInfo as gauge.messages.ExecutionInfo;
        const specInfo = execInfo.currentSpec as gauge.messages.ISpecInfo;
        const scenarioInfo = execInfo.currentScenario as gauge.messages.IScenarioInfo;
        const specTags = specInfo.tags ? specInfo.tags : [];
        const scenarioTags = scenarioInfo?.tags ? scenarioInfo.tags : [];

        return hookRegistry.get(this.hookType, specTags.concat(scenarioTags));
    }

    private async executeHooks(req: gauge.messages.IMessage): Promise<gauge.messages.ProtoExecutionResult> {
        const start = Date.now();
        const context = HookExecutionProcessor.getExecutionContext(this.getExecutionInfo(req));
        const hooks = this.getApplicableHooks(req)
        const result = new gauge.messages.ProtoExecutionResult();

        result.failed = false;
        try {
            for (const hook of hooks) {
                await this.executeMethod(hook.getInstance() as Record<string, unknown>, hook.getMethod(), [context]);
            }
        } catch (error) {
            result.failed = true;
            result.recoverableError = false;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
            result.errorMessage = error.message;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
            result.stackTrace = error.stack;
            if (process.env.screenshot_on_failure !== "false") {
                result.failureScreenshotFile = await Screenshot.capture();
            }
        }

        result.executionTime = Date.now() - start;
        result.message = MessageStore.pendingMessages();
        result.screenshotFiles = ScreenshotStore.pendingScreenshots();

        return result;
    }

    private static getExecutionContext(info: gauge.messages.ExecutionInfo): ExecutionContext {
        if (!info) {
            return new ExecutionContext(null, null, null, null);
        }

        const specInfo = info.currentSpec;
        const scenarioInfo = info.currentScenario;
        const stepInfo = info.currentStep;
        const trace = info.stacktrace;

        return new ExecutionContext(HookExecutionProcessor.toSpec(specInfo), HookExecutionProcessor.toScenario(scenarioInfo), HookExecutionProcessor.toStepInfo(stepInfo), trace)
    }

    private static toSpec(specInfo: gauge.messages.ISpecInfo | null | undefined): Specification | null {
        if (!specInfo) {
            return null;
        }

        return new Specification(specInfo.name, specInfo.fileName, specInfo.isFailed, specInfo.tags);
    }

    private static toScenario(scenInfo: gauge.messages.IScenarioInfo | null | undefined): Scenario | null {
        if (!scenInfo) {
            return null;
        }

        return new Scenario(scenInfo.name, scenInfo.isFailed, scenInfo.tags);
    }

    private static toStepInfo(stepInfo: gauge.messages.IStepInfo | null | undefined): StepInfo | null {
        if (!stepInfo) {
            return null;
        }

        if (stepInfo.step) {
            const step = stepInfo.step as gauge.messages.ExecuteStepRequest;

            return new StepInfo(step.parsedStepText, step.actualStepText, stepInfo.isFailed, stepInfo.errorMessage, stepInfo.stackTrace);
        }

        return new StepInfo(null, null, stepInfo.isFailed, stepInfo.errorMessage, stepInfo.stackTrace);
    }

}
