import { gauge } from "../gen/messages";
import { HookMethod } from "../models/HookMethod";
import { HookType } from "../models/HookType";
import { Screenshot } from "../screenshot/Screenshot";
import { MessageStore } from "../stores/MessageStore";
import { ScreenshotStore } from "../stores/ScreenshotStore";
import { ExecutionProcessor } from "./ExecutionProcessor";

export abstract class HookExecutionProcessor extends ExecutionProcessor {

    abstract hookType: HookType;

    abstract getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo;
    abstract getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod>;

    async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let res = await this.executeHooks(message);
        return this.wrapInMessage(res, message)
    }

    public async executeHooks(req: gauge.messages.IMessage): Promise<gauge.messages.ProtoExecutionResult> {
        let start = Date.now();
        let context = this.getExecutionInfo(req);
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
                result.screenShot = s;
                result.failureScreenshot = s;
            }
        }
        result.executionTime = Date.now() - start;
        result.message = MessageStore.pendingMessages();
        result.screenshots = ScreenshotStore.pendingScreenshots();
        return result;
    }
}


