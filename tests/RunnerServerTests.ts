/* eslint-disable no-multi-spaces */
/* eslint-disable comma-spacing */

import { EOL } from "node:os";
import { Server, type StatusObject } from "@grpc/grpc-js";
import * as grpc from "@grpc/grpc-js";
import type { ServerErrorResponse } from "@grpc/grpc-js/build/src/server-call";
import { mockProcessExit } from "jest-mock-process";
import { start, stop } from "../src/GaugeRuntime";
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
  StepNamesRequest as SNsReq,
  type StepNamesResponse as SNsRes,
  StepPositionsRequest as SPReq,
  type StepPositionsResponse as SPRes,
  StepValidateRequest as SVReq,
  type StepValidateResponse as SVRes,
  ScenarioDataStoreInitRequest,
  ScenarioExecutionEndingRequest,
  ScenarioExecutionStartingRequest,
  ScenarioInfo,
  SpecDataStoreInitRequest,
  SpecExecutionEndingRequest,
  SpecExecutionStartingRequest,
  SpecInfo,
  StepExecutionEndingRequest,
  StepExecutionStartingRequest,
  StepInfo,
  SuiteDataStoreInitRequest,
} from "../src/gen/messages_pb";
import { RunnerClient } from "../src/gen/services_grpc_pb";
import { ProtoStepValue } from "../src/gen/spec_pb";
import StaticLoader from "../src/loaders/StaticLoader";
import { Position } from "../src/models/Position";
import { Range } from "../src/models/Range";
import registry from "../src/models/StepRegistry";
import { DataStoreFactory } from "../src/stores/DataStoreFactory";
import { Util } from "../src/utils/Util";

type error = Partial<StatusObject> | ServerErrorResponse | null;

const host = "127.0.0.1:55545";

