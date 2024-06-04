import { EOL } from "node:os";
import { sep } from "node:path";
import type {
  ServerUnaryCall as SUC,
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

import { stop } from "./GaugeRuntime";

import type { IRunnerServer } from "./gen/services_grpc_pb";
import { ProtoExecutionResult } from "./gen/spec_pb";
import { ImplLoader } from "./loaders/ImplLoader";
import registry from "./models/StepRegistry";
import {
  cacheFileProcessor,
  executionEndingProcessor,
  executionStartingProcessor,
  refactorProcessor,
  scenarioExecutionEndingProcessor,
  scenarioExecutionStartingProcessor,
  specExecutionEndingProcessor,
  specExecutionStartingProcessor,
  stepExecutionEndingProcessor,
  stepExecutionProcessor,
  stepExecutionStartingProcessor,
  stepNameProcessor,
  stepPositionsProcessor,
  stubImplementationCodeProcessor,
  validationProcessor,
} from "./processors";
import { Util } from "./utils/Util";

type RpcError = {
  code: Status;
  details: string;
  message: string;
  stack: string;
};

export default class RunnerServer implements IRunnerServer {
  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;

  public validateStep(
    call: SUC<StepValidateRequest, StepValidateResponse>,
    callback: sUD<StepValidateResponse>,
  ): void {
    try {
      callback(
        null,
        validationProcessor.process(call.request as StepValidateRequest),
      );
    } catch (error) {
      callback(createRpcError(error as Error), null);
    }
  }

  public initializeSuiteDataStore(
    _call: SUC<SuiteDataStoreInitRequest, ESR>,
    callback: sUD<ESR>,
  ): void {
    try {
      DataStoreFactory.getSuiteDataStore().clear();
      const loader = new ImplLoader();

      loader
        .loadImplementations()
        .then(() => callback(null, this.getEmptExecutionResponse()))
        .catch((err) => {
          callback(createRpcError(err), null);
        });
    } catch (error) {
      callback(createRpcError(error as Error), null);
    }
  }

  public startExecution(
    call: SUC<ExecutionStartingRequest, ESR>,
    callback: sUD<ESR>,
  ): void {
    executionStartingProcessor
      .process(call.request as ExecutionStartingRequest)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(createRpcError(error), null));
  }

  public initializeSpecDataStore(
    call: SUC<SPDSIR, ESR>,
    callback: sUD<ESR>,
  ): void {
    try {
      DataStoreFactory.getSpecDataStore().clear();
      callback(null, this.getEmptExecutionResponse());
    } catch (error) {
      callback(createRpcError(error as Error), null);
    }
  }

  public startSpecExecution(call: SUC<SPESR, ESR>, callback: sUD<ESR>): void {
    specExecutionStartingProcessor
      .process(call.request as SPESR)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(createRpcError(error), null));
  }

  public initializeScenarioDataStore(
    call: SUC<SCDSIR, ESR>,
    callback: sUD<ESR>,
  ): void {
    try {
      DataStoreFactory.getScenarioDataStore().clear();
      callback(null, this.getEmptExecutionResponse());
    } catch (error) {
      callback(createRpcError(error as Error), null);
    }
  }

  public startScenarioExecution(
    call: SUC<SCESR, ESR>,
    callback: sUD<ESR>,
  ): void {
    scenarioExecutionStartingProcessor
      .process(call.request as SCESR)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(createRpcError(error), null));
  }

  public startStepExecution(call: SUC<STESR, ESR>, callback: sUD<ESR>): void {
    stepExecutionStartingProcessor
      .process(call.request as STESR)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(createRpcError(error), null));
  }

  public executeStep(
    call: SUC<ExecuteStepRequest, ESR>,
    callback: sUD<ESR>,
  ): void {
    stepExecutionProcessor
      .process(call.request as ExecuteStepRequest)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(createRpcError(error), null));
  }

  public finishStepExecution(call: SUC<STEER, ESR>, callback: sUD<ESR>): void {
    stepExecutionEndingProcessor
      .process(call.request as STEER)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(createRpcError(error), null));
  }

  public finishScenarioExecution(
    call: SUC<SCEER, ESR>,
    callback: sUD<ESR>,
  ): void {
    scenarioExecutionEndingProcessor
      .process(call.request as SCEER)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(createRpcError(error), null));
  }

  public finishSpecExecution(call: SUC<SPEER, ESR>, callback: sUD<ESR>): void {
    specExecutionEndingProcessor
      .process(call.request as SPEER)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(createRpcError(error), null));
  }

  public finishExecution(
    call: SUC<ExecutionEndingRequest, ESR>,
    callback: sUD<ESR>,
  ): void {
    executionEndingProcessor
      .process(call.request as ExecutionEndingRequest)
      .then((res) => callback(null, res))
      .catch((error: Error) => callback(createRpcError(error), null));
  }

  public cacheFile(
    call: SUC<CacheFileRequest, Empty>,
    callback: sUD<Empty>,
  ): void {
    try {
      cacheFileProcessor.process(call.request as CacheFileRequest);
      callback(null, new Empty());
    } catch (error) {
      callback(createRpcError(error as Error), null);
    }
  }

  public getStepName(
    call: SUC<StepNameRequest, StepNameResponse>,
    callback: sUD<StepNameResponse>,
  ): void {
    try {
      callback(
        null,
        stepNameProcessor.process(call.request as StepNameRequest),
      );
    } catch (error) {
      callback(createRpcError(error as Error), null);
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
      callback(createRpcError(error as Error), null);
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
      callback(createRpcError(error as Error), null);
    }
  }

  public getStepPositions(
    call: SUC<StepPositionsRequest, StepPositionsResponse>,
    callback: sUD<StepPositionsResponse>,
  ): void {
    try {
      callback(
        null,
        stepPositionsProcessor.process(call.request as StepPositionsRequest),
      );
    } catch (error) {
      callback(createRpcError(error as Error), null);
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
      callback(createRpcError(error as Error), null);
    }
  }

  public implementStub(
    call: SUC<StubImplementationCodeRequest, FileDiff>,
    callback: sUD<FileDiff>,
  ): void {
    try {
      callback(
        null,
        stubImplementationCodeProcessor.process(
          call.request as StubImplementationCodeRequest,
        ),
      );
    } catch (error) {
      callback(createRpcError(error as Error), null);
    }
  }

  public refactor(
    call: SUC<RefactorRequest, RefactorResponse>,
    callback: sUD<RefactorResponse>,
  ): void {
    try {
      callback(
        null,
        refactorProcessor.process(call.request as RefactorRequest),
      );
    } catch (error) {
      callback(createRpcError(error as Error), null);
    }
  }

  public kill(
    _call: SUC<KillProcessRequest, Empty>,
    callback: sUD<Empty>,
  ): void {
    callback(null, new Empty());
    setTimeout(() => {
      stop();
      process.exit(0);
    }, 100);
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

function createRpcError(error: Error): RpcError {
  return {
    code: Status.INTERNAL,
    message: error.message,
    stack: error.stack ?? "",
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    details: `${error.message}${EOL}${error.stack ?? ""}`,
  };
}
