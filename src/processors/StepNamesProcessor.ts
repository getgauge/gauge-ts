import { gauge } from "../gen/messages";
import registry from "../models/StepRegistry";
import { IMessageProcessor } from "./IMessageProcessor";

export class StepNamesProcessor implements IMessageProcessor {
    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        return new gauge.messages.Message({
            messageId: message.messageId,
            messageType: gauge.messages.Message.MessageType.StepNamesResponse,
            stepNamesResponse: new gauge.messages.StepNamesResponse({
                steps: registry.getStepTexts()
            })
        });
    }
}