/* eslint-disable no-multi-spaces */
/* eslint-disable comma-spacing */

import { EOL } from "node:os";
import {
  type ServerUnaryCall as SUC,
  Server,
  type StatusObject,
} from "@grpc/grpc-js";
import type { ServerErrorResponse } from "@grpc/grpc-js/build/src/server-call";
import { mockProcessExit } from "jest-mock-process";
import { createMock } from "ts-auto-mock";
import { UnparsedPrologue } from "typescript";
import { RunnerServiceImpl } from "../src/RunnerServiceImpl";
import {
  CacheFileRequest as CFReq,
  type ExecutionStatusResponse as ESR,
  Empty,
  ExecuteStepRequest,
  ExecutionEndingRequest,
  ExecutionInfo,
  ExecutionStartingRequest,
  type FileDiff,
  type ImplementationFileGlobPatternResponse as IFGPRes,
  type ImplementationFileListResponse as IFLRes,
  KillProcessRequest as KPReq,
  RefactorRequest as RReq,
  type RefactorResponse as RRes,
  StubImplementationCodeRequest as SICReq,
  StepNameRequest as SNReq,
  type StepNameResponse as SNRes,
  type StepNamesRequest as SNsReq,
  type StepNamesResponse as SNsRes,
  StepPositionsRequest as SPReq,
  type StepPositionsResponse as SPRes,
  StepValidateRequest as SVReq,
  type StepValidateResponse as SVRes,
  type ScenarioDataStoreInitRequest,
  ScenarioExecutionEndingRequest,
  ScenarioExecutionStartingRequest,
  ScenarioInfo,
  type SpecDataStoreInitRequest,
  SpecExecutionEndingRequest,
  SpecExecutionStartingRequest,
  // eslint-disable-next-line comma-spacing, no-multi-spaces
  SpecInfo,
  StepExecutionEndingRequest,
  StepExecutionStartingRequest,
  StepInfo,
  type SuiteDataStoreInitRequest,
} from "../src/gen/messages_pb";
import { ProtoStepValue } from "../src/gen/spec_pb";
import { StaticLoader } from "../src/loaders/StaticLoader";
import { Position } from "../src/models/Position";
import { Range } from "../src/models/Range";
import registry from "../src/models/StepRegistry";
import { DataStoreFactory } from "../src/stores/DataStoreFactory";
import { Util } from "../src/utils/Util";

type error = Partial<StatusObject> | ServerErrorResponse | null;

