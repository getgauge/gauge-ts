import type {
  ExecuteStepRequest,
  ExecutionStatusResponse,
} from "../gen/messages_pb";
import { ProtoExecutionResult } from "../gen/spec_pb";
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
    if (!registry.isImplemented(req.getParsedsteptext())) {
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
    const result = new ProtoExecutionResult();

    result.setFailed(false);
    const mi = registry.get(req.getParsedsteptext());
    const params = req
      .getParametersList()
      .map((p) => this.parsingChain.parse(p));

    const method = mi.getMethod() as CommonFunction;

    try {
      if (method.length !== params.length) {
        throw new Error(
          `Argument length mismatch for \`${req.getActualsteptext()}\`.` +
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

      result.setFailed(true);
      const cofErrors = registry.getContinueOnFailureFunctions(method);

      if (cofErrors?.includes(error.constructor.name)) {
        result.setRecoverableerror(true);
      }
      result.setErrormessage(error.message);
      result.setStacktrace(error.stack ?? "");
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

  private executionError(message: string): ExecutionStatusResponse {
    const result = new ProtoExecutionResult();

    result.setFailed(true);
    result.setRecoverableerror(false);
    result.setExecutiontime(0);
    result.setErrormessage(message);

    return this.createExecutionResponse(result);
  }
}
