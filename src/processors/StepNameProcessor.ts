import { gauge } from "../messages";
import { IMessageProcessor } from "./IMessageProcessor";

export class StepNameProcessor implements IMessageProcessor {
    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        return new gauge.messages.Message({
            messageId: message.messageId,
            messageType: gauge.messages.Message.MessageType.StepNameResponse,
            stepNameResponse: new gauge.messages.StepNameResponse({
            })
        });
    }
}