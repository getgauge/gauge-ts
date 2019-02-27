import { gauge } from "../messages";
import registry from '../models/StepRegistry';
import { IMessageProcessor } from "./IMessageProcessor";
import { isAsync } from "../utils/fileUtils";

export class StepExecutionProcessor implements IMessageProcessor {
    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let r = message.executeStepRequest as gauge.messages.ExecuteStepRequest;
        let mi = registry.get(r.parsedStepText)
        try {
            let m = mi.getMethod();
            let promise = m.apply(mi.getInstance(), r.parameters.map((item) => {
                return item.value ? item.value : item.table;
            }))
            if (isAsync(m)) {
                await promise;
            }
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
                        errorMessage: error.message,
                        stackTrace: error.stack
                    })
                })
            });
        }
    }
}
