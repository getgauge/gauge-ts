import { gauge } from "../gen/messages";
import { HookMethod } from "../models/HookMethod";
import { HookType } from "../models/HookType";
import { ExecutionContext } from "../public/context/ExecutionContext";
import { Scenario } from "../public/context/Scenario";
import { Specification } from "../public/context/Specification";
import { StepInfo } from "../public/context/StepInfo";
import { Screenshot } from "../screenshot/Screenshot";
import { MessageStore } from "../stores/MessageStore";
import { ScreenshotStore } from "../stores/ScreenshotStore";
import { ExecutionProcessor } from "./ExecutionProcessor";


export abstract class HookExecutionProcessor extends ExecutionProcessor {

    protected abstract hookType: HookType;

    protected abstract getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo;
    protected abstract getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod>;

    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let res = await this.executeHooks(message);
        return this.wrapInMessage(res, message)
    }

    private async executeHooks(req: gauge.messages.IMessage): Promise<gauge.messages.ProtoExecutionResult> {
        let start = Date.now();
        let context = this.getExecutionContext(this.getExecutionInfo(req));
        let hooks = this.getApplicableHooks(req)
        let result = new gauge.messages.ProtoExecutionResult();
        result.failed = false;
        try {
            for (let hook of hooks) {
                await this.executeMethod(hook.getInstance() as object, hook.getMethod(), [context]);
            }
        } catch (error) {
            result.failed = true;
            result.recoverableError = false;
            result.errorMessage = error.message;
            result.stackTrace = error.stack;
            if (process.env.screenshot_on_failure !== "false") {
                let s = await Screenshot.capture();
                result.failureScreenshotFile = s;
            }
        }
        result.executionTime = Date.now() - start;
        result.message = MessageStore.pendingMessages();
        result.screenshotFiles = ScreenshotStore.pendingScreenshots();
        return result;
    }

    private getExecutionContext(info: gauge.messages.ExecutionInfo): ExecutionContext {
        if (!info) return new ExecutionContext(null, null, null, null);
        let specInfo = info.currentSpec;
        let scenarioInfo = info.currentScenario;
        let stepInfo = info.currentStep;
        let trace = info.stacktrace;
        return new ExecutionContext(this.toSpec(specInfo), this.toScenario(scenarioInfo), this.toStepInfo(stepInfo), trace)
    }

    private toSpec(specInfo: gauge.messages.ISpecInfo | null | undefined): Specification | null {
        if (!specInfo) return null;
        return new Specification(specInfo.name, specInfo.fileName, specInfo.isFailed, specInfo.tags);
    }
    private toScenario(scenInfo: gauge.messages.IScenarioInfo | null | undefined): Scenario | null {
        if (!scenInfo) return null;
        return new Scenario(scenInfo.name, scenInfo.isFailed, scenInfo.tags);
    }
    private toStepInfo(stepInfo: gauge.messages.IStepInfo | null | undefined): StepInfo | null {
        if (!stepInfo) return null;
        if (stepInfo.step) {
            let step = stepInfo.step as gauge.messages.ExecuteStepRequest;
            return new StepInfo(step.parsedStepText, step.actualStepText, stepInfo.isFailed, stepInfo.errorMessage, stepInfo.stackTrace);
        }
        return new StepInfo(null, null, stepInfo.isFailed, stepInfo.errorMessage, stepInfo.stackTrace);
    }
}


