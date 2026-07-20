import type {
  ExecuteStepRequest,
  ExecutionStatusResponse,
} from "../gen/messages";
import { ProtoExecutionResult } from "../gen/spec";
import registry from "../models/StepRegistry";
import { Screenshot } from "../screenshot/Screenshot";
import { MessageStore } from "../stores/MessageStore";
import { ScreenshotStore } from "../stores/ScreenshotStore";
import type { CommonFunction } from "../utils/Util";
import { ExecutionProcessor } from "./ExecutionProcessor";
import type { ParameterParsingChain } from "./params/ParameterParsingChain";

export class StepExecutionProcessor extends ExecutionProcessor {
  private parsingChain: ParameterParsingChain;
  constructor(parameterParsingChain: ParameterParsingChain) {
    super();
    this.parsingChain = parameterParsingChain;
  }
  public async process(
    req: ExecuteStepRequest,
  ): Promise<ExecutionStatusResponse> {
    if (!registry.isImplemented(req.parsedStepText)) {
      return Promise.resolve(
        this.executionError("Step Implementation not found"),
      );
    }
    const result = await this.execute(req);

    return this.createExecutionResponse(result);
  }

  private async execute(
    req: ExecuteStepRequest,
  ): Promise<ProtoExecutionResult> {
    const start = Date.now();
    const result = ProtoExecutionResult.create({ failed: false });
    const mi = registry.get(req.parsedStepText);
    const params = req.parameters.map((p) => this.parsingChain.parse(p));

    const method = mi.getMethod() as CommonFunction;

    try {
      if (method.length !== params.length) {
        throw new Error(
          `Argument length mismatch for \`${req.actualStepText}\`.` +
            ` Actual Count: [${method.length}], Expected Count: [${params.length}]`,
        );
      }
      await this.executeMethod(
        mi.getInstance() as Record<string, unknown>,
        method,
        params,
      );
    } catch (err) {
      const error = err as Error;

      result.failed = true;
      const cofErrors = registry.getContinueOnFailureFunctions(method);

      if (cofErrors?.includes(error.constructor.name)) {
        result.recoverableError = true;
      }
      result.errorMessage = error.message;
      result.stackTrace = error.stack ?? "";
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

  private executionError(message: string): ExecutionStatusResponse {
    const result = ProtoExecutionResult.create({
      failed: true,
      recoverableError: false,
      executionTime: "0",
      errorMessage: message,
    });

    return this.createExecutionResponse(result);
  }
}
