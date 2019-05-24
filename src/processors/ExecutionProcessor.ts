import { gauge } from "../gen/messages";
import { isAsync } from "../utils/fileUtils";
import { IMessageProcessor } from "./IMessageProcessor";


export abstract class ExecutionProcessor implements IMessageProcessor {

    abstract process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage>

    public wrapInMessage(result: gauge.messages.ProtoExecutionResult, request: gauge.messages.IMessage) {
        return new gauge.messages.Message({
            messageId: request.messageId,
            messageType: gauge.messages.Message.MessageType.ExecutionStatusResponse,
            executionStatusResponse: new gauge.messages.ExecutionStatusResponse({
                executionResult: result
            })
        })
    }

    public async executeMethod(instance: Object, method: Function, params: any[]) {
        let promise = method.apply(instance, params);
        if (isAsync(method)) await promise;
    }
}

