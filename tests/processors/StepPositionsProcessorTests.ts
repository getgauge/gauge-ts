import { gauge } from "../../src/gen/messages";
import { Position } from "../../src/models/Position";
import { Range } from "../../src/models/Range";
import registry from "../../src/models/StepRegistry";
import { StepPositionsProcessor } from '../../src/processors/StepPositionsProcessor';

describe('StepPositionsProcessor', () => {

    let processor: StepPositionsProcessor

    beforeEach(() => {
        jest.clearAllMocks();
        registry.clear();
        processor = new StepPositionsProcessor();
    })
    describe('.prcoess', () => {
        it('should StepPositionsRequest and give step positions for a given file', async () => {
            registry.getStepPositions = jest.fn().mockReturnValue([
                {stepValue: 'foo', span: new Range(new Position(3, 3), new Position(5, 3))},
                {stepValue: 'bar', span: new Range(new Position(7, 3), new Position(9, 3))},
                {stepValue: 'foo', span: new Range(new Position(11, 3), new Position(15, 3))}
            ])
            const message = new gauge.messages.Message({
                messageId:0,
                messageType: gauge.messages.Message.MessageType.StepPositionsRequest,
                stepPositionsRequest: new gauge.messages.StepPositionsRequest({
                    filePath: "foo.js"
                })
            })

            const resMess = await processor.process(message);
            const positions = resMess.stepPositionsResponse as gauge.messages.StepPositionsResponse

            expect(positions.error).toBe("");
            expect(positions.stepPositions.length).toBe(3);
        })
    })

})
