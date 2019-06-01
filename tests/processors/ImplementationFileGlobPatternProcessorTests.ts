import { gauge } from '../../src/gen/messages';
import { ImplementationFileGlobPatternProcessor } from '../../src/processors/ImplementationFileGlobPatternProcessor';
import { Util } from '../../src/utils/Util';

describe('ImplementationFileGlobPatternProcessor', () => {
    let processor: ImplementationFileGlobPatternProcessor
    beforeEach(() => {
        jest.clearAllMocks();
        processor = new ImplementationFileGlobPatternProcessor();
    })
    describe('.process', () => {
        it('should process ImplementationFileGlobPatternRequest request', async () => {
            Util.getImplDirs = jest.fn().mockReturnValue(['src', 'tests']);
            let req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.ImplementationFileGlobPatternRequest,
                implementationFileGlobPatternRequest: new gauge.messages.ImplementationFileGlobPatternRequest()
            })

            let resMess = await processor.process(req);
            let res = (resMess.implementationFileGlobPatternResponse as gauge.messages.ImplementationFileGlobPatternResponse);
            expect(res.globPatterns).toStrictEqual(['src/**/*.ts', 'tests/**/*.ts']);
        })

    })

})