describe("RunnerServiceImpl", () => {
  const text1 =
    `import { Step } from "gauge-ts";${EOL}export default class StepImpl {${EOL}    @Step("foo")${EOL}    public async foo() {${EOL}        console.log("Hello World");${EOL}    }${EOL}}`;

  let loader: StaticLoader;
  let handler: RunnerServiceImpl;

  beforeEach(() => {
    jest.clearAllMocks();
    loader = new StaticLoader();
    handler = new RunnerServiceImpl();
    registry.clear();
  });

  describe(".initializeSuiteDataStore", () => {
    it("should initialise suite data store", (done) => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      Util.importFile = jest.fn().mockReturnValue({ default: () => { } });
      Util.getListOfFiles = jest.fn().mockReturnValue([]);

      const call = createMock<SUC<SuiteDataStoreInitRequest, ESR>>();

      handler.initializeSuiteDataStore(
        call,
        (err: error, res: ESR | null | undefined) => {
          expect(err).toBe(null);
          expect(res?.getExecutionresult()?.getFailed()).toBeFalsy();
          expect(DataStoreFactory.getSuiteDataStore().length).toBe(0);
          done();
        },
      );
    });
  });

  describe(".initializeSuiteDataStore", () => {
    it("should fail to initialise suite data store", (done) => {
      DataStoreFactory.getSuiteDataStore = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      Util.importFile = jest.fn().mockReturnValue({ default: () => { } });
      Util.getListOfFiles = jest.fn().mockReturnValue([]);

      const call = createMock<SUC<SuiteDataStoreInitRequest, ESR>>();

      handler.initializeSuiteDataStore(call, (err: error) => {
        expect(err).not.toBeNull();
        done();
      });
    });
  });

  describe(".initializeSpecDataStore", () => {
    it("should initialise spec data store", (done) => {
      const call = createMock<SUC<SpecDataStoreInitRequest, ESR>>();

      handler.initializeSpecDataStore(call, (err: error) => {
        expect(err).toBe(null);
        expect(DataStoreFactory.getSpecDataStore().length).toBe(0);
        done();
      });
    });
  });

  describe(".initializeSpecDataStore", () => {
    it("should fail to initialise spec data store", (done) => {
      DataStoreFactory.getSpecDataStore = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      const call = createMock<SUC<SpecDataStoreInitRequest, ESR>>();

      handler.initializeSpecDataStore(call, (err: error) => {
        expect(err).not.toBe(null);
        done();
      });
    });
  });

  describe(".initializeScenarioDataStore", () => {
    it("should initialise scenario data store", (done) => {
      const call = createMock<SUC<ScenarioDataStoreInitRequest, ESR>>();

      handler.initializeScenarioDataStore(call, (err: error) => {
        expect(err).toBe(null);
        expect(DataStoreFactory.getScenarioDataStore().length).toBe(0);
        done();
      });
    });
  });

  describe(".initializeScenarioDataStore", () => {
    it("should fail to initialise scenario data store", (done) => {
      DataStoreFactory.getScenarioDataStore = jest
        .fn()
        .mockImplementation(() => {
          throw new Error();
        });
      const call = createMock<SUC<ScenarioDataStoreInitRequest, ESR>>();

      handler.initializeScenarioDataStore(call, (err: error) => {
        expect(err).not.toBe(null);
        done();
      });
    });
  });

  describe(".startExecution", () => {
    it("should start suite execution", (done) => {
      const req = new ExecutionStartingRequest();
      const call = createMock<SUC<ExecutionStartingRequest, ESR>>({
        request: req,
      });

      handler.startExecution(call, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".startSpecExecution", () => {
    it("should start spec execution", (done) => {
      const req = new SpecExecutionStartingRequest();
      const info = new ExecutionInfo();

      info.setCurrentspec(new SpecInfo());
      req.setCurrentexecutioninfo(info);
      const call = createMock<SUC<SpecExecutionStartingRequest, ESR>>({
        request: req,
      });

      handler.startSpecExecution(call, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".startScenarioExecution", () => {
    it("should start scenario execution", (done) => {
      const req = new ScenarioExecutionStartingRequest();
      const info = new ExecutionInfo();

      info.setCurrentspec(new SpecInfo());
      info.setCurrentscenario(new ScenarioInfo());
      req.setCurrentexecutioninfo(info);
      const call = createMock<SUC<ScenarioExecutionStartingRequest, ESR>>({
        request: req,
      });

      handler.startScenarioExecution(call, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".startStepExecution", () => {
    it("should start step execution", (done) => {
      const req = new StepExecutionStartingRequest();
      const info = new ExecutionInfo();

      info.setCurrentspec(new SpecInfo());
      info.setCurrentscenario(new ScenarioInfo());
      info.setCurrentspec(new SpecInfo());
      info.setCurrentstep(new StepInfo());
      req.setCurrentexecutioninfo(info);
      const call = createMock<SUC<StepExecutionStartingRequest, ESR>>({
        request: req,
      });

      handler.startStepExecution(call, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".executeStep", () => {
    it("should execute step", (done) => {
      const req = new ExecuteStepRequest();

      const call = createMock<SUC<ExecuteStepRequest, ESR>>({ request: req });

      handler.executeStep(call, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".finishStepExecution", () => {
    it("should finish step execution", (done) => {
      const req = new StepExecutionEndingRequest();
      const info = new ExecutionInfo();

      info.setCurrentspec(new SpecInfo());
      info.setCurrentscenario(new ScenarioInfo());
      info.setCurrentspec(new SpecInfo());
      info.setCurrentstep(new StepInfo());
      req.setCurrentexecutioninfo(info);
      const call = createMock<SUC<StepExecutionEndingRequest, ESR>>({
        request: req,
      });

      handler.finishStepExecution(call, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".finishScenarioExecution", () => {
    it("should finish scenario execution", (done) => {
      const req = new ScenarioExecutionEndingRequest();
      const info = new ExecutionInfo();

      info.setCurrentspec(new SpecInfo());
      info.setCurrentscenario(new ScenarioInfo());
      req.setCurrentexecutioninfo(info);
      const call = createMock<SUC<ScenarioExecutionEndingRequest, ESR>>({
        request: req,
      });

      handler.finishScenarioExecution(call, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".finishSpecExecution", () => {
    it("should finish spec execution", (done) => {
      const req = new SpecExecutionEndingRequest();
      const info = new ExecutionInfo();

      info.setCurrentspec(new SpecInfo());
      req.setCurrentexecutioninfo(info);
      const call = createMock<SUC<SpecExecutionEndingRequest, ESR>>({
        request: req,
      });

      handler.finishSpecExecution(call, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".finishExecution", () => {
    it("should finish suite execution", (done) => {
      const req = new ExecutionEndingRequest();
      const call = createMock<SUC<ExecutionEndingRequest, ESR>>({
        request: req,
      });

      handler.finishExecution(call, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".getGlobPstters", () => {
    it("should give all patterns", () => {
      Util.getImplDirs = jest.fn().mockReturnValue(["src", "tests"]);
      const call = createMock<SUC<Empty, IFGPRes>>();

      call.request = new Empty();
      handler.getGlobPatterns(
        call,
        (err: error, res: IFGPRes | null | undefined) => {
          expect(err).toBe(null);
          const patterns = res?.getGlobpatternsList();

          expect(patterns).toStrictEqual(["src/**/*.ts", "tests/**/*.ts"]);
        },
      );
    });
  });

  describe(".cacheFile", () => {
    it("should update the registry", () => {
      const req = new CFReq();

      req.setContent(text1);
      req.setFilepath("StepImpl.ts");
      req.setStatus(CFReq.FileStatus.OPENED);

      const call = createMock<SUC<CFReq, Empty>>({ request: req });

      handler.cacheFile(call, (err: error) => {
        expect(err).toBe(null);
        expect(registry.isImplemented("foo")).toBe(true);
      });
    });
  });

  describe(".getStepNames", () => {
    it("should give all the step names", () => {
      registry.getStepTexts = jest.fn().mockReturnValue(["foo"]);
      const call = createMock<SUC<SNsReq, SNsRes>>();

      handler.getStepNames(
        call,
        (err: error, res: SNsRes | null | undefined) => {
          expect(err).toBe(null);
          expect(res?.getStepsList()).toStrictEqual(["foo"]);
        },
      );
    });
  });

  describe(".getStepPositions", () => {
    it("should give step positions", () => {
      const req = new SPReq();

      req.setFilepath("StepImpl.ts");
      registry.getStepPositions = jest.fn().mockReturnValue([
        {
          stepValue: "foo",
          span: new Range(new Position(3, 5), new Position(8, 5)),
        },
      ]);
      const call = createMock<SUC<SPReq, SPRes>>({ request: req });

      handler.getStepPositions(
        call,
        (err: error, res: SPRes | null | undefined) => {
          expect(err).toBe(null);
          const positions = res?.getSteppositionsList() ?? [];

          expect(positions.length).toBe(1);
          expect(positions[0].getStepvalue()).toBe("foo");
          const span = positions[0].getSpan();

          expect(span?.getStart()).toBe(3);
          expect(span?.getStartchar()).toBe(5);
          expect(span?.getEnd()).toBe(8);
          expect(span?.getEndchar()).toBe(5);
        },
      );
    });
  });

  describe(".getImplementationFiles", () => {
    it("should give all the step impl files", () => {
      Util.getListOfFiles = jest.fn().mockReturnValue(["StepImpl.ts"]);
      const call = createMock<SUC<Empty, IFLRes>>();

      handler.getImplementationFiles(
        call,
        (err: error, res: IFLRes | null | undefined) => {
          expect(err).toBe(null);
          expect(res?.getImplementationfilepathsList()).toStrictEqual([
            "StepImpl.ts",
          ]);
        },
      );
    });
  });

  describe(".implementStub", () => {
    it("implement a stub", () => {
      Util.exists = jest.fn().mockReturnValue(true);
      Util.readFile = jest.fn().mockReturnValue(text1);
      const code =
        `@Step("bar")${EOL}public async foo() {${EOL}    console.log("Hello World");${EOL}}`;
      const req = new SICReq();

      req.setImplementationfilepath("StepImpl.ts");
      req.setCodesList([code]);
      const call = createMock<SUC<SICReq, FileDiff>>({ request: req });

      handler.implementStub(
        call,
        (err: error, res: FileDiff | null | undefined) => {
          expect(err).toBe(null);
          expect(res?.getFilepath()).toStrictEqual("StepImpl.ts");
          const expected =
            code
              .split(EOL)
              .map((p) => {
                return `\t${p}`;
              })
              .join(EOL) + EOL;

          expect(res?.getTextdiffsList()[0].getContent()).toBe(expected);
        },
      );
    });
  });

  describe(".validateStep", () => {
    it("should valiadate a step", () => {
      registry.isImplemented = jest.fn().mockReturnValue(true);

      const req = new SVReq();

      req.setSteptext("foo");
      const stepValue = new ProtoStepValue();

      stepValue.setStepvalue("foo");
      stepValue.setParameterizedstepvalue("foo");
      req.setStepvalue(stepValue);

      const call = createMock<SUC<SVReq, SVRes>>({ request: req });

      handler.validateStep(
        call,
        (err: error, res: SVRes | null | undefined) => {
          expect(err).toBe(null);
          expect(res?.getIsvalid()).toBe(true);
        },
      );
    });
  });

  describe(".refactor", () => {
    it("should refactor a step", () => {
      loader.loadStepsFromText("StepImpl.ts", text1);
      const oldStepValue = new ProtoStepValue();

      oldStepValue.setStepvalue("foo");
      oldStepValue.setParameterizedstepvalue("foo");
      const newStepValue = new ProtoStepValue();

      newStepValue.setStepvalue("bar");
      newStepValue.setParameterizedstepvalue("bar");
      const req = new RReq();

      req.setOldstepvalue(oldStepValue);
      req.setNewstepvalue(newStepValue);
      const call = createMock<SUC<RReq, RRes>>({ request: req });

      handler.refactor(call, (err: error, res: RRes | null | undefined) => {
        expect(err).toBe(null);
        expect(res?.getSuccess()).toBe(true);
      });
    });
  });

  describe(".getStepName", () => {
    it("should give a step info", () => {
      loader.loadStepsFromText("StepImpl.ts", text1);
      const req = new SNReq();

      req.setStepvalue("foo");
      const call = createMock<SUC<SNReq, SNRes>>({ request: req });

      handler.getStepName(call, (err: error, res: SNRes | null | undefined) => {
        expect(err).toBe(null);
        expect(res?.getFilename()).toBe("StepImpl.ts");
        expect(res?.getIssteppresent()).toBe(true);
      });
    });
  });

  describe(".killProcess", () => {
    it("should give a step info", (done) => {
      const s = new Server();

      handler = new RunnerServiceImpl();
      // mockProcessExit();
      const mockShutdown = jest.spyOn(s, "forceShutdown");
      const req = new KPReq();

      handler.kill(
        createMock<SUC<KPReq, Empty>>({ request: req }),
        (err: error) => {
          expect(err).toBe(null);
          setTimeout(() => {
            expect(mockShutdown).toHaveBeenCalled();
            done();
          }, 110);
        },
      );
    });
  });
});
