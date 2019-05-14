import { gauge } from "../messages";
import hookRegistry from '../models/HookRegistry';
import { HookType } from "../models/HookType";
import { ExecutionProcessor } from "./ExecutionProcessor";
import { MessageStore } from "../stores/MessageStore";
import { Screenshot } from "../screenshot/Screenshot";
import { ScreenshotStore } from "../stores/ScreenshotStore";

export abstract class HookExecutionProcessor extends ExecutionProcessor {

    abstract hookType: HookType;

    abstract getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo;

    async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let res = await this.executeHooks(message);
        return this.wrapInMessage(res, message)
    }

    public async executeHooks(req: gauge.messages.IMessage): Promise<gauge.messages.ProtoExecutionResult> {
        let start = Date.now();
        let context = this.getExecutionInfo(req);
        let hooks = hookRegistry.get(this.hookType);
        let result = new gauge.messages.ProtoExecutionResult();
        result.failed = false;
        try {
            for (let hook of hooks) {
                await this.executeMethod(hook.getInstance(), hook.getMethod(), [context]);
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


