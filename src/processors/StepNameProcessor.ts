import {gauge} from "../gen/messages";
import {Range} from "../models/Range";
import registry from "../models/StepRegistry";
import {IMessageProcessor} from "./IMessageProcessor";

export class StepNameProcessor implements IMessageProcessor {

    public process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        const req = message.stepNameRequest as gauge.messages.StepNameRequest;

        const resMes = new gauge.messages.Message({
            messageId: message.messageId,
            messageType: gauge.messages.Message.MessageType.StepNameResponse,
        });

        if (!registry.isImplemented(req.stepValue)) {
            resMes.stepNameResponse = new gauge.messages.StepNameResponse({isStepPresent: false});

            return Promise.resolve(resMes);
        }

        const info = registry.get(req.stepValue);
        const span = info.getRange() as Range;

        resMes.stepNameResponse = new gauge.messages.StepNameResponse({
            isStepPresent: true,
            fileName: info.getFilePath(),
            hasAlias: info.hasAlias(),
            stepName: [info.getStepText()],
            span: new gauge.messages.Span({
                start: span.getStart().getLine(),
                startChar: span.getStart().getChar(),
                end: span.getEnd().getLine(),
                endChar: span.getEnd().getChar(),
            }),

        });

        return Promise.resolve(resMes);
    }

}