describe("RunnerServer", () => {
  const text1 = `import { Step } from "gauge-ts";${EOL}export default class StepImpl {${EOL}    @Step("foo")${EOL}    public async foo() {${EOL}        console.log("Hello World");${EOL}    }${EOL}}`;

  let loader: StaticLoader;
  let client: RunnerClient;

  beforeEach(() => {
    jest.clearAllMocks();
    registry.clear();
  });

  beforeAll(() => {
    loader = new StaticLoader();
    jest.spyOn(loader, "loadImplementations").mockImplementation();
    start(host, loader);
    client = new RunnerClient(host, grpc.credentials.createInsecure());
  });

  afterAll(() => {
    stop();
  });

  describe(".initializeSuiteDataStore", () => {
    it("should initialise suite data store", (done) => {
      client.initializeScenarioDataStore(
        new ScenarioDataStoreInitRequest(),
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
        throw new Error("Error while initialising suite data store");
      });
      client.initializeSuiteDataStore(
        new SuiteDataStoreInitRequest(),
        (err: error) => {
          expect(err).not.toBeNull();
          done();
        },
      );
    });
  });

  describe(".initializeSpecDataStore", () => {
    it("should initialise spec data store", (done) => {
      client.initializeSpecDataStore(
        new SpecDataStoreInitRequest(),
        (err: error) => {
          expect(err).toBe(null);
          expect(DataStoreFactory.getSpecDataStore().length).toBe(0);
          done();
        },
      );
    });
  });

  describe(".initializeSpecDataStore", () => {
    it("should fail to initialise spec data store", (done) => {
      DataStoreFactory.getSpecDataStore = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      client.initializeSpecDataStore(
        new SpecDataStoreInitRequest(),
        (err: error) => {
          expect(err).not.toBe(null);
          done();
        },
      );
    });
  });

  describe(".initializeScenarioDataStore", () => {
    it("should initialise scenario data store", (done) => {
      client.initializeScenarioDataStore(
        new ScenarioDataStoreInitRequest(),
        (err: error) => {
          expect(err).toBe(null);
          expect(DataStoreFactory.getScenarioDataStore().length).toBe(0);
          done();
        },
      );
    });
  });

  describe(".initializeScenarioDataStore", () => {
    it("should fail to initialise scenario data store", (done) => {
      DataStoreFactory.getScenarioDataStore = jest
        .fn()
        .mockImplementation(() => {
          throw new Error();
        });

      client.initializeScenarioDataStore(
        new ScenarioDataStoreInitRequest(),
        (err: error) => {
          expect(err).not.toBe(null);
          done();
        },
      );
    });
  });

  describe(".startExecution", () => {
    it("should start suite execution", (done) => {
      client.startExecution(new ExecutionStartingRequest(), (err: error) => {
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
      client.startSpecExecution(req, (err: error) => {
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

      client.startScenarioExecution(req, (err: error) => {
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

      client.startStepExecution(req, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".executeStep", () => {
    it("should execute step", (done) => {
      const req = new ExecuteStepRequest();

      client.executeStep(req, (err: error) => {
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

      client.finishStepExecution(req, (err: error) => {
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

      client.finishScenarioExecution(req, (err: error) => {
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

      client.finishSpecExecution(req, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".finishExecution", () => {
    it("should finish suite execution", (done) => {
      const req = new ExecutionEndingRequest();

      client.finishExecution(req, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".getGlobPstters", () => {
    it("should give all patterns", (done) => {
      Util.getImplDirs = jest.fn().mockReturnValue(["src", "tests"]);
      client.getGlobPatterns(
        new Empty(),
        (err: error, res: IFGPRes | null | undefined) => {
          expect(err).toBe(null);
          const patterns = res?.getGlobpatternsList();
          expect(patterns).toStrictEqual(["src/**/*.ts", "tests/**/*.ts"]);
          done();
        },
      );
    });
  });

  describe(".cacheFile", () => {
    it("should update the registry", (done) => {
      const req = new CFReq();

      req.setContent(text1);
      req.setFilepath("StepImpl.ts");
      req.setStatus(CFReq.FileStatus.OPENED);

      client.cacheFile(req, (err: error) => {
        expect(err).toBe(null);
        expect(registry.isImplemented("foo")).toBe(true);
        done();
      });
    });
  });

  describe(".getStepNames", () => {
    it("should give all the step names", (done) => {
      registry.getStepTexts = jest.fn().mockReturnValue(["foo"]);
      client.getStepNames(
        new SNsReq(),
        (err: error, res: SNsRes | null | undefined) => {
          expect(err).toBe(null);
          expect(res?.getStepsList()).toStrictEqual(["foo"]);
          done();
        },
      );
    });
  });

  describe(".getStepPositions", () => {
    it("should give step positions", (done) => {
      const req = new SPReq();

      req.setFilepath("StepImpl.ts");
      registry.getStepPositions = jest.fn().mockReturnValue([
        {
          stepValue: "foo",
          span: new Range(new Position(3, 5), new Position(8, 5)),
        },
      ]);

      client.getStepPositions(
        req,
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
          done();
        },
      );
    });
  });

  describe(".getImplementationFiles", () => {
    it("should give all the step impl files", (done) => {
      Util.getListOfFiles = jest.fn().mockReturnValue(["StepImpl.ts"]);
      client.getImplementationFiles(
        new Empty(),
        (err: error, res: IFLRes | null | undefined) => {
          expect(err).toBe(null);
          expect(res?.getImplementationfilepathsList()).toStrictEqual([
            "StepImpl.ts",
          ]);
          done();
        },
      );
    });
  });

  describe(".implementStub", () => {
    it("implement a stub", (done) => {
      Util.exists = jest.fn().mockReturnValue(true);
      Util.readFile = jest.fn().mockReturnValue(text1);
      const code = `@Step("bar")${EOL}public async foo() {${EOL}    console.log("Hello World");${EOL}}`;
      const req = new SICReq();

      req.setImplementationfilepath("StepImpl.ts");
      req.setCodesList([code]);
      client.implementStub(
        req,
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
          done();
        },
      );
    });
  });

  describe(".validateStep", () => {
    it("should valiadate a step", (done) => {
      registry.isImplemented = jest.fn().mockReturnValue(true);

      const req = new SVReq();

      req.setSteptext("foo");
      const stepValue = new ProtoStepValue();

      stepValue.setStepvalue("foo");
      stepValue.setParameterizedstepvalue("foo");
      req.setStepvalue(stepValue);

      client.validateStep(req, (err: error, res: SVRes | null | undefined) => {
        expect(err).toBe(null);
        expect(res?.getIsvalid()).toBe(true);
        done();
      });
    });
  });

  describe(".refactor", () => {
    it("should refactor a step", (done) => {
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

      client.refactor(req, (err: error, res: RRes | null | undefined) => {
        expect(err).toBe(null);
        expect(res?.getSuccess()).toBe(true);
        done();
      });
    });
  });

  describe(".getStepName", () => {
    it("should give a step info", (done) => {
      loader.loadStepsFromText("StepImpl.ts", text1);
      const req = new SNReq();

      req.setStepvalue("foo");

      client.getStepName(req, (err: error, res: SNRes | null | undefined) => {
        expect(err).toBe(null);
        expect(res?.getFilename()).toBe("StepImpl.ts");
        expect(res?.getIssteppresent()).toBe(true);
        done();
      });
    });
  });

  xdescribe(".killProcess", () => {
    it("should kill server", (done) => {
      const s = new Server();

      mockProcessExit();
      const mockShutdown = jest.spyOn(s, "forceShutdown");
      const req = new KPReq();

      client.kill(req, (err: error) => {
        expect(err).toBe(null);
        setTimeout(() => {
          expect(mockShutdown).toHaveBeenCalled();
          done();
        }, 110);
      });
    });
  });
});
