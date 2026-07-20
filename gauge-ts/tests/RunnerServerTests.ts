/* eslint-disable no-multi-spaces */
/* eslint-disable comma-spacing */

import { EOL } from "node:os";
import { Server, type StatusObject } from "@grpc/grpc-js";
import * as grpc from "@grpc/grpc-js";
import type { ServerErrorResponse } from "@grpc/grpc-js/build/src/server-call";
import { mockProcessExit } from "jest-mock-process";
import { start, stop } from "../src/RunnerServer";
import RunnerServer from "../src/RunnerServer";
import {
  CacheFileRequest as CFReq,
  CacheFileRequest_FileStatus,
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
} from "../src/gen/messages";
import { RunnerClient } from "../src/gen/services";
import { ProtoStepValue } from "../src/gen/spec";
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
    start(host, new Server(), new RunnerServer(loader));
    client = new RunnerClient(host, grpc.credentials.createInsecure());
  });

  afterAll(() => {
    stop();
  });

  describe(".initializeSuiteDataStore", () => {
    it("should initialise suite data store", (done) => {
      client.initializeScenarioDataStore(
        ScenarioDataStoreInitRequest.create({}),
        (err: error, res: ESR | null | undefined) => {
          expect(err).toBe(null);
          expect(res?.executionResult?.failed).toBeFalsy();
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
        SuiteDataStoreInitRequest.create({}),
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
        SpecDataStoreInitRequest.create({}),
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
        SpecDataStoreInitRequest.create({}),
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
        ScenarioDataStoreInitRequest.create({}),
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
        ScenarioDataStoreInitRequest.create({}),
        (err: error) => {
          expect(err).not.toBe(null);
          done();
        },
      );
    });
  });

  describe(".startExecution", () => {
    it("should start suite execution", (done) => {
      client.startExecution(
        ExecutionStartingRequest.create({}),
        (err: error) => {
          expect(err).toBe(null);
          done();
        },
      );
    });
  });

  describe(".startSpecExecution", () => {
    it("should start spec execution", (done) => {
      const req = SpecExecutionStartingRequest.create({
        currentExecutionInfo: ExecutionInfo.create({
          currentSpec: SpecInfo.create({}),
        }),
      });

      client.startSpecExecution(req, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".startScenarioExecution", () => {
    it("should start scenario execution", (done) => {
      const req = ScenarioExecutionStartingRequest.create({
        currentExecutionInfo: ExecutionInfo.create({
          currentSpec: SpecInfo.create({}),
          currentScenario: ScenarioInfo.create({}),
        }),
      });

      client.startScenarioExecution(req, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".startStepExecution", () => {
    it("should start step execution", (done) => {
      const req = StepExecutionStartingRequest.create({
        currentExecutionInfo: ExecutionInfo.create({
          currentSpec: SpecInfo.create({}),
          currentScenario: ScenarioInfo.create({}),
          currentStep: StepInfo.create({}),
        }),
      });

      client.startStepExecution(req, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".executeStep", () => {
    it("should execute step", (done) => {
      const req = ExecuteStepRequest.create({});

      client.executeStep(req, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".finishStepExecution", () => {
    it("should finish step execution", (done) => {
      const req = StepExecutionEndingRequest.create({
        currentExecutionInfo: ExecutionInfo.create({
          currentSpec: SpecInfo.create({}),
          currentScenario: ScenarioInfo.create({}),
          currentStep: StepInfo.create({}),
        }),
      });

      client.finishStepExecution(req, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".finishScenarioExecution", () => {
    it("should finish scenario execution", (done) => {
      const req = ScenarioExecutionEndingRequest.create({
        currentExecutionInfo: ExecutionInfo.create({
          currentSpec: SpecInfo.create({}),
          currentScenario: ScenarioInfo.create({}),
        }),
      });

      client.finishScenarioExecution(req, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".finishSpecExecution", () => {
    it("should finish spec execution", (done) => {
      const req = SpecExecutionEndingRequest.create({
        currentExecutionInfo: ExecutionInfo.create({
          currentSpec: SpecInfo.create({}),
        }),
      });

      client.finishSpecExecution(req, (err: error) => {
        expect(err).toBe(null);
        done();
      });
    });
  });

  describe(".finishExecution", () => {
    it("should finish suite execution", (done) => {
      const req = ExecutionEndingRequest.create({});

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
        Empty.create({}),
        (err: error, res: IFGPRes | null | undefined) => {
          expect(err).toBe(null);
          const patterns = res?.globPatterns;
          expect(patterns).toStrictEqual(["src/**/*.ts", "tests/**/*.ts"]);
          done();
        },
      );
    });
  });

  describe(".cacheFile", () => {
    it("should update the registry", (done) => {
      const req = CFReq.create({
        content: text1,
        filePath: "StepImpl.ts",
        status: CacheFileRequest_FileStatus.OPENED,
      });

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
        SNsReq.create({}),
        (err: error, res: SNsRes | null | undefined) => {
          expect(err).toBe(null);
          expect(res?.steps).toStrictEqual(["foo"]);
          done();
        },
      );
    });
  });

  describe(".getStepPositions", () => {
    it("should give step positions", (done) => {
      const req = SPReq.create({ filePath: "StepImpl.ts" });

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
          const positions = res?.stepPositions ?? [];

          expect(positions.length).toBe(1);
          expect(positions[0].stepValue).toBe("foo");
          const span = positions[0].span;

          expect(span?.start).toBe("3");
          expect(span?.startChar).toBe("5");
          expect(span?.end).toBe("8");
          expect(span?.endChar).toBe("5");
          done();
        },
      );
    });
  });

  describe(".getImplementationFiles", () => {
    it("should give all the step impl files", (done) => {
      Util.getListOfFiles = jest.fn().mockReturnValue(["StepImpl.ts"]);
      client.getImplementationFiles(
        Empty.create({}),
        (err: error, res: IFLRes | null | undefined) => {
          expect(err).toBe(null);
          expect(res?.implementationFilePaths).toStrictEqual(["StepImpl.ts"]);
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
      const req = SICReq.create({
        implementationFilePath: "StepImpl.ts",
        codes: [code],
      });

      client.implementStub(
        req,
        (err: error, res: FileDiff | null | undefined) => {
          expect(err).toBe(null);
          expect(res?.filePath).toStrictEqual("StepImpl.ts");
          const expected =
            code
              .split(EOL)
              .map((p) => {
                return `\t${p}`;
              })
              .join(EOL) + EOL;

          expect(res?.textDiffs[0].content).toBe(expected);
          done();
        },
      );
    });
  });

  describe(".validateStep", () => {
    it("should valiadate a step", (done) => {
      registry.isImplemented = jest.fn().mockReturnValue(true);

      const req = SVReq.create({
        stepText: "foo",
        stepValue: ProtoStepValue.create({
          stepValue: "foo",
          parameterizedStepValue: "foo",
        }),
      });

      client.validateStep(req, (err: error, res: SVRes | null | undefined) => {
        expect(err).toBe(null);
        expect(res?.isValid).toBe(true);
        done();
      });
    });
  });

  describe(".refactor", () => {
    it("should refactor a step", (done) => {
      loader.loadStepsFromText("StepImpl.ts", text1);
      const req = RReq.create({
        oldStepValue: ProtoStepValue.create({
          stepValue: "foo",
          parameterizedStepValue: "foo",
        }),
        newStepValue: ProtoStepValue.create({
          stepValue: "bar",
          parameterizedStepValue: "bar",
        }),
      });

      client.refactor(req, (err: error, res: RRes | null | undefined) => {
        expect(err).toBe(null);
        expect(res?.success).toBe(true);
        done();
      });
    });
  });

  describe(".getStepName", () => {
    it("should give a step info", (done) => {
      loader.loadStepsFromText("StepImpl.ts", text1);
      const req = SNReq.create({ stepValue: "foo" });

      client.getStepName(req, (err: error, res: SNRes | null | undefined) => {
        expect(err).toBe(null);
        expect(res?.fileName).toBe("StepImpl.ts");
        expect(res?.isStepPresent).toBe(true);
        done();
      });
    });
  });

  xdescribe(".killProcess", () => {
    it("should kill server", (done) => {
      const s = new Server();

      mockProcessExit();
      const mockShutdown = jest.spyOn(s, "forceShutdown");
      const req = KPReq.create({});

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
