import { gauge } from "../messages";
import registry from '../models/StepRegistry';

import { ExecutionProcessor } from "./ExecutionProcessor";
import { MessageStore } from "../stores/MessageStore";
import { Screenshot } from "../screenshot/Screenshot";
import { ScreenshotStore } from "../stores/ScreenshotStore";

export class StepExecutionProcessor extends ExecutionProcessor {

    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let req = message.executeStepRequest as gauge.messages.ExecuteStepRequest;
        if (!registry.isImplemented(req.parsedStepText))
            return Promise.resolve(this.executionError("Step Implementation not found", message));
        let result = await this.execute(req);
        return this.wrapInMessage(result, message);
    }

    private async execute(req: gauge.messages.ExecuteStepRequest): Promise<gauge.messages.ProtoExecutionResult> {
        let start = Date.now();
        let result = new gauge.messages.ProtoExecutionResult();
        result.failed = false;
        let mi = registry.get(req.parsedStepText)
        let params = req.parameters.map((item) => { return item.value ? item.value : item.table });
        try {
            if (mi.getMethod().length !== params.length) {
                throw new Error(`Argument length mismatch for \`${req.actualStepText}\`.` +
                    ` Actual Count: [${mi.getMethod().length}], Exepected Count: [${params.length}]`)
            }
            await this.executeMethod(mi.getInstance(), mi.getMethod(), params);
        } catch (error) {
            result.failed = true;
            let cofErrors = registry.getContinueOnFailure(mi.getMethod());
            if (cofErrors && cofErrors.includes(error.constructor.name)) {
                result.recoverableError = true;
            }
            result.errorMessage = error.message;
            result.stackTrace = error.stack;
            if (process.env.screenshot_on_failure !== "false") {
                let s = await Screenshot.capture();
                result.screenShot = s;
                result.failureScreenshot = s;
            }
        }
        result.executionTime = Date.now() - start;
        result.message = MessageStore.pendingMessages();;
        result.screenshots = ScreenshotStore.pendingScreenshots();
        return result;
    }

    private executionError(message: string, req: gauge.messages.IMessage): gauge.messages.IMessage {
        var result = new gauge.messages.ProtoExecutionResult();
        result.failed = true;
        result.recoverableError = false;
        result.executionTime = 0;
        result.errorMessage = message;
        return this.wrapInMessage(result, req);
    }
}
