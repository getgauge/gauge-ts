import { gauge } from '../../src/gen/messages';
import { ImplementationFileListProcessor } from '../../src/processors/ImplementationFileListProcessor';
import { Util } from '../../src/utils/Util';

describe('ImplementationFileListProcessor', () => {
    let processor: ImplementationFileListProcessor

    beforeEach(() => {
        jest.clearAllMocks();
        processor = new ImplementationFileListProcessor();
    })
    describe('.process', () => {
        it('should process ImplementationFileListRequest request', async () => {
            Util.getListOfFiles = jest.fn().mockReturnValue(['StepImpl1.ts', 'StepImpl2.ts']);
            const req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ImplementationFileListRequest,
                implementationFileListRequest: new gauge.messages.ImplementationFileListRequest({})
            })

            const resMess = await processor.process(req);
            const res = (resMess.implementationFileListResponse as gauge.messages.ImplementationFileListResponse);

            expect(res.implementationFilePaths).toStrictEqual(['StepImpl1.ts', 'StepImpl2.ts']);
        })

    })

})
