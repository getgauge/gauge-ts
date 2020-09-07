import {gauge} from "../gen/messages";
import {Range} from "../models/Range";
import registry from "../models/StepRegistry";
import {IMessageProcessor} from "./IMessageProcessor";

export class StepPositionsProcessor implements IMessageProcessor {

    public process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        const req = message.stepPositionsRequest as gauge.messages.StepPositionsRequest;
        const positions = registry.getStepPositions(req.filePath);

        return Promise.resolve(new gauge.messages.Message({
                messageId: message.messageId,
                messageType: gauge.messages.Message.MessageType.StepPositionsResponse,
                stepPositionsResponse: StepPositionsProcessor.createStepPositionsResponse(positions)
            })
        );
    }

    private static createStepPositionsResponse(positions: { stepValue: string; span: Range; }[]): gauge.messages.StepPositionsResponse {
        return new gauge.messages.StepPositionsResponse({
            error: "",
            stepPositions: positions.map((p) => {
                return new gauge.messages.StepPositionsResponse.StepPosition({
                    stepValue: p.stepValue,
                    span: new gauge.messages.Span({
                        start: p.span.getStart().getLine(),
                        end: p.span.getEnd().getLine(),
                        startChar: p.span.getStart().getChar(),
                        endChar: p.span.getEnd().getChar()
                    })
                });
            })
        });
    }

}