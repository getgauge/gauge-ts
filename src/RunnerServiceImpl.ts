/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
/* eslint-disable lines-between-class-members */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { EOL } from "os";
import { sep } from "path";
import type {
  ServerUnaryCall as SUC,
  Server,
  sendUnaryData as sUD,
} from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { DataStoreFactory } from ".";
import {
  Empty,
  ExecutionStatusResponse,
  ImplementationFileGlobPatternResponse as IFGPR,
  ImplementationFileListResponse as IFLR,
  StepNamesResponse,
} from "./gen/messages_pb";

import type {
  CacheFileRequest,
  ExecutionStatusResponse as ESR,
  ExecuteStepRequest,
  ExecutionEndingRequest,
  ExecutionStartingRequest,
  FileDiff,
  KillProcessRequest,
  RefactorRequest,
  RefactorResponse,
  ScenarioDataStoreInitRequest as SCDSIR,
  ScenarioExecutionEndingRequest as SCEER,
  ScenarioExecutionStartingRequest as SCESR,
  SpecDataStoreInitRequest as SPDSIR,
  SpecExecutionEndingRequest as SPEER,
  SpecExecutionStartingRequest as SPESR,
  StepExecutionEndingRequest as STEER,
  StepExecutionStartingRequest as STESR,
  StepNameRequest,
  StepNameResponse,
  StepNamesRequest,
  StepPositionsRequest,
  StepPositionsResponse,
  StepValidateRequest,
  StepValidateResponse,
  StubImplementationCodeRequest,
  SuiteDataStoreInitRequest,
} from "./gen/messages_pb";

import type { IRunnerServer } from "./gen/services_grpc_pb";
import { ProtoExecutionResult } from "./gen/spec_pb";
import { ImplLoader } from "./loaders/ImplLoader";
import type { StaticLoader } from "./loaders/StaticLoader";
import registry from "./models/StepRegistry";
import { CacheFileProcessor } from "./processors/CacheFileProcessor";
import { ExecutionEndingProcessor } from "./processors/ExecutionEndingProcessor";
import { ExecutionStartingProcessor } from "./processors/ExecutionStartingProcessor";
import { RefactorProcessor } from "./processors/RefactorProcessor";
import { ScenarioExecutionEndingProcessor } from "./processors/ScenarioExecutionEndingProcessor";
import { ScenarioExecutionStartingProcessor } from "./processors/ScenarioExecutionStartingProcessor";
import { SpecExecutionEndingProcessor } from "./processors/SpecExecutionEndingProcessor";
import { SpecExecutionStartingProcessor } from "./processors/SpecExecutionStartingProcessor";
import { StepExecutionEndingProcessor } from "./processors/StepExecutionEndingProcessor";
import { StepExecutionProcessor } from "./processors/StepExecutionProcessor";
import { StepExecutionStartingProcessor } from "./processors/StepExecutionStartingProcessor";
import { StepNameProcessor } from "./processors/StepNameProcessor";
import { StepPositionsProcessor } from "./processors/StepPositionsProcessor";
import { StubImplementationCodeProcessor } from "./processors/StubImplementationCodeProcessor";
import { ValidationProcessor } from "./processors/ValidationProcessor";
import { Util } from "./utils/Util";

type RpcError = {
  code: Status;
  details: string;
  message: string;
  stack: string;
};

export class RunnerServiceImpl implements IRunnerServer {

  private readonly _server: Server;
  private readonly _loader: StaticLoader;

  private _stepValidateRequestProcessor: ValidationProcessor;
  private _stepNameRequestProcessor: StepNameProcessor;
  private _refactorRequestProcessor: RefactorProcessor;
  private _cacheFileRequestProcessor: CacheFileProcessor;
  private _stubImplementationCodeRequestProcessor: StubImplementationCodeProcessor;
  private _stepPositionsRequestProcessor: StepPositionsProcessor;
  private _executionStartingProcessor: ExecutionStartingProcessor;
  private _executionEndingProcessor: ExecutionEndingProcessor;
  private _specExecutionStartingProcessor: SpecExecutionStartingProcessor;
  private _specExecutionEndingProcessor: SpecExecutionEndingProcessor;
  private _scenarioExecutionStartingProcessor: ScenarioExecutionStartingProcessor;
  private _scenarioExecutionEndingProcessor: ScenarioExecutionEndingProcessor;
  private _stepExecutionStartingProcessor: StepExecutionStartingProcessor;
  private _stepExecutionEndingProcessor: StepExecutionEndingProcessor;
  private _executeStepProcessor: StepExecutionProcessor;

