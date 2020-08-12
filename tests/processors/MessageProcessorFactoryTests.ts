import {mockProcessExit} from 'jest-mock-process';
import {gauge} from '../../src/gen/messages';
import {StaticLoader} from '../../src/loaders/StaticLoader';
import {MessageProcessorFactory} from '../../src/processors/MessageProcessorFactory';
import {Util} from '../../src/utils/Util';

describe('MessageProcessorFactory', () => {
    const factory = new MessageProcessorFactory(new StaticLoader());
    const _exit = process.exit;

    afterEach(() => {
        jest.clearAllMocks();
    })

    describe('.process', () => {
        it('should process kill process request', async () => {
            const mockExit = mockProcessExit();
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.KillProcessRequest,
                killProcessRequest: new gauge.messages.KillProcessRequest()
            })

            await factory.process(message);

            expect(mockExit).toHaveBeenCalledWith(0);
        })

        it('should load impl before loading files', async () => {
            class Foo {

                // eslint-disable-next-line @typescript-eslint/no-empty-function
                constructor() {
                }

            }

            Util.getListOfFiles = jest.fn().mockReturnValue(['StepImpl.ts']);
            Util.importFile = jest.fn().mockResolvedValue({default: Foo})
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecutionStarting,
                executionStartingRequest: new gauge.messages.ExecutionStartingRequest()
            })

            console.error = jest.fn();
            const err = jest.spyOn(console, 'error');

            await factory.process(message);
            expect(err).toBeCalledTimes(0);
        })

        it('should load impl before loading files which fails to create instance', async () => {
            Util.getListOfFiles = jest.fn().mockReturnValue(['StepImpl.ts']);
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            Util.importFile = jest.fn().mockResolvedValue({
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                default: () => {
                }
            })
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ExecutionStarting,
                executionStartingRequest: new gauge.messages.ExecutionStartingRequest()
            })

            console.error = jest.fn();
            const err = jest.spyOn(console, 'error');

            await factory.process(message);
            expect(err).toHaveBeenCalled();
        })

        it('should process unsupport message', async () => {
            console.error = jest.fn();
            const mockExit = mockProcessExit();
            const message = new gauge.messages.Message({
                messageId: 0,
                messageType: 343,
            })

            await factory.process(message);
            expect(mockExit).toHaveBeenCalledWith(1);
        })
    })
})
