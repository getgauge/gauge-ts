import { gauge } from "../messages";
import registry from '../models/StepRegistry';
import { IMessageProcessor } from "./IMessageProcessor";

export class StepExecutionProcessor implements IMessageProcessor {
    public process(message: gauge.messages.IMessage): gauge.messages.IMessage {
        let r = message.executeStepRequest as gauge.messages.ExecuteStepRequest;
        let m = registry.get(r.parsedStepText)
        try {
            m.getMethod().apply({}, r.parameters.map((item) => {
                return item.value ? item.value : item.table;
            }))
            return new gauge.messages.Message({
                messageId: message.messageId,
                messageType: gauge.messages.Message.MessageType.ExecutionStatusResponse,
                executionStatusResponse: new gauge.messages.ExecutionStatusResponse({
                    executionResult: new gauge.messages.ProtoExecutionResult({
                        failed: false,
                        executionTime: 0
                    })
                })
            });
        } catch (error) {
            return new gauge.messages.Message({
                messageId: message.messageId,
                messageType: gauge.messages.Message.MessageType.ExecutionStatusResponse,
                executionStatusResponse: new gauge.messages.ExecutionStatusResponse({
                    executionResult: new gauge.messages.ProtoExecutionResult({
                        failed: true,
                        executionTime: 0,
                        errorMessage: error
                    })
                })
            });
        }
    }
}
