import { gauge } from "../messages";
import { IMessageProcessor } from "./IMessageProcessor";
export class ValidationProcessor implements IMessageProcessor {
    process(message: gauge.messages.IMessage): gauge.messages.IMessage {
        return new gauge.messages.Message({
            messageId: message.messageId,
            messageType: gauge.messages.Message.MessageType.StepValidateResponse,
            stepValidateResponse: new gauge.messages.StepValidateResponse({
                isValid: true,
                suggestion: "",
            })
        });
    }
}
