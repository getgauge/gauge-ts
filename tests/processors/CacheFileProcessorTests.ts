import { gauge } from '../../src/gen/messages';
import { StaticLoader } from '../../src/loaders/StaticLoader';
import registry from '../../src/models/StepRegistry';
import { CacheFileProcessor } from '../../src/processors/CacheFileProcessor';
import { Util } from '../../src/utils/Util';

describe('CacheFileProcessor', () => {
    let processor: CacheFileProcessor
    let loader: StaticLoader;
    let file1: string = 'StepImpl1.ts'
    let text1 = `import { Step } from "gauge-ts";` +
        `export default class StepImpl {` +
        `    @Step("foo")` +
        `    public async foo() {` +
        `        console.log("Hello World");` +
        `    }` +
        `}`;
    let file2: string = 'StepImpl2.ts'
    let text2 = `import { Step } from "gauge-ts";` +
        `export default class StepImpl {` +
        `    @Step("bar")` +
        `    public async bar() {` +
        `        console.log("Hello World");` +
        `    }` +
        `}`;

    beforeEach(() => {
        jest.clearAllMocks();
        loader = new StaticLoader();
        processor = new CacheFileProcessor(loader);
        registry.clear();
    })

    describe('.process', () => {
        it('should process cacheFileRequest when a file is opened', async () => {
            let req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.CacheFileRequest,
                cacheFileRequest: new gauge.messages.CacheFileRequest({
                    status: gauge.messages.CacheFileRequest.FileStatus.OPENED,
                    content: text1,
                    filePath: file1,
                    isClosed: false
                })
            });
            await processor.process(req);
            expect(registry.isImplemented("foo")).toBe(true);
        })

        it('should process cacheFileRequest when a file is changed', async () => {
            loader.loadStepsFromText(file1, text1);
            let req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.CacheFileRequest,
                cacheFileRequest: new gauge.messages.CacheFileRequest({
                    status: gauge.messages.CacheFileRequest.FileStatus.CHANGED,
                    content: text2,
                    filePath: file1,
                    isClosed: false
                })
            });
            await processor.process(req);
            expect(registry.isImplemented("foo")).toBe(false);
            expect(registry.isImplemented("bar")).toBe(true);
        })

        it('should process cacheFileRequest when a file is created', async () => {
            Util.exists = jest.fn().mockReturnValue(true);
            Util.readFile = jest.fn().mockReturnValue(text1);

            let req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.CacheFileRequest,
                cacheFileRequest: new gauge.messages.CacheFileRequest({
                    status: gauge.messages.CacheFileRequest.FileStatus.CREATED,
                    filePath: file1,
                    isClosed: false
                })
            });
            await processor.process(req);
            expect(registry.isImplemented("foo")).toBe(true);
        })

        it('should process cacheFileRequest when a file is created and cached', async () => {
            registry.isFileCached = jest.fn().mockReturnValue(true);
            let req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.CacheFileRequest,
                cacheFileRequest: new gauge.messages.CacheFileRequest({
                    status: gauge.messages.CacheFileRequest.FileStatus.CREATED,
                    filePath: file1,
                    isClosed: false
                })
            });
            await processor.process(req);
            expect(registry.isImplemented("foo")).toBe(false);
        })

        it('should process cacheFileRequest when a file closed', async () => {
            loader.loadStepsFromText(file1, text1);

            expect(registry.isImplemented("foo")).toBe(true);

            Util.exists = jest.fn().mockReturnValue(true);
            Util.readFile = jest.fn().mockReturnValue(text2);

            let req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.CacheFileRequest,
                cacheFileRequest: new gauge.messages.CacheFileRequest({
                    status: gauge.messages.CacheFileRequest.FileStatus.CLOSED,
                    filePath: file1,
                    isClosed: true
                })
            });
            await processor.process(req);
            expect(registry.isImplemented("foo")).toBe(false);
            expect(registry.isImplemented("bar")).toBe(true);
        })

        it('should process cacheFileRequest when a file closed and dont exists anymore', async () => {
            Util.exists = jest.fn().mockReturnValue(false);
            let req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.CacheFileRequest,
                cacheFileRequest: new gauge.messages.CacheFileRequest({
                    status: gauge.messages.CacheFileRequest.FileStatus.CLOSED,
                    filePath: file1
                })
            });
            await processor.process(req);
            expect(registry.isImplemented("foo")).toBe(false);
        })

        it('should process cacheFileRequest when a file deleted', async () => {
            loader.loadStepsFromText(file1, text1);
            let req = new gauge.messages.Message({
                messageId: 0,
                messageType: gauge.messages.Message.MessageType.CacheFileRequest,
                cacheFileRequest: new gauge.messages.CacheFileRequest({
                    status: gauge.messages.CacheFileRequest.FileStatus.DELETED,
                    filePath: file1
                })
            });
            await processor.process(req);
            expect(registry.isImplemented("foo")).toBe(false);
        })

    })


})