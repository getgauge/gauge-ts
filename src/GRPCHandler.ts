import { Server } from 'grpc';
import { gauge } from './gen/messages';
import { MessageProcessorFactory } from './processors/MessageProcessorFactory';


export class GRPCHandler {
    private readonly _server: Server;
    private readonly _factory: MessageProcessorFactory;

    constructor(server: Server, factory: MessageProcessorFactory) {
        this._server = server;
        this._factory = factory;
    }

    public getStepNames(call: any, callback: gauge.messages.lspService.GetStepNamesCallback) {
        let mes = new gauge.messages.Message({
            messageId: 0,
            messageType: gauge.messages.Message.MessageType.StepNamesRequest,
            stepNamesRequest: call.request
        });
        this._factory.get(mes.messageType).process(mes)
            .then((res) => callback(null, res.stepNamesResponse as gauge.messages.StepNamesResponse))
            .catch((err) => callback(err, undefined));
    };

    public cacheFile(call: any, callback: gauge.messages.lspService.CacheFileCallback) {
        let mes = new gauge.messages.Message({
            messageId: 0,
            messageType: gauge.messages.Message.MessageType.CacheFileRequest,
            cacheFileRequest: call.request
        });
        this._factory.get(mes.messageType).process(mes)
            .then((res) => callback(null, new gauge.messages.Empty()))
            .catch((err) => callback(err, undefined));
    };

    public getStepPositions(call: any, callback: gauge.messages.lspService.GetStepPositionsCallback) {
        let mes = new gauge.messages.Message({
            messageId: 0,
            messageType: gauge.messages.Message.MessageType.StepPositionsRequest,
            stepPositionsRequest: call.request
        });
        this._factory.get(mes.messageType).process(mes)
            .then((res) => callback(null, res.stepPositionsResponse as gauge.messages.StepPositionsResponse))
            .catch((err) => callback(err, undefined));
    };

    public getImplementationFiles(call: any, callback: gauge.messages.lspService.GetImplementationFilesCallback) {
        let mes = new gauge.messages.Message({
            messageId: 0,
            messageType: gauge.messages.Message.MessageType.ImplementationFileListRequest,
            implementationFileListRequest: call.request
        });
        this._factory.get(mes.messageType).process(mes)
            .then((res) => callback(null, res.implementationFileListResponse as gauge.messages.ImplementationFileListResponse))
            .catch((err) => callback(err, undefined));
    };

    public implementStub(call: any, callback: gauge.messages.lspService.ImplementStubCallback) {
        let mes = new gauge.messages.Message({
            messageId: 0,
            messageType: gauge.messages.Message.MessageType.StubImplementationCodeRequest,
            stubImplementationCodeRequest: call.request
        });
        this._factory.get(mes.messageType).process(mes)
            .then((res) => callback(null, res.fileDiff as gauge.messages.FileDiff))
            .catch((err) => callback(err, undefined));
    };

    public validateStep(call: any, callback: gauge.messages.lspService.ValidateStepCallback) {
        let mes = new gauge.messages.Message({
            messageId: 0,
            messageType: gauge.messages.Message.MessageType.StepValidateRequest,
            stepValidateRequest: call.request
        });
        this._factory.get(mes.messageType).process(mes)
            .then((res) => callback(null, res.stepValidateResponse as gauge.messages.StepValidateResponse))
            .catch((err) => callback(err, undefined));
    };

    public refactor(call: any, callback: gauge.messages.lspService.RefactorCallback) {
        let mes = new gauge.messages.Message({
            messageId: 0,
            messageType: gauge.messages.Message.MessageType.RefactorRequest,
            refactorRequest: call.request
        });
        this._factory.get(mes.messageType).process(mes)
            .then((res) => callback(null, res.refactorResponse as gauge.messages.RefactorResponse))
            .catch((err) => callback(err, undefined));
    };

    public getStepName(call: any, callback: gauge.messages.lspService.GetStepNameCallback) {
        let mes = new gauge.messages.Message({
            messageId: 0,
            messageType: gauge.messages.Message.MessageType.StepNameRequest,
            stepNameRequest: call.request
        });
        this._factory.get(mes.messageType).process(mes)
            .then((res) => callback(null, res.stepNameResponse as gauge.messages.StepNameResponse))
            .catch((err) => callback(err, undefined));
    };

    public getGlobPatterns(call: any, callback: gauge.messages.lspService.GetGlobPatternsCallback) {
        let mes = new gauge.messages.Message({
            messageId: 0,
            messageType: gauge.messages.Message.MessageType.ImplementationFileGlobPatternRequest,
            implementationFileGlobPatternRequest: call.request
        });
        this._factory.get(mes.messageType).process(mes)
            .then((res) => callback(null, res.implementationFileGlobPatternResponse as gauge.messages.ImplementationFileGlobPatternResponse))
            .catch((err) => callback(err, undefined));
    };

    public killProcess(call: any, callback: gauge.messages.lspService.KillProcessCallback): void {
        this._server.forceShutdown();
        callback(null, new gauge.messages.Empty());
        process.exit(0);
    };
}
