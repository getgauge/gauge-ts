// package: gauge.messages
// file: services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as services_pb from "./services_pb";
import * as messages_pb from "./messages_pb";

interface IRunnerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    validateStep: IRunnerService_IValidateStep;
    initializeSuiteDataStore: IRunnerService_IInitializeSuiteDataStore;
    startExecution: IRunnerService_IStartExecution;
    initializeSpecDataStore: IRunnerService_IInitializeSpecDataStore;
    startSpecExecution: IRunnerService_IStartSpecExecution;
    initializeScenarioDataStore: IRunnerService_IInitializeScenarioDataStore;
    startScenarioExecution: IRunnerService_IStartScenarioExecution;
    startStepExecution: IRunnerService_IStartStepExecution;
    executeStep: IRunnerService_IExecuteStep;
    finishStepExecution: IRunnerService_IFinishStepExecution;
    finishScenarioExecution: IRunnerService_IFinishScenarioExecution;
    finishSpecExecution: IRunnerService_IFinishSpecExecution;
    finishExecution: IRunnerService_IFinishExecution;
    cacheFile: IRunnerService_ICacheFile;
    getStepName: IRunnerService_IGetStepName;
    getGlobPatterns: IRunnerService_IGetGlobPatterns;
    getStepNames: IRunnerService_IGetStepNames;
    getStepPositions: IRunnerService_IGetStepPositions;
    getImplementationFiles: IRunnerService_IGetImplementationFiles;
    implementStub: IRunnerService_IImplementStub;
    refactor: IRunnerService_IRefactor;
    kill: IRunnerService_IKill;
}