  constructor(server: Server, loader: StaticLoader) {
    this._server = server;
    this._loader = loader;
    this._stepValidateRequestProcessor = new ValidationProcessor();
    this._stepNameRequestProcessor = new StepNameProcessor();
    this._refactorRequestProcessor = new RefactorProcessor();
    this._cacheFileRequestProcessor = new CacheFileProcessor(this._loader);
    this._stubImplementationCodeRequestProcessor =
      new StubImplementationCodeProcessor();
    this._stepPositionsRequestProcessor = new StepPositionsProcessor();
    this._executionStartingProcessor = new ExecutionStartingProcessor();
    this._executionEndingProcessor = new ExecutionEndingProcessor();
    this._specExecutionStartingProcessor = new SpecExecutionStartingProcessor();
    this._specExecutionEndingProcessor = new SpecExecutionEndingProcessor();
    this._scenarioExecutionStartingProcessor =
      new ScenarioExecutionStartingProcessor();
    this._scenarioExecutionEndingProcessor =
      new ScenarioExecutionEndingProcessor();
    this._stepExecutionStartingProcessor = new StepExecutionStartingProcessor();
    this._stepExecutionEndingProcessor = new StepExecutionEndingProcessor();
    this._executeStepProcessor = new StepExecutionProcessor();
  }
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [name: string]: import("@grpc/grpc-js/build/src/server-call").HandleCall<any, any>;

  public validateStep(
    call: SUC<StepValidateRequest, StepValidateResponse>,
    callback: sUD<StepValidateResponse>,
  ): void {
    try {
      callback(
        null,
        this._stepValidateRequestProcessor.process(
          call.request as StepValidateRequest,
        ),
      );
    } catch (error) {
      callback(this.createRpcError(error as Error), null);
    }
  }

  public initializeSuiteDataStore(
    call: SUC<SuiteDataStoreInitRequest, ESR>,
    callback: sUD<ESR>,
  ): void {
    try {
      DataStoreFactory.getSuiteDataStore().clear();
      const loader = new ImplLoader();

      loader
        .loadImplementations()
        .then(() => callback(null, this.getEmptExecutionResponse()))
        .catch((err) => {
          callback(this.createRpcError(err), null);
        });
    } catch (error) {
      callback(this.createRpcError(error as Error), null);
    }
  }

