import { gauge } from '../../src/gen/messages';
import registry from '../../src/models/StepRegistry';
import { StepNamesProcessor } from '../../src/processors/StepNamesProcessor';

describe('StepNamesProcessor', () => {
    describe('.process', () => {

        let processor: StepNamesProcessor

        it('should give the all the step texts ', async () => {
            registry.getStepTexts = jest.fn().mockReturnValue(['foo', 'bar']);
            let processor = new StepNamesProcessor();
            let message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.StepNameRequest,
                stepNamesRequest: new gauge.messages.StepNamesRequest({

                })
            })

            let resMess = await processor.process(message);
            let res = resMess.stepNamesResponse as gauge.messages.StepNamesResponse;
            expect(res.steps).toStrictEqual(['foo', 'bar'])
            jest.clearAllMocks();
        })

    })
})
