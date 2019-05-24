import { randomBytes } from 'crypto';
import { EOL } from "os";
import { gauge } from "../gen/messages";
import registry from "../models/StepRegistry";
import { IMessageProcessor } from "./IMessageProcessor";

export class ValidationProcessor implements IMessageProcessor {
    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let req = message.stepValidateRequest as gauge.messages.StepValidateRequest;
        let step = (req.stepValue as gauge.messages.ProtoStepValue);
        let stepValue = step.parameterizedStepValue;
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
                errorType: errorType,
                suggestion: this.getSuggestion(isValid, step)
            })
        });
    }

    private getSuggestion(isValid: boolean, step: gauge.messages.ProtoStepValue): string {
        if (isValid) return "";
        let argCount = 0;
        let stepText = step.stepValue.replace(/{}/g, function () { return "<arg" + argCount++ + ">"; });
        return `@Step("${stepText}")` + EOL +
            `public async ${this.getMethodName(stepText)}(${this.getParamsList(step.parameters)}) {` + EOL +
            `\tthrow new Error("Method not implemented.");` + EOL +
            '}';
    }

    private getMethodName(stepText: string) {
        return `implementation${randomBytes(10).toString('hex')}`
    }

    private getParamsList(params: string[]): string {
        if (!params || !params.length) return '';
        return params.map((_, i) => {
            return "arg" + i.toString() + ': any';
        }).join(", ");
    }
}