  public startExecution(
    call: SUC<ExecutionStartingRequest, ESR>,
    callback: sUD<ESR>,
  ): void {
    this._executionStartingProcessor
      .process(call.request as ExecutionStartingRequest)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(this.createRpcError(error), null));
  }

  public initializeSpecDataStore(
    call: SUC<SPDSIR, ESR>,
    callback: sUD<ESR>,
  ): void {
    try {
      DataStoreFactory.getSpecDataStore().clear();
      callback(null, this.getEmptExecutionResponse());
    } catch (error) {
      callback(this.createRpcError(error as Error), null);
    }
  }

  public startSpecExecution(call: SUC<SPESR, ESR>, callback: sUD<ESR>): void {
    this._specExecutionStartingProcessor
      .process(call.request as SPESR)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(this.createRpcError(error), null));
  }

  public initializeScenarioDataStore(
    call: SUC<SCDSIR, ESR>,
    callback: sUD<ESR>,
  ): void {
    try {
      DataStoreFactory.getScenarioDataStore().clear();
      callback(null, this.getEmptExecutionResponse());
    } catch (error) {
      callback(this.createRpcError(error as Error), null);
    }
  }

  public startScenarioExecution(
    call: SUC<SCESR, ESR>,
    callback: sUD<ESR>,
  ): void {
    this._scenarioExecutionStartingProcessor
      .process(call.request as SCESR)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(this.createRpcError(error), null));
  }

  public startStepExecution(call: SUC<STESR, ESR>, callback: sUD<ESR>): void {
    this._stepExecutionStartingProcessor
      .process(call.request as STESR)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(this.createRpcError(error), null));
  }

  public executeStep(
    call: SUC<ExecuteStepRequest, ESR>,
    callback: sUD<ESR>,
  ): void {
    this._executeStepProcessor
      .process(call.request as ExecuteStepRequest)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(this.createRpcError(error), null));
  }

  public finishStepExecution(call: SUC<STEER, ESR>, callback: sUD<ESR>): void {
    this._stepExecutionEndingProcessor
      .process(call.request as STEER)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(this.createRpcError(error), null));
  }

  public finishScenarioExecution(
    call: SUC<SCEER, ESR>,
    callback: sUD<ESR>,
  ): void {
    this._scenarioExecutionEndingProcessor
      .process(call.request as SCEER)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(this.createRpcError(error), null));
  }

  public finishSpecExecution(call: SUC<SPEER, ESR>, callback: sUD<ESR>): void {
    this._specExecutionEndingProcessor
      .process(call.request as SPEER)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(this.createRpcError(error), null));
  }

  public finishExecution(
    call: SUC<ExecutionEndingRequest, ESR>,
    callback: sUD<ESR>,
  ): void {
    this._executionEndingProcessor
      .process(call.request as ExecutionEndingRequest)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(this.createRpcError(error), null));
  }

  public cacheFile(
    call: SUC<CacheFileRequest, Empty>,
    callback: sUD<Empty>,
  ): void {
    try {
      this._cacheFileRequestProcessor.process(call.request as CacheFileRequest);
      callback(null, new Empty());
    } catch (error) {
      callback(this.createRpcError(error as Error), null);
    }
  }

  public getStepName(
    call: SUC<StepNameRequest, StepNameResponse>,
    callback: sUD<StepNameResponse>,
  ): void {
    try {
      callback(
        null,
        this._stepNameRequestProcessor.process(call.request as StepNameRequest),
      );
    } catch (error) {
      callback(this.createRpcError(error as Error), null);
    }
  }

  public getGlobPatterns(call: SUC<Empty, IFGPR>, callback: sUD<IFGPR>): void {
    try {
      const patterns = Util.getImplDirs().map((dir: string) => {
        return dir.split(sep).concat(["**", "*.ts"]).join("/");
      });
      const res = new IFGPR();

      res.setGlobpatternsList(patterns);
      callback(null, res);
    } catch (error) {
      callback(this.createRpcError(error as Error), null);
    }
  }

  public getStepNames(
    call: SUC<StepNamesRequest, StepNamesResponse>,
    callback: sUD<StepNamesResponse>,
  ): void {
    try {
      const res = new StepNamesResponse();

      res.setStepsList(registry.getStepTexts());
      callback(null, res);
    } catch (error) {
      callback(this.createRpcError(error as Error), null);
    }
  }

  public getStepPositions(
    call: SUC<StepPositionsRequest, StepPositionsResponse>,
    callback: sUD<StepPositionsResponse>,
  ): void {
    try {
      callback(
        null,
        this._stepPositionsRequestProcessor.process(
          call.request as StepPositionsRequest,
        ),
      );
    } catch (error) {
      callback(this.createRpcError(error as Error), null);
    }
  }

  public getImplementationFiles(
    call: SUC<Empty, IFLR>,
    callback: sUD<IFLR>,
  ): void {
    try {
      const res = new IFLR();

      res.setImplementationfilepathsList(Util.getListOfFiles());
      callback(null, res);
    } catch (error) {
      callback(this.createRpcError(error as Error), null);
    }
  }

  public implementStub(
    call: SUC<StubImplementationCodeRequest, FileDiff>,
    callback: sUD<FileDiff>,
  ): void {
    try {
      callback(
        null,
        this._stubImplementationCodeRequestProcessor.process(
          call.request as StubImplementationCodeRequest,
        ),
      );
    } catch (error) {
      callback(this.createRpcError(error as Error), null);
    }
  }

  public refactor(
    call: SUC<RefactorRequest, RefactorResponse>,
    callback: sUD<RefactorResponse>,
  ): void {
    try {
      callback(
        null,
        this._refactorRequestProcessor.process(call.request as RefactorRequest),
      );
    } catch (error) {
      callback(this.createRpcError(error as Error), null);
    }
  }

  public kill(
    _call: SUC<KillProcessRequest, Empty>,
    callback: sUD<Empty>,
  ): void {
    callback(null, new Empty());
    setTimeout(() => {
      this._server?.forceShutdown();
      process.exit(0);
    }, 100);
  }

  private createRpcError(error: Error): RpcError {
    return {
      code: Status.INTERNAL,
      message: error.message,
      stack: error.stack ?? "",
      details: `${error.message}${EOL}${error.stack ?? ""}`,
    };
  }

  private getEmptExecutionResponse(): ESR {
    const res = new ExecutionStatusResponse();
    const result = new ProtoExecutionResult();

    result.setFailed(false);
    res.setExecutionresult(result);

    return res;
    // eslint-disable-next-line padded-blocks
  }
  // eslint-disable-next-line no-multiple-empty-lines

}
