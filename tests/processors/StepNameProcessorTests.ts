import { gauge } from '../../src/gen/messages';
import { Position } from '../../src/models/Position';
import { Range } from '../../src/models/Range';
import registry from '../../src/models/StepRegistry';
import { StepRegistryEntry } from '../../src/models/StepRegistryEntry';
import { StepNameProcessor } from '../../src/processors/StepNameProcessor';

describe('StepNameProcessor', () => {
    describe('.process', () => {

        let processor: StepNameProcessor

        beforeEach(() => {
            jest.clearAllMocks();
            registry.clear();
            process.env.screenshot_on_failure = "";
            processor = new StepNameProcessor();
        })
        it('should give the step info', async () => {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            registry.add("foo", new StepRegistryEntry("foo", "foo", "foo.ts", () => { }, new Range(new Position(3, 3), new Position(7, 3))))
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.StepNameRequest,
                stepNameRequest: new gauge.messages.StepNameRequest({
                    stepValue: "foo"
                })
            })

            const resMess = await processor.process(message);
            const res = resMess.stepNameResponse as gauge.messages.StepNameResponse;

            expect(res.fileName).toBe('foo.ts');
            expect(res.isStepPresent).toBe(true);
            expect(res.hasAlias).toBe(false);
            expect(res.stepName).toStrictEqual(['foo']);
            const span = res.span as gauge.messages.Span;

            expect(span.start).toBe(3)
            expect(span.startChar).toBe(3)
            expect(span.end).toBe(7);
            expect(span.endChar).toBe(3)
        })

        it('should give the step info if step is not implemented', async () => {
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.StepNameRequest,
                stepNameRequest: new gauge.messages.StepNameRequest({
                    stepValue: "foo"
                })
            })

            const resMess = await processor.process(message);
            const res = resMess.stepNameResponse as gauge.messages.StepNameResponse;

            expect(res.isStepPresent).toBe(false);
        })
    })

})
