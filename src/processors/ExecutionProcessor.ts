import { Util, CommonFunction } from "../utils/Util";
import { ExecutionStatusResponse } from "../gen/messages_pb";
import { ProtoExecutionResult } from "../gen/spec_pb";

export class ExecutionProcessor {

    protected createExecutionResponse(result: ProtoExecutionResult): ExecutionStatusResponse {
        const res = new ExecutionStatusResponse();

        res.setExecutionresult(result);

        return res;
    }

    protected async executeMethod(instance: Record<string, unknown>, method: CommonFunction, params: unknown[]): Promise<void> {
        if (Util.isAsync(method)) {
            await method.apply(instance, params);
        } else {
            method.apply(instance, params);
        }
    }

}
