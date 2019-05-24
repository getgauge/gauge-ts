import { gauge } from "../gen/messages";
import registry from '../models/StepRegistry';
import { Screenshot } from "../screenshot/Screenshot";
import { MessageStore } from "../stores/MessageStore";
import { ScreenshotStore } from "../stores/ScreenshotStore";
import { ExecutionProcessor } from "./ExecutionProcessor";


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
        let method = mi.getMethod() as Function;
        try {
            if (method.length !== params.length) {
                throw new Error(`Argument length mismatch for \`${req.actualStepText}\`.` +
                    ` Actual Count: [${method.length}], Exepected Count: [${params.length}]`)
            }
            await this.executeMethod(mi.getInstance() as object, method, params);
        } catch (error) {
            result.failed = true;
            let cofErrors = registry.getContinueOnFailure(method);
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
