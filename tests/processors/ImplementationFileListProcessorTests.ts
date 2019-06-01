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
            let req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ImplementationFileListRequest,
                implementationFileListRequest: new gauge.messages.ImplementationFileListRequest({})
            })

            let resMess = await processor.process(req);
            let res = (resMess.implementationFileListResponse as gauge.messages.ImplementationFileListResponse);
            expect(res.implementationFilePaths).toStrictEqual(['StepImpl1.ts', 'StepImpl2.ts']);
        })

    })

})
