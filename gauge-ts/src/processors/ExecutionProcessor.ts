import { ExecutionStatusResponse } from "../gen/messages";
import type { ProtoExecutionResult } from "../gen/spec";
import { type CommonFunction, Util } from "../utils/Util";

export class ExecutionProcessor {
  protected createExecutionResponse(
    result: ProtoExecutionResult,
  ): ExecutionStatusResponse {
    return ExecutionStatusResponse.create({ executionResult: result });
  }

  protected async executeMethod(
    instance: Record<string, unknown>,
    method: CommonFunction,
    params: unknown[],
  ): Promise<void> {
    await method.apply(instance, params);
  }
}
