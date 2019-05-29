import { gauge } from '../../src/gen/messages';
import registry from '../../src/models/StepRegistry';
import { ValidationProcessor } from '../../src/processors/ValidationProcessor';

describe('ValidationProcessor', () => {
    let processor: ValidationProcessor
    beforeEach(() => {
        jest.clearAllMocks();
        processor = new ValidationProcessor();
    })
    describe('.process', () => {
        it('should process StepValidateRequest request', async () => {
            registry.isImplemented = jest.fn().mockReturnValue(true);
            let req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.StepValidateRequest,
                stepValidateRequest: new gauge.messages.StepValidateRequest({
                    stepValue: new gauge.messages.ProtoStepValue({
                        parameterizedStepValue: "foo",
                        parameters: [],
                        stepValue: "foo"
                    }),
                    stepText: "foo",
                    numberOfParameters: 0
                })
            })

            let res = await processor.process(req);
            expect((res.stepValidateResponse as gauge.messages.StepValidateResponse).isValid).toBe(true);
        })

        it('should process StepValidateRequest request when step is not implemented', async () => {
            registry.isImplemented = jest.fn().mockReturnValue(false);
            let req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.StepValidateRequest,
                stepValidateRequest: new gauge.messages.StepValidateRequest({
                    stepValue: new gauge.messages.ProtoStepValue({
                        parameterizedStepValue: "hello {}",
                        parameters: ["world"],
                        stepValue: "hello <world>"
                    }),
                    stepText: "hello <world>",
                    numberOfParameters: 1
                })
            })

            let resMess = await processor.process(req);
            let res = (resMess.stepValidateResponse as gauge.messages.StepValidateResponse)
            expect(res.isValid).toBe(false);
            expect(res.errorType).toBe(gauge.messages.StepValidateResponse.ErrorType.STEP_IMPLEMENTATION_NOT_FOUND);
        })

        it('should process StepValidateRequest request when step is implemented more than once', async () => {
            registry.isImplemented = jest.fn().mockReturnValue(true);
            registry.hasMultipleImplementations = jest.fn().mockReturnValue(true);
            let req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.StepValidateRequest,
                stepValidateRequest: new gauge.messages.StepValidateRequest({
                    stepValue: new gauge.messages.ProtoStepValue({
                        parameterizedStepValue: "hello {}",
                        parameters: ["world"],
                        stepValue: "hello <world>"
                    }),
                    stepText: "hello <world>",
                    numberOfParameters: 1
                })
            })

            let resMess = await processor.process(req);
            let res = (resMess.stepValidateResponse as gauge.messages.StepValidateResponse)
            expect(res.isValid).toBe(false);
            expect(res.errorType).toBe(gauge.messages.StepValidateResponse.ErrorType.DUPLICATE_STEP_IMPLEMENTATION);
        })
    })

})
