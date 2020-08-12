import { Server } from "grpc";
import { gauge } from "../gen/messages";
import { MessageProcessorFactory } from "../processors/MessageProcessorFactory";

type GRPCHandlerRequestType =
  | gauge.messages.StepNamesRequest
  | gauge.messages.ICacheFileRequest
  | gauge.messages.StepPositionsRequest
  | gauge.messages.ImplementationFileListRequest
  | gauge.messages.StubImplementationCodeRequest
  | gauge.messages.StepValidateRequest
  | gauge.messages.RefactorRequest
  | gauge.messages.StepNameRequest
  | gauge.messages.ImplementationFileGlobPatternRequest;

type GRPCHandlerCallType = {
  request: GRPCHandlerRequestType;
};

export class GRPCHandler {

  private readonly _server: Server | null;
  private readonly _factory: MessageProcessorFactory;

  constructor(server: Server | null, factory: MessageProcessorFactory) {
    this._server = server;
    this._factory = factory;
  }

  public getStepNames(
    call: GRPCHandlerCallType,
    callback: gauge.messages.lspService.GetStepNamesCallback
  ): void {
    const mes = new gauge.messages.Message({
      messageId: 0,
      messageType: gauge.messages.Message.MessageType.StepNamesRequest,
      stepNamesRequest: call.request as gauge.messages.StepNamesRequest,
    });

    this._factory
      .get(mes.messageType)
      .process(mes)
      .then((res) =>
        callback(
          null,
          res.stepNamesResponse as gauge.messages.StepNamesResponse
        )
      )
      .catch((err) => callback(err, undefined));
  }

  public cacheFile(
    call: GRPCHandlerCallType,
    callback: gauge.messages.lspService.CacheFileCallback
  ): void {
    const mes = new gauge.messages.Message({
      messageId: 0,
      messageType: gauge.messages.Message.MessageType.CacheFileRequest,
      cacheFileRequest: call.request as gauge.messages.ICacheFileRequest,
    });

    this._factory
      .get(mes.messageType)
      .process(mes)
      .then(() => callback(null, new gauge.messages.Empty()))
      .catch((err) => callback(err, undefined));
  }

  public getStepPositions(
    call: GRPCHandlerCallType,
    callback: gauge.messages.lspService.GetStepPositionsCallback
  ): void {
    const mes = new gauge.messages.Message({
      messageId: 0,
      messageType: gauge.messages.Message.MessageType.StepPositionsRequest,
      stepPositionsRequest: call.request as gauge.messages.StepPositionsRequest,
    });

    this._factory
      .get(mes.messageType)
      .process(mes)
      .then((res) =>
        callback(
          null,
          res.stepPositionsResponse as gauge.messages.StepPositionsResponse
        )
      )
      .catch((err) => callback(err, undefined));
  }

  public getImplementationFiles(
    call: GRPCHandlerCallType,
    callback: gauge.messages.lspService.GetImplementationFilesCallback
  ): void {
    const mes = new gauge.messages.Message({
      messageId: 0,
      messageType:
        gauge.messages.Message.MessageType.ImplementationFileListRequest,
      implementationFileListRequest: call.request as gauge.messages.ImplementationFileListRequest,
    });

    this._factory
      .get(mes.messageType)
      .process(mes)
      .then((res) =>
        callback(
          null,
          res.implementationFileListResponse as gauge.messages.ImplementationFileListResponse
        )
      )
      .catch((err) => callback(err, undefined));
  }

  public implementStub(
    call: GRPCHandlerCallType,
    callback: gauge.messages.lspService.ImplementStubCallback
  ): void {
    const mes = new gauge.messages.Message({
      messageId: 0,
      messageType:
        gauge.messages.Message.MessageType.StubImplementationCodeRequest,
      stubImplementationCodeRequest: call.request as gauge.messages.StubImplementationCodeRequest,
    });

    this._factory
      .get(mes.messageType)
      .process(mes)
      .then((res) => callback(null, res.fileDiff as gauge.messages.FileDiff))
      .catch((err) => callback(err, undefined));
  }

  public validateStep(
    call: GRPCHandlerCallType,
    callback: gauge.messages.lspService.ValidateStepCallback
  ): void {
    const mes = new gauge.messages.Message({
      messageId: 0,
      messageType: gauge.messages.Message.MessageType.StepValidateRequest,
      stepValidateRequest: call.request as gauge.messages.StepValidateRequest,
    });

    this._factory
      .get(mes.messageType)
      .process(mes)
      .then((res) =>
        callback(
          null,
          res.stepValidateResponse as gauge.messages.StepValidateResponse
        )
      )
      .catch((err) => callback(err, undefined));
  }

  public refactor(
    call: GRPCHandlerCallType,
    callback: gauge.messages.lspService.RefactorCallback
  ): void {
    const mes = new gauge.messages.Message({
      messageId: 0,
      messageType: gauge.messages.Message.MessageType.RefactorRequest,
      refactorRequest: call.request as gauge.messages.RefactorRequest,
    });

    this._factory
      .get(mes.messageType)
      .process(mes)
      .then((res) =>
        callback(null, res.refactorResponse as gauge.messages.RefactorResponse)
      )
      .catch((err) => callback(err, undefined));
  }

  public getStepName(
    call: GRPCHandlerCallType,
    callback: gauge.messages.lspService.GetStepNameCallback
  ): void {
    const mes = new gauge.messages.Message({
      messageId: 0,
      messageType: gauge.messages.Message.MessageType.StepNameRequest,
      stepNameRequest: call.request as gauge.messages.StepNameRequest,
    });

    this._factory
      .get(mes.messageType)
      .process(mes)
      .then((res) =>
        callback(null, res.stepNameResponse as gauge.messages.StepNameResponse)
      )
      .catch((err) => callback(err, undefined));
  }

  public getGlobPatterns(
    call: GRPCHandlerCallType,
    callback: gauge.messages.lspService.GetGlobPatternsCallback
  ): void {
    const mes = new gauge.messages.Message({
      messageId: 0,
      messageType:
        gauge.messages.Message.MessageType.ImplementationFileGlobPatternRequest,
      implementationFileGlobPatternRequest: call.request as gauge.messages.ImplementationFileGlobPatternRequest,
    });

    this._factory
      .get(mes.messageType)
      .process(mes)
      .then((res) =>
        callback(
          null,
          res.implementationFileGlobPatternResponse as gauge.messages.ImplementationFileGlobPatternResponse
        )
      )
      .catch((err) => callback(err, undefined));
  }

  public killProcess(
    call: GRPCHandlerCallType,
    callback: gauge.messages.lspService.KillProcessCallback
  ): void {
    this._server && this._server.forceShutdown();
    callback(null, new gauge.messages.Empty());
    process.exit(0);
  }

}
