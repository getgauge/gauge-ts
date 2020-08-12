import {gauge} from "../gen/messages";
import registry from '../models/StepRegistry';
import {Screenshot} from "../screenshot/Screenshot";
import {MessageStore} from "../stores/MessageStore";
import {ScreenshotStore} from "../stores/ScreenshotStore";
import {ExecutionProcessor} from "./ExecutionProcessor";
import {CommonFunction} from '../utils/Util';

export class StepExecutionProcessor extends ExecutionProcessor {

    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        const req = message.executeStepRequest as gauge.messages.ExecuteStepRequest;

        if (!registry.isImplemented(req.parsedStepText))
            {return Promise.resolve(this.executionError("Step Implementation not found", message));}
        const result = await this.execute(req);

        return this.wrapInMessage(result, message);
    }

    private async execute(req: gauge.messages.ExecuteStepRequest): Promise<gauge.messages.ProtoExecutionResult> {
        const start = Date.now();
        const result = new gauge.messages.ProtoExecutionResult();

        result.failed = false;
        const mi = registry.get(req.parsedStepText)
        const params = req.parameters.map((item) => {
            return item.value ? item.value : item.table
        });
        const method = mi.getMethod() as CommonFunction;

        try {
            if (method.length !== params.length) {
                throw new Error(`Argument length mismatch for \`${req.actualStepText}\`.` +
                    ` Actual Count: [${method.length}], Expected Count: [${params.length}]`)
            }
            await this.executeMethod(mi.getInstance() as Record<string, unknown>, method, params);
        } catch (error) {
            result.failed = true;
            const cofErrors = registry.getContinueOnFailureFunctions(method);

            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (cofErrors && cofErrors.includes(error.constructor.name)) {
                result.recoverableError = true;
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
            result.errorMessage = error.message;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
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

    private executionError(message: string, req: gauge.messages.IMessage): gauge.messages.IMessage {
        const result = new gauge.messages.ProtoExecutionResult();

        result.failed = true;
        result.recoverableError = false;
        result.executionTime = 0;
        result.errorMessage = message;

        return this.wrapInMessage(result, req);
    }

}
