import { gauge } from "../messages";
import { IMessageProcessor } from "./IMessageProcessor";
import registry from "../models/StepRegistry";

export class ValidationProcessor implements IMessageProcessor {
    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let req = message.stepValidateRequest as gauge.messages.StepValidateRequest;
        let stepValue = (req.stepValue as gauge.messages.ProtoStepValue).parameterizedStepValue;
        let isValid = true;
        let errorMessage = "";
        let errorType;
        if (!registry.isImplemented(req.stepText)) {
            isValid = false;
            errorMessage = "No step implementation found for " + stepValue
            errorType = gauge.messages.StepValidateResponse.ErrorType.STEP_IMPLEMENTATION_NOT_FOUND;
        } else if (registry.hasMultipleImplementations(req.stepText)) {
            isValid = false;
            errorMessage = "Multiple step implementation found for " + stepValue
            errorType = gauge.messages.StepValidateResponse.ErrorType.DUPLICATE_STEP_IMPLEMENTATION;
        };
        return new gauge.messages.Message({
            messageId: message.messageId,
            messageType: gauge.messages.Message.MessageType.StepValidateResponse,
            stepValidateResponse: new gauge.messages.StepValidateResponse({
                isValid: isValid,
                errorMessage: errorMessage,
                errorType: errorType
            })
        });
    }
}
