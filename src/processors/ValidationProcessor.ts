import {randomBytes} from 'crypto';
import {EOL} from "os";
import {gauge} from "../gen/messages";
import registry from "../models/StepRegistry";
import {IMessageProcessor} from "./IMessageProcessor";

export class ValidationProcessor implements IMessageProcessor {

    public process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        const req = message.stepValidateRequest as gauge.messages.StepValidateRequest;
        const step = (req.stepValue as gauge.messages.ProtoStepValue);
        const stepValue = step.parameterizedStepValue;
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
        }

        return Promise.resolve(
            new gauge.messages.Message({
                messageId: message.messageId,
                messageType: gauge.messages.Message.MessageType.StepValidateResponse,
                stepValidateResponse: new gauge.messages.StepValidateResponse({
                    isValid: isValid,
                    errorMessage: errorMessage,
                    errorType: errorType,
                    suggestion: this.getSuggestion(isValid, step)
                })
            })
        );
    }

    private getSuggestion(isValid: boolean, step: gauge.messages.ProtoStepValue): string {
        if (isValid) {
            return "";
        }
        let argCount = 0;
        const stepText = step.stepValue.replace(/{}/g, function () {
            return `<arg${argCount++}>`;
        });

        return `@Step("${stepText}")` + EOL +
            `public async ${ValidationProcessor.getMethodName(stepText)}(${ValidationProcessor.getParamsList(step.parameters)}) {` + EOL +
            `\tthrow new Error("Method not implemented.");` + EOL +
            '}';
    }

    private static getMethodName(stepText: string) {
        return `implementation${randomBytes(10).toString('hex')}`
    }

    private static getParamsList(params: string[]): string {
        if (!params || !params.length) {
            return '';
        }

        return params.map((_, i) => {
            return "arg" + i.toString() + ': any';
        }).join(", ");
    }

}
