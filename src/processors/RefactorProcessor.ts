import { gauge } from "../messages";
import { IMessageProcessor } from "./IMessageProcessor";

export class RefactorProcessor implements IMessageProcessor {
    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let req = message.refactorRequest as gauge.messages.IRefactorRequest;
        let res = new gauge.messages.RefactorResponse();
        let info = (req.oldStepValue as gauge.messages.IProtoStepValue).stepValue
        console.log(info);
        return new gauge.messages.Message({
            messageId: message.messageId,
            messageType: gauge.messages.Message.MessageType.RefactorResponse,
            refactorResponse: new gauge.messages.RefactorResponse()
        });
    }
}
