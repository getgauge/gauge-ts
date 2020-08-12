import { gauge } from '../../src/gen/messages';
import registry from '../../src/models/StepRegistry';
import { StepNamesProcessor } from '../../src/processors/StepNamesProcessor';

describe('StepNamesProcessor', () => {
    describe('.process', () => {

        it('should give the all the step texts ', async () => {
            registry.getStepTexts = jest.fn().mockReturnValue(['foo', 'bar']);
            const processor = new StepNamesProcessor();
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.StepNameRequest,
                stepNamesRequest: new gauge.messages.StepNamesRequest({

                })
            })

            const resMess = await processor.process(message);
            const res = resMess.stepNamesResponse as gauge.messages.StepNamesResponse;

            expect(res.steps).toStrictEqual(['foo', 'bar'])
            jest.clearAllMocks();
        })

    })
})
