import { gauge } from "../gen/messages";
import {CommonFunction, Util} from "../utils/Util";
import { IMessageProcessor } from "./IMessageProcessor";

export abstract class ExecutionProcessor implements IMessageProcessor {

    abstract process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage>

    protected wrapInMessage(result: gauge.messages.ProtoExecutionResult, request: gauge.messages.IMessage): gauge.messages.Message {
        return new gauge.messages.Message({
            messageId: request.messageId,
            messageType: gauge.messages.Message.MessageType.ExecutionStatusResponse,
            executionStatusResponse: new gauge.messages.ExecutionStatusResponse({
                executionResult: result
            })
        })
    }

    protected async executeMethod(instance: Record<string, unknown>, method: CommonFunction, params: unknown[]): Promise<void> {
        const promise = method.apply(instance, params);

        if (Util.isAsync(method)) {
            await promise;
        }
    }

}
