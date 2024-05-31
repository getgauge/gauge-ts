import { ExecutionStatusResponse } from "../gen/messages_pb";
import type { ProtoExecutionResult } from "../gen/spec_pb";
import { type CommonFunction, Util } from "../utils/Util";

export class ExecutionProcessor {
  protected createExecutionResponse(
    result: ProtoExecutionResult,
  ): ExecutionStatusResponse {
    const res = new ExecutionStatusResponse();

    res.setExecutionresult(result);

    return res;
  }

  protected async executeMethod(
    instance: Record<string, unknown>,
    method: CommonFunction,
    params: unknown[],
  ): Promise<void> {
    if (Util.isAsync(method)) {
      await method.apply(instance, params);
    } else {
      method.apply(instance, params);
    }
  }
}