interface IRunnerService_IValidateStep extends grpc.MethodDefinition<messages_pb.StepValidateRequest, messages_pb.StepValidateResponse> {
    path: "/gauge.messages.Runner/ValidateStep";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.StepValidateRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.StepValidateRequest>;
    responseSerialize: grpc.serialize<messages_pb.StepValidateResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.StepValidateResponse>;
}
interface IRunnerService_IInitializeSuiteDataStore extends grpc.MethodDefinition<messages_pb.SuiteDataStoreInitRequest, messages_pb.ExecutionStatusResponse> {
    path: "/gauge.messages.Runner/InitializeSuiteDataStore";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.SuiteDataStoreInitRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.SuiteDataStoreInitRequest>;
    responseSerialize: grpc.serialize<messages_pb.ExecutionStatusResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ExecutionStatusResponse>;
}
interface IRunnerService_IStartExecution extends grpc.MethodDefinition<messages_pb.ExecutionStartingRequest, messages_pb.ExecutionStatusResponse> {
    path: "/gauge.messages.Runner/StartExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.ExecutionStartingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.ExecutionStartingRequest>;
    responseSerialize: grpc.serialize<messages_pb.ExecutionStatusResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ExecutionStatusResponse>;
}
interface IRunnerService_IInitializeSpecDataStore extends grpc.MethodDefinition<messages_pb.SpecDataStoreInitRequest, messages_pb.ExecutionStatusResponse> {
    path: "/gauge.messages.Runner/InitializeSpecDataStore";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.SpecDataStoreInitRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.SpecDataStoreInitRequest>;
    responseSerialize: grpc.serialize<messages_pb.ExecutionStatusResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ExecutionStatusResponse>;
}
interface IRunnerService_IStartSpecExecution extends grpc.MethodDefinition<messages_pb.SpecExecutionStartingRequest, messages_pb.ExecutionStatusResponse> {
    path: "/gauge.messages.Runner/StartSpecExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.SpecExecutionStartingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.SpecExecutionStartingRequest>;
    responseSerialize: grpc.serialize<messages_pb.ExecutionStatusResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ExecutionStatusResponse>;
}
interface IRunnerService_IInitializeScenarioDataStore extends grpc.MethodDefinition<messages_pb.ScenarioDataStoreInitRequest, messages_pb.ExecutionStatusResponse> {
    path: "/gauge.messages.Runner/InitializeScenarioDataStore";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.ScenarioDataStoreInitRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.ScenarioDataStoreInitRequest>;
    responseSerialize: grpc.serialize<messages_pb.ExecutionStatusResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ExecutionStatusResponse>;
}
interface IRunnerService_IStartScenarioExecution extends grpc.MethodDefinition<messages_pb.ScenarioExecutionStartingRequest, messages_pb.ExecutionStatusResponse> {
    path: "/gauge.messages.Runner/StartScenarioExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.ScenarioExecutionStartingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.ScenarioExecutionStartingRequest>;
    responseSerialize: grpc.serialize<messages_pb.ExecutionStatusResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ExecutionStatusResponse>;
}
interface IRunnerService_IStartStepExecution extends grpc.MethodDefinition<messages_pb.StepExecutionStartingRequest, messages_pb.ExecutionStatusResponse> {
    path: "/gauge.messages.Runner/StartStepExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.StepExecutionStartingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.StepExecutionStartingRequest>;
    responseSerialize: grpc.serialize<messages_pb.ExecutionStatusResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ExecutionStatusResponse>;
}
interface IRunnerService_IExecuteStep extends grpc.MethodDefinition<messages_pb.ExecuteStepRequest, messages_pb.ExecutionStatusResponse> {
    path: "/gauge.messages.Runner/ExecuteStep";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.ExecuteStepRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.ExecuteStepRequest>;
    responseSerialize: grpc.serialize<messages_pb.ExecutionStatusResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ExecutionStatusResponse>;
}
interface IRunnerService_IFinishStepExecution extends grpc.MethodDefinition<messages_pb.StepExecutionEndingRequest, messages_pb.ExecutionStatusResponse> {
    path: "/gauge.messages.Runner/FinishStepExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.StepExecutionEndingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.StepExecutionEndingRequest>;
    responseSerialize: grpc.serialize<messages_pb.ExecutionStatusResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ExecutionStatusResponse>;
}
interface IRunnerService_IFinishScenarioExecution extends grpc.MethodDefinition<messages_pb.ScenarioExecutionEndingRequest, messages_pb.ExecutionStatusResponse> {
    path: "/gauge.messages.Runner/FinishScenarioExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.ScenarioExecutionEndingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.ScenarioExecutionEndingRequest>;
    responseSerialize: grpc.serialize<messages_pb.ExecutionStatusResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ExecutionStatusResponse>;
}
interface IRunnerService_IFinishSpecExecution extends grpc.MethodDefinition<messages_pb.SpecExecutionEndingRequest, messages_pb.ExecutionStatusResponse> {
    path: "/gauge.messages.Runner/FinishSpecExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.SpecExecutionEndingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.SpecExecutionEndingRequest>;
    responseSerialize: grpc.serialize<messages_pb.ExecutionStatusResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ExecutionStatusResponse>;
}
interface IRunnerService_IFinishExecution extends grpc.MethodDefinition<messages_pb.ExecutionEndingRequest, messages_pb.ExecutionStatusResponse> {
    path: "/gauge.messages.Runner/FinishExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.ExecutionEndingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.ExecutionEndingRequest>;
    responseSerialize: grpc.serialize<messages_pb.ExecutionStatusResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ExecutionStatusResponse>;
}
interface IRunnerService_ICacheFile extends grpc.MethodDefinition<messages_pb.CacheFileRequest, messages_pb.Empty> {
    path: "/gauge.messages.Runner/CacheFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.CacheFileRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.CacheFileRequest>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}
interface IRunnerService_IGetStepName extends grpc.MethodDefinition<messages_pb.StepNameRequest, messages_pb.StepNameResponse> {
    path: "/gauge.messages.Runner/GetStepName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.StepNameRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.StepNameRequest>;
    responseSerialize: grpc.serialize<messages_pb.StepNameResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.StepNameResponse>;
}
interface IRunnerService_IGetGlobPatterns extends grpc.MethodDefinition<messages_pb.Empty, messages_pb.ImplementationFileGlobPatternResponse> {
    path: "/gauge.messages.Runner/GetGlobPatterns";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.Empty>;
    requestDeserialize: grpc.deserialize<messages_pb.Empty>;
    responseSerialize: grpc.serialize<messages_pb.ImplementationFileGlobPatternResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ImplementationFileGlobPatternResponse>;
}
interface IRunnerService_IGetStepNames extends grpc.MethodDefinition<messages_pb.StepNamesRequest, messages_pb.StepNamesResponse> {
    path: "/gauge.messages.Runner/GetStepNames";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.StepNamesRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.StepNamesRequest>;
    responseSerialize: grpc.serialize<messages_pb.StepNamesResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.StepNamesResponse>;
}
interface IRunnerService_IGetStepPositions extends grpc.MethodDefinition<messages_pb.StepPositionsRequest, messages_pb.StepPositionsResponse> {
    path: "/gauge.messages.Runner/GetStepPositions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.StepPositionsRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.StepPositionsRequest>;
    responseSerialize: grpc.serialize<messages_pb.StepPositionsResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.StepPositionsResponse>;
}
interface IRunnerService_IGetImplementationFiles extends grpc.MethodDefinition<messages_pb.Empty, messages_pb.ImplementationFileListResponse> {
    path: "/gauge.messages.Runner/GetImplementationFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.Empty>;
    requestDeserialize: grpc.deserialize<messages_pb.Empty>;
    responseSerialize: grpc.serialize<messages_pb.ImplementationFileListResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.ImplementationFileListResponse>;
}
interface IRunnerService_IImplementStub extends grpc.MethodDefinition<messages_pb.StubImplementationCodeRequest, messages_pb.FileDiff> {
    path: "/gauge.messages.Runner/ImplementStub";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.StubImplementationCodeRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.StubImplementationCodeRequest>;
    responseSerialize: grpc.serialize<messages_pb.FileDiff>;
    responseDeserialize: grpc.deserialize<messages_pb.FileDiff>;
}
interface IRunnerService_IRefactor extends grpc.MethodDefinition<messages_pb.RefactorRequest, messages_pb.RefactorResponse> {
    path: "/gauge.messages.Runner/Refactor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.RefactorRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.RefactorRequest>;
    responseSerialize: grpc.serialize<messages_pb.RefactorResponse>;
    responseDeserialize: grpc.deserialize<messages_pb.RefactorResponse>;
}
interface IRunnerService_IKill extends grpc.MethodDefinition<messages_pb.KillProcessRequest, messages_pb.Empty> {
    path: "/gauge.messages.Runner/Kill";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.KillProcessRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.KillProcessRequest>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}

export const RunnerService: IRunnerService;

export interface IRunnerServer extends grpc.UntypedServiceImplementation {
    validateStep: grpc.handleUnaryCall<messages_pb.StepValidateRequest, messages_pb.StepValidateResponse>;
    initializeSuiteDataStore: grpc.handleUnaryCall<messages_pb.SuiteDataStoreInitRequest, messages_pb.ExecutionStatusResponse>;
    startExecution: grpc.handleUnaryCall<messages_pb.ExecutionStartingRequest, messages_pb.ExecutionStatusResponse>;
    initializeSpecDataStore: grpc.handleUnaryCall<messages_pb.SpecDataStoreInitRequest, messages_pb.ExecutionStatusResponse>;
    startSpecExecution: grpc.handleUnaryCall<messages_pb.SpecExecutionStartingRequest, messages_pb.ExecutionStatusResponse>;
    initializeScenarioDataStore: grpc.handleUnaryCall<messages_pb.ScenarioDataStoreInitRequest, messages_pb.ExecutionStatusResponse>;
    startScenarioExecution: grpc.handleUnaryCall<messages_pb.ScenarioExecutionStartingRequest, messages_pb.ExecutionStatusResponse>;
    startStepExecution: grpc.handleUnaryCall<messages_pb.StepExecutionStartingRequest, messages_pb.ExecutionStatusResponse>;
    executeStep: grpc.handleUnaryCall<messages_pb.ExecuteStepRequest, messages_pb.ExecutionStatusResponse>;
    finishStepExecution: grpc.handleUnaryCall<messages_pb.StepExecutionEndingRequest, messages_pb.ExecutionStatusResponse>;
    finishScenarioExecution: grpc.handleUnaryCall<messages_pb.ScenarioExecutionEndingRequest, messages_pb.ExecutionStatusResponse>;
    finishSpecExecution: grpc.handleUnaryCall<messages_pb.SpecExecutionEndingRequest, messages_pb.ExecutionStatusResponse>;
    finishExecution: grpc.handleUnaryCall<messages_pb.ExecutionEndingRequest, messages_pb.ExecutionStatusResponse>;
    cacheFile: grpc.handleUnaryCall<messages_pb.CacheFileRequest, messages_pb.Empty>;
    getStepName: grpc.handleUnaryCall<messages_pb.StepNameRequest, messages_pb.StepNameResponse>;
    getGlobPatterns: grpc.handleUnaryCall<messages_pb.Empty, messages_pb.ImplementationFileGlobPatternResponse>;
    getStepNames: grpc.handleUnaryCall<messages_pb.StepNamesRequest, messages_pb.StepNamesResponse>;
    getStepPositions: grpc.handleUnaryCall<messages_pb.StepPositionsRequest, messages_pb.StepPositionsResponse>;
    getImplementationFiles: grpc.handleUnaryCall<messages_pb.Empty, messages_pb.ImplementationFileListResponse>;
    implementStub: grpc.handleUnaryCall<messages_pb.StubImplementationCodeRequest, messages_pb.FileDiff>;
    refactor: grpc.handleUnaryCall<messages_pb.RefactorRequest, messages_pb.RefactorResponse>;
    kill: grpc.handleUnaryCall<messages_pb.KillProcessRequest, messages_pb.Empty>;
}

export interface IRunnerClient {
    validateStep(request: messages_pb.StepValidateRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.StepValidateResponse) => void): grpc.ClientUnaryCall;
    validateStep(request: messages_pb.StepValidateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.StepValidateResponse) => void): grpc.ClientUnaryCall;
    validateStep(request: messages_pb.StepValidateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.StepValidateResponse) => void): grpc.ClientUnaryCall;
    initializeSuiteDataStore(request: messages_pb.SuiteDataStoreInitRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    initializeSuiteDataStore(request: messages_pb.SuiteDataStoreInitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    initializeSuiteDataStore(request: messages_pb.SuiteDataStoreInitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    startExecution(request: messages_pb.ExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    startExecution(request: messages_pb.ExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    startExecution(request: messages_pb.ExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    initializeSpecDataStore(request: messages_pb.SpecDataStoreInitRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    initializeSpecDataStore(request: messages_pb.SpecDataStoreInitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    initializeSpecDataStore(request: messages_pb.SpecDataStoreInitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    startSpecExecution(request: messages_pb.SpecExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    startSpecExecution(request: messages_pb.SpecExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    startSpecExecution(request: messages_pb.SpecExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    initializeScenarioDataStore(request: messages_pb.ScenarioDataStoreInitRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    initializeScenarioDataStore(request: messages_pb.ScenarioDataStoreInitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    initializeScenarioDataStore(request: messages_pb.ScenarioDataStoreInitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    startScenarioExecution(request: messages_pb.ScenarioExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    startScenarioExecution(request: messages_pb.ScenarioExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    startScenarioExecution(request: messages_pb.ScenarioExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    startStepExecution(request: messages_pb.StepExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    startStepExecution(request: messages_pb.StepExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    startStepExecution(request: messages_pb.StepExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    executeStep(request: messages_pb.ExecuteStepRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    executeStep(request: messages_pb.ExecuteStepRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    executeStep(request: messages_pb.ExecuteStepRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    finishStepExecution(request: messages_pb.StepExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    finishStepExecution(request: messages_pb.StepExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    finishStepExecution(request: messages_pb.StepExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    finishScenarioExecution(request: messages_pb.ScenarioExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    finishScenarioExecution(request: messages_pb.ScenarioExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    finishScenarioExecution(request: messages_pb.ScenarioExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    finishSpecExecution(request: messages_pb.SpecExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    finishSpecExecution(request: messages_pb.SpecExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    finishSpecExecution(request: messages_pb.SpecExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    finishExecution(request: messages_pb.ExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    finishExecution(request: messages_pb.ExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    finishExecution(request: messages_pb.ExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    cacheFile(request: messages_pb.CacheFileRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    cacheFile(request: messages_pb.CacheFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    cacheFile(request: messages_pb.CacheFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    getStepName(request: messages_pb.StepNameRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.StepNameResponse) => void): grpc.ClientUnaryCall;
    getStepName(request: messages_pb.StepNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.StepNameResponse) => void): grpc.ClientUnaryCall;
    getStepName(request: messages_pb.StepNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.StepNameResponse) => void): grpc.ClientUnaryCall;
    getGlobPatterns(request: messages_pb.Empty, callback: (error: grpc.ServiceError | null, response: messages_pb.ImplementationFileGlobPatternResponse) => void): grpc.ClientUnaryCall;
    getGlobPatterns(request: messages_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ImplementationFileGlobPatternResponse) => void): grpc.ClientUnaryCall;
    getGlobPatterns(request: messages_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ImplementationFileGlobPatternResponse) => void): grpc.ClientUnaryCall;
    getStepNames(request: messages_pb.StepNamesRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.StepNamesResponse) => void): grpc.ClientUnaryCall;
    getStepNames(request: messages_pb.StepNamesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.StepNamesResponse) => void): grpc.ClientUnaryCall;
    getStepNames(request: messages_pb.StepNamesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.StepNamesResponse) => void): grpc.ClientUnaryCall;
    getStepPositions(request: messages_pb.StepPositionsRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.StepPositionsResponse) => void): grpc.ClientUnaryCall;
    getStepPositions(request: messages_pb.StepPositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.StepPositionsResponse) => void): grpc.ClientUnaryCall;
    getStepPositions(request: messages_pb.StepPositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.StepPositionsResponse) => void): grpc.ClientUnaryCall;
    getImplementationFiles(request: messages_pb.Empty, callback: (error: grpc.ServiceError | null, response: messages_pb.ImplementationFileListResponse) => void): grpc.ClientUnaryCall;
    getImplementationFiles(request: messages_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ImplementationFileListResponse) => void): grpc.ClientUnaryCall;
    getImplementationFiles(request: messages_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ImplementationFileListResponse) => void): grpc.ClientUnaryCall;
    implementStub(request: messages_pb.StubImplementationCodeRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.FileDiff) => void): grpc.ClientUnaryCall;
    implementStub(request: messages_pb.StubImplementationCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.FileDiff) => void): grpc.ClientUnaryCall;
    implementStub(request: messages_pb.StubImplementationCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.FileDiff) => void): grpc.ClientUnaryCall;
    refactor(request: messages_pb.RefactorRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.RefactorResponse) => void): grpc.ClientUnaryCall;
    refactor(request: messages_pb.RefactorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.RefactorResponse) => void): grpc.ClientUnaryCall;
    refactor(request: messages_pb.RefactorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.RefactorResponse) => void): grpc.ClientUnaryCall;
    kill(request: messages_pb.KillProcessRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    kill(request: messages_pb.KillProcessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    kill(request: messages_pb.KillProcessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class RunnerClient extends grpc.Client implements IRunnerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public validateStep(request: messages_pb.StepValidateRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.StepValidateResponse) => void): grpc.ClientUnaryCall;
    public validateStep(request: messages_pb.StepValidateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.StepValidateResponse) => void): grpc.ClientUnaryCall;
    public validateStep(request: messages_pb.StepValidateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.StepValidateResponse) => void): grpc.ClientUnaryCall;
    public initializeSuiteDataStore(request: messages_pb.SuiteDataStoreInitRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public initializeSuiteDataStore(request: messages_pb.SuiteDataStoreInitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public initializeSuiteDataStore(request: messages_pb.SuiteDataStoreInitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public startExecution(request: messages_pb.ExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public startExecution(request: messages_pb.ExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public startExecution(request: messages_pb.ExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public initializeSpecDataStore(request: messages_pb.SpecDataStoreInitRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public initializeSpecDataStore(request: messages_pb.SpecDataStoreInitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public initializeSpecDataStore(request: messages_pb.SpecDataStoreInitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public startSpecExecution(request: messages_pb.SpecExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public startSpecExecution(request: messages_pb.SpecExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public startSpecExecution(request: messages_pb.SpecExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public initializeScenarioDataStore(request: messages_pb.ScenarioDataStoreInitRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public initializeScenarioDataStore(request: messages_pb.ScenarioDataStoreInitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public initializeScenarioDataStore(request: messages_pb.ScenarioDataStoreInitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public startScenarioExecution(request: messages_pb.ScenarioExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public startScenarioExecution(request: messages_pb.ScenarioExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public startScenarioExecution(request: messages_pb.ScenarioExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public startStepExecution(request: messages_pb.StepExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public startStepExecution(request: messages_pb.StepExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public startStepExecution(request: messages_pb.StepExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public executeStep(request: messages_pb.ExecuteStepRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public executeStep(request: messages_pb.ExecuteStepRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public executeStep(request: messages_pb.ExecuteStepRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public finishStepExecution(request: messages_pb.StepExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public finishStepExecution(request: messages_pb.StepExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public finishStepExecution(request: messages_pb.StepExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public finishScenarioExecution(request: messages_pb.ScenarioExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public finishScenarioExecution(request: messages_pb.ScenarioExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public finishScenarioExecution(request: messages_pb.ScenarioExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public finishSpecExecution(request: messages_pb.SpecExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public finishSpecExecution(request: messages_pb.SpecExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public finishSpecExecution(request: messages_pb.SpecExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public finishExecution(request: messages_pb.ExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public finishExecution(request: messages_pb.ExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public finishExecution(request: messages_pb.ExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ExecutionStatusResponse) => void): grpc.ClientUnaryCall;
    public cacheFile(request: messages_pb.CacheFileRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public cacheFile(request: messages_pb.CacheFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public cacheFile(request: messages_pb.CacheFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public getStepName(request: messages_pb.StepNameRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.StepNameResponse) => void): grpc.ClientUnaryCall;
    public getStepName(request: messages_pb.StepNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.StepNameResponse) => void): grpc.ClientUnaryCall;
    public getStepName(request: messages_pb.StepNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.StepNameResponse) => void): grpc.ClientUnaryCall;
    public getGlobPatterns(request: messages_pb.Empty, callback: (error: grpc.ServiceError | null, response: messages_pb.ImplementationFileGlobPatternResponse) => void): grpc.ClientUnaryCall;
    public getGlobPatterns(request: messages_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ImplementationFileGlobPatternResponse) => void): grpc.ClientUnaryCall;
    public getGlobPatterns(request: messages_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ImplementationFileGlobPatternResponse) => void): grpc.ClientUnaryCall;
    public getStepNames(request: messages_pb.StepNamesRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.StepNamesResponse) => void): grpc.ClientUnaryCall;
    public getStepNames(request: messages_pb.StepNamesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.StepNamesResponse) => void): grpc.ClientUnaryCall;
    public getStepNames(request: messages_pb.StepNamesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.StepNamesResponse) => void): grpc.ClientUnaryCall;
    public getStepPositions(request: messages_pb.StepPositionsRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.StepPositionsResponse) => void): grpc.ClientUnaryCall;
    public getStepPositions(request: messages_pb.StepPositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.StepPositionsResponse) => void): grpc.ClientUnaryCall;
    public getStepPositions(request: messages_pb.StepPositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.StepPositionsResponse) => void): grpc.ClientUnaryCall;
    public getImplementationFiles(request: messages_pb.Empty, callback: (error: grpc.ServiceError | null, response: messages_pb.ImplementationFileListResponse) => void): grpc.ClientUnaryCall;
    public getImplementationFiles(request: messages_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.ImplementationFileListResponse) => void): grpc.ClientUnaryCall;
    public getImplementationFiles(request: messages_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.ImplementationFileListResponse) => void): grpc.ClientUnaryCall;
    public implementStub(request: messages_pb.StubImplementationCodeRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.FileDiff) => void): grpc.ClientUnaryCall;
    public implementStub(request: messages_pb.StubImplementationCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.FileDiff) => void): grpc.ClientUnaryCall;
    public implementStub(request: messages_pb.StubImplementationCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.FileDiff) => void): grpc.ClientUnaryCall;
    public refactor(request: messages_pb.RefactorRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.RefactorResponse) => void): grpc.ClientUnaryCall;
    public refactor(request: messages_pb.RefactorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.RefactorResponse) => void): grpc.ClientUnaryCall;
    public refactor(request: messages_pb.RefactorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.RefactorResponse) => void): grpc.ClientUnaryCall;
    public kill(request: messages_pb.KillProcessRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public kill(request: messages_pb.KillProcessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public kill(request: messages_pb.KillProcessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
}

interface IReporterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    notifyExecutionStarting: IReporterService_INotifyExecutionStarting;
    notifySpecExecutionStarting: IReporterService_INotifySpecExecutionStarting;
    notifyScenarioExecutionStarting: IReporterService_INotifyScenarioExecutionStarting;
    notifyStepExecutionStarting: IReporterService_INotifyStepExecutionStarting;
    notifyStepExecutionEnding: IReporterService_INotifyStepExecutionEnding;
    notifyScenarioExecutionEnding: IReporterService_INotifyScenarioExecutionEnding;
    notifySpecExecutionEnding: IReporterService_INotifySpecExecutionEnding;
    notifyExecutionEnding: IReporterService_INotifyExecutionEnding;
    notifySuiteResult: IReporterService_INotifySuiteResult;
    kill: IReporterService_IKill;
}

interface IReporterService_INotifyExecutionStarting extends grpc.MethodDefinition<messages_pb.ExecutionStartingRequest, messages_pb.Empty> {
    path: "/gauge.messages.Reporter/NotifyExecutionStarting";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.ExecutionStartingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.ExecutionStartingRequest>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}
interface IReporterService_INotifySpecExecutionStarting extends grpc.MethodDefinition<messages_pb.SpecExecutionStartingRequest, messages_pb.Empty> {
    path: "/gauge.messages.Reporter/NotifySpecExecutionStarting";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.SpecExecutionStartingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.SpecExecutionStartingRequest>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}
interface IReporterService_INotifyScenarioExecutionStarting extends grpc.MethodDefinition<messages_pb.ScenarioExecutionStartingRequest, messages_pb.Empty> {
    path: "/gauge.messages.Reporter/NotifyScenarioExecutionStarting";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.ScenarioExecutionStartingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.ScenarioExecutionStartingRequest>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}
interface IReporterService_INotifyStepExecutionStarting extends grpc.MethodDefinition<messages_pb.StepExecutionStartingRequest, messages_pb.Empty> {
    path: "/gauge.messages.Reporter/NotifyStepExecutionStarting";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.StepExecutionStartingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.StepExecutionStartingRequest>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}
interface IReporterService_INotifyStepExecutionEnding extends grpc.MethodDefinition<messages_pb.StepExecutionEndingRequest, messages_pb.Empty> {
    path: "/gauge.messages.Reporter/NotifyStepExecutionEnding";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.StepExecutionEndingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.StepExecutionEndingRequest>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}
interface IReporterService_INotifyScenarioExecutionEnding extends grpc.MethodDefinition<messages_pb.ScenarioExecutionEndingRequest, messages_pb.Empty> {
    path: "/gauge.messages.Reporter/NotifyScenarioExecutionEnding";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.ScenarioExecutionEndingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.ScenarioExecutionEndingRequest>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}
interface IReporterService_INotifySpecExecutionEnding extends grpc.MethodDefinition<messages_pb.SpecExecutionEndingRequest, messages_pb.Empty> {
    path: "/gauge.messages.Reporter/NotifySpecExecutionEnding";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.SpecExecutionEndingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.SpecExecutionEndingRequest>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}
interface IReporterService_INotifyExecutionEnding extends grpc.MethodDefinition<messages_pb.ExecutionEndingRequest, messages_pb.Empty> {
    path: "/gauge.messages.Reporter/NotifyExecutionEnding";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.ExecutionEndingRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.ExecutionEndingRequest>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}
interface IReporterService_INotifySuiteResult extends grpc.MethodDefinition<messages_pb.SuiteExecutionResult, messages_pb.Empty> {
    path: "/gauge.messages.Reporter/NotifySuiteResult";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.SuiteExecutionResult>;
    requestDeserialize: grpc.deserialize<messages_pb.SuiteExecutionResult>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}
interface IReporterService_IKill extends grpc.MethodDefinition<messages_pb.KillProcessRequest, messages_pb.Empty> {
    path: "/gauge.messages.Reporter/Kill";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.KillProcessRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.KillProcessRequest>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}

export const ReporterService: IReporterService;

export interface IReporterServer extends grpc.UntypedServiceImplementation {
    notifyExecutionStarting: grpc.handleUnaryCall<messages_pb.ExecutionStartingRequest, messages_pb.Empty>;
    notifySpecExecutionStarting: grpc.handleUnaryCall<messages_pb.SpecExecutionStartingRequest, messages_pb.Empty>;
    notifyScenarioExecutionStarting: grpc.handleUnaryCall<messages_pb.ScenarioExecutionStartingRequest, messages_pb.Empty>;
    notifyStepExecutionStarting: grpc.handleUnaryCall<messages_pb.StepExecutionStartingRequest, messages_pb.Empty>;
    notifyStepExecutionEnding: grpc.handleUnaryCall<messages_pb.StepExecutionEndingRequest, messages_pb.Empty>;
    notifyScenarioExecutionEnding: grpc.handleUnaryCall<messages_pb.ScenarioExecutionEndingRequest, messages_pb.Empty>;
    notifySpecExecutionEnding: grpc.handleUnaryCall<messages_pb.SpecExecutionEndingRequest, messages_pb.Empty>;
    notifyExecutionEnding: grpc.handleUnaryCall<messages_pb.ExecutionEndingRequest, messages_pb.Empty>;
    notifySuiteResult: grpc.handleUnaryCall<messages_pb.SuiteExecutionResult, messages_pb.Empty>;
    kill: grpc.handleUnaryCall<messages_pb.KillProcessRequest, messages_pb.Empty>;
}

export interface IReporterClient {
    notifyExecutionStarting(request: messages_pb.ExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyExecutionStarting(request: messages_pb.ExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyExecutionStarting(request: messages_pb.ExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifySpecExecutionStarting(request: messages_pb.SpecExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifySpecExecutionStarting(request: messages_pb.SpecExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifySpecExecutionStarting(request: messages_pb.SpecExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyScenarioExecutionStarting(request: messages_pb.ScenarioExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyScenarioExecutionStarting(request: messages_pb.ScenarioExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyScenarioExecutionStarting(request: messages_pb.ScenarioExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyStepExecutionStarting(request: messages_pb.StepExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyStepExecutionStarting(request: messages_pb.StepExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyStepExecutionStarting(request: messages_pb.StepExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyStepExecutionEnding(request: messages_pb.StepExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyStepExecutionEnding(request: messages_pb.StepExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyStepExecutionEnding(request: messages_pb.StepExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyScenarioExecutionEnding(request: messages_pb.ScenarioExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyScenarioExecutionEnding(request: messages_pb.ScenarioExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyScenarioExecutionEnding(request: messages_pb.ScenarioExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifySpecExecutionEnding(request: messages_pb.SpecExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifySpecExecutionEnding(request: messages_pb.SpecExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifySpecExecutionEnding(request: messages_pb.SpecExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyExecutionEnding(request: messages_pb.ExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyExecutionEnding(request: messages_pb.ExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifyExecutionEnding(request: messages_pb.ExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifySuiteResult(request: messages_pb.SuiteExecutionResult, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifySuiteResult(request: messages_pb.SuiteExecutionResult, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    notifySuiteResult(request: messages_pb.SuiteExecutionResult, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    kill(request: messages_pb.KillProcessRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    kill(request: messages_pb.KillProcessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    kill(request: messages_pb.KillProcessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ReporterClient extends grpc.Client implements IReporterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public notifyExecutionStarting(request: messages_pb.ExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyExecutionStarting(request: messages_pb.ExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyExecutionStarting(request: messages_pb.ExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifySpecExecutionStarting(request: messages_pb.SpecExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifySpecExecutionStarting(request: messages_pb.SpecExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifySpecExecutionStarting(request: messages_pb.SpecExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyScenarioExecutionStarting(request: messages_pb.ScenarioExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyScenarioExecutionStarting(request: messages_pb.ScenarioExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyScenarioExecutionStarting(request: messages_pb.ScenarioExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyStepExecutionStarting(request: messages_pb.StepExecutionStartingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyStepExecutionStarting(request: messages_pb.StepExecutionStartingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyStepExecutionStarting(request: messages_pb.StepExecutionStartingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyStepExecutionEnding(request: messages_pb.StepExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyStepExecutionEnding(request: messages_pb.StepExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyStepExecutionEnding(request: messages_pb.StepExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyScenarioExecutionEnding(request: messages_pb.ScenarioExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyScenarioExecutionEnding(request: messages_pb.ScenarioExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyScenarioExecutionEnding(request: messages_pb.ScenarioExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifySpecExecutionEnding(request: messages_pb.SpecExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifySpecExecutionEnding(request: messages_pb.SpecExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifySpecExecutionEnding(request: messages_pb.SpecExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyExecutionEnding(request: messages_pb.ExecutionEndingRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyExecutionEnding(request: messages_pb.ExecutionEndingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifyExecutionEnding(request: messages_pb.ExecutionEndingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifySuiteResult(request: messages_pb.SuiteExecutionResult, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifySuiteResult(request: messages_pb.SuiteExecutionResult, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public notifySuiteResult(request: messages_pb.SuiteExecutionResult, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public kill(request: messages_pb.KillProcessRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public kill(request: messages_pb.KillProcessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public kill(request: messages_pb.KillProcessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
}

interface IDocumenterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    generateDocs: IDocumenterService_IGenerateDocs;
    kill: IDocumenterService_IKill;
}

interface IDocumenterService_IGenerateDocs extends grpc.MethodDefinition<messages_pb.SpecDetails, messages_pb.Empty> {
    path: "/gauge.messages.Documenter/GenerateDocs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.SpecDetails>;
    requestDeserialize: grpc.deserialize<messages_pb.SpecDetails>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}
interface IDocumenterService_IKill extends grpc.MethodDefinition<messages_pb.KillProcessRequest, messages_pb.Empty> {
    path: "/gauge.messages.Documenter/Kill";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.KillProcessRequest>;
    requestDeserialize: grpc.deserialize<messages_pb.KillProcessRequest>;
    responseSerialize: grpc.serialize<messages_pb.Empty>;
    responseDeserialize: grpc.deserialize<messages_pb.Empty>;
}

export const DocumenterService: IDocumenterService;

export interface IDocumenterServer extends grpc.UntypedServiceImplementation {
    generateDocs: grpc.handleUnaryCall<messages_pb.SpecDetails, messages_pb.Empty>;
    kill: grpc.handleUnaryCall<messages_pb.KillProcessRequest, messages_pb.Empty>;
}

export interface IDocumenterClient {
    generateDocs(request: messages_pb.SpecDetails, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    generateDocs(request: messages_pb.SpecDetails, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    generateDocs(request: messages_pb.SpecDetails, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    kill(request: messages_pb.KillProcessRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    kill(request: messages_pb.KillProcessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    kill(request: messages_pb.KillProcessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class DocumenterClient extends grpc.Client implements IDocumenterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public generateDocs(request: messages_pb.SpecDetails, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public generateDocs(request: messages_pb.SpecDetails, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public generateDocs(request: messages_pb.SpecDetails, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public kill(request: messages_pb.KillProcessRequest, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public kill(request: messages_pb.KillProcessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
    public kill(request: messages_pb.KillProcessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.Empty) => void): grpc.ClientUnaryCall;
}
