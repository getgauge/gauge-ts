import { gauge } from "../gen/messages";
import { Range } from "../models/Range";
import registry from "../models/StepRegistry";
import { IMessageProcessor } from "./IMessageProcessor";

export class StepNameProcessor implements IMessageProcessor {
    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let req = message.stepNameRequest as gauge.messages.StepNameRequest;
        let resMes = new gauge.messages.Message({
            messageId: message.messageId,
            messageType: gauge.messages.Message.MessageType.StepNameResponse,
        });
        if (!registry.isImplemented(req.stepValue)) {
            resMes.stepNameResponse = new gauge.messages.StepNameResponse({ isStepPresent: false })
        } else {
            let info = registry.get(req.stepValue);
            let span = info.getRange() as Range;
            resMes.stepNameResponse = new gauge.messages.StepNameResponse({
                isStepPresent: true,
                fileName: info.getFilePath(),
                hasAlias: false, //TODO: Alias support
                stepName: [info.getStepText()],
                span: new gauge.messages.Span({
                    start: span.getStart().getLine(),
                    startChar: span.getStart().getChar(),
                    end: span.getEnd().getLine(),
                    endChar: span.getEnd().getChar(),
                }),

            })
        }
        return resMes;
    }
}