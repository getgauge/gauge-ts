// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ----------------------------------------------------------------
//  Copyright (c) ThoughtWorks, Inc.
//  Licensed under the Apache License, Version 2.0
//  See LICENSE in the project root for license information.
// ----------------------------------------------------------------
//
'use strict';
var grpc = require('@grpc/grpc-js');
var messages_pb = require('./messages_pb.js');

function serialize_gauge_messages_CacheFileRequest(arg) {
  if (!(arg instanceof messages_pb.CacheFileRequest)) {
    throw new Error('Expected argument of type gauge.messages.CacheFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_CacheFileRequest(buffer_arg) {
  return messages_pb.CacheFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_Empty(arg) {
  if (!(arg instanceof messages_pb.Empty)) {
    throw new Error('Expected argument of type gauge.messages.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_Empty(buffer_arg) {
  return messages_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_ExecuteStepRequest(arg) {
  if (!(arg instanceof messages_pb.ExecuteStepRequest)) {
    throw new Error('Expected argument of type gauge.messages.ExecuteStepRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_ExecuteStepRequest(buffer_arg) {
  return messages_pb.ExecuteStepRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_ExecutionEndingRequest(arg) {
  if (!(arg instanceof messages_pb.ExecutionEndingRequest)) {
    throw new Error('Expected argument of type gauge.messages.ExecutionEndingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_ExecutionEndingRequest(buffer_arg) {
  return messages_pb.ExecutionEndingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_ExecutionStartingRequest(arg) {
  if (!(arg instanceof messages_pb.ExecutionStartingRequest)) {
    throw new Error('Expected argument of type gauge.messages.ExecutionStartingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_ExecutionStartingRequest(buffer_arg) {
  return messages_pb.ExecutionStartingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_ExecutionStatusResponse(arg) {
  if (!(arg instanceof messages_pb.ExecutionStatusResponse)) {
    throw new Error('Expected argument of type gauge.messages.ExecutionStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_ExecutionStatusResponse(buffer_arg) {
  return messages_pb.ExecutionStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_FileDiff(arg) {
  if (!(arg instanceof messages_pb.FileDiff)) {
    throw new Error('Expected argument of type gauge.messages.FileDiff');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_FileDiff(buffer_arg) {
  return messages_pb.FileDiff.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_ImplementationFileGlobPatternResponse(arg) {
  if (!(arg instanceof messages_pb.ImplementationFileGlobPatternResponse)) {
    throw new Error('Expected argument of type gauge.messages.ImplementationFileGlobPatternResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_ImplementationFileGlobPatternResponse(buffer_arg) {
  return messages_pb.ImplementationFileGlobPatternResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_ImplementationFileListResponse(arg) {
  if (!(arg instanceof messages_pb.ImplementationFileListResponse)) {
    throw new Error('Expected argument of type gauge.messages.ImplementationFileListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_ImplementationFileListResponse(buffer_arg) {
  return messages_pb.ImplementationFileListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_KillProcessRequest(arg) {
  if (!(arg instanceof messages_pb.KillProcessRequest)) {
    throw new Error('Expected argument of type gauge.messages.KillProcessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_KillProcessRequest(buffer_arg) {
  return messages_pb.KillProcessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_RefactorRequest(arg) {
  if (!(arg instanceof messages_pb.RefactorRequest)) {
    throw new Error('Expected argument of type gauge.messages.RefactorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_RefactorRequest(buffer_arg) {
  return messages_pb.RefactorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_RefactorResponse(arg) {
  if (!(arg instanceof messages_pb.RefactorResponse)) {
    throw new Error('Expected argument of type gauge.messages.RefactorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_RefactorResponse(buffer_arg) {
  return messages_pb.RefactorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_ScenarioDataStoreInitRequest(arg) {
  if (!(arg instanceof messages_pb.ScenarioDataStoreInitRequest)) {
    throw new Error('Expected argument of type gauge.messages.ScenarioDataStoreInitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_ScenarioDataStoreInitRequest(buffer_arg) {
  return messages_pb.ScenarioDataStoreInitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_ScenarioExecutionEndingRequest(arg) {
  if (!(arg instanceof messages_pb.ScenarioExecutionEndingRequest)) {
    throw new Error('Expected argument of type gauge.messages.ScenarioExecutionEndingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_ScenarioExecutionEndingRequest(buffer_arg) {
  return messages_pb.ScenarioExecutionEndingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_ScenarioExecutionStartingRequest(arg) {
  if (!(arg instanceof messages_pb.ScenarioExecutionStartingRequest)) {
    throw new Error('Expected argument of type gauge.messages.ScenarioExecutionStartingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_ScenarioExecutionStartingRequest(buffer_arg) {
  return messages_pb.ScenarioExecutionStartingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_SpecDataStoreInitRequest(arg) {
  if (!(arg instanceof messages_pb.SpecDataStoreInitRequest)) {
    throw new Error('Expected argument of type gauge.messages.SpecDataStoreInitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_SpecDataStoreInitRequest(buffer_arg) {
  return messages_pb.SpecDataStoreInitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_SpecDetails(arg) {
  if (!(arg instanceof messages_pb.SpecDetails)) {
    throw new Error('Expected argument of type gauge.messages.SpecDetails');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_SpecDetails(buffer_arg) {
  return messages_pb.SpecDetails.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_SpecExecutionEndingRequest(arg) {
  if (!(arg instanceof messages_pb.SpecExecutionEndingRequest)) {
    throw new Error('Expected argument of type gauge.messages.SpecExecutionEndingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_SpecExecutionEndingRequest(buffer_arg) {
  return messages_pb.SpecExecutionEndingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_SpecExecutionStartingRequest(arg) {
  if (!(arg instanceof messages_pb.SpecExecutionStartingRequest)) {
    throw new Error('Expected argument of type gauge.messages.SpecExecutionStartingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_SpecExecutionStartingRequest(buffer_arg) {
  return messages_pb.SpecExecutionStartingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_StepExecutionEndingRequest(arg) {
  if (!(arg instanceof messages_pb.StepExecutionEndingRequest)) {
    throw new Error('Expected argument of type gauge.messages.StepExecutionEndingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_StepExecutionEndingRequest(buffer_arg) {
  return messages_pb.StepExecutionEndingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_StepExecutionStartingRequest(arg) {
  if (!(arg instanceof messages_pb.StepExecutionStartingRequest)) {
    throw new Error('Expected argument of type gauge.messages.StepExecutionStartingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_StepExecutionStartingRequest(buffer_arg) {
  return messages_pb.StepExecutionStartingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_StepNameRequest(arg) {
  if (!(arg instanceof messages_pb.StepNameRequest)) {
    throw new Error('Expected argument of type gauge.messages.StepNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_StepNameRequest(buffer_arg) {
  return messages_pb.StepNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_StepNameResponse(arg) {
  if (!(arg instanceof messages_pb.StepNameResponse)) {
    throw new Error('Expected argument of type gauge.messages.StepNameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_StepNameResponse(buffer_arg) {
  return messages_pb.StepNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_StepNamesRequest(arg) {
  if (!(arg instanceof messages_pb.StepNamesRequest)) {
    throw new Error('Expected argument of type gauge.messages.StepNamesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_StepNamesRequest(buffer_arg) {
  return messages_pb.StepNamesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_StepNamesResponse(arg) {
  if (!(arg instanceof messages_pb.StepNamesResponse)) {
    throw new Error('Expected argument of type gauge.messages.StepNamesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_StepNamesResponse(buffer_arg) {
  return messages_pb.StepNamesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_StepPositionsRequest(arg) {
  if (!(arg instanceof messages_pb.StepPositionsRequest)) {
    throw new Error('Expected argument of type gauge.messages.StepPositionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_StepPositionsRequest(buffer_arg) {
  return messages_pb.StepPositionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_StepPositionsResponse(arg) {
  if (!(arg instanceof messages_pb.StepPositionsResponse)) {
    throw new Error('Expected argument of type gauge.messages.StepPositionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_StepPositionsResponse(buffer_arg) {
  return messages_pb.StepPositionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_StepValidateRequest(arg) {
  if (!(arg instanceof messages_pb.StepValidateRequest)) {
    throw new Error('Expected argument of type gauge.messages.StepValidateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_StepValidateRequest(buffer_arg) {
  return messages_pb.StepValidateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_StepValidateResponse(arg) {
  if (!(arg instanceof messages_pb.StepValidateResponse)) {
    throw new Error('Expected argument of type gauge.messages.StepValidateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_StepValidateResponse(buffer_arg) {
  return messages_pb.StepValidateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_StubImplementationCodeRequest(arg) {
  if (!(arg instanceof messages_pb.StubImplementationCodeRequest)) {
    throw new Error('Expected argument of type gauge.messages.StubImplementationCodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_StubImplementationCodeRequest(buffer_arg) {
  return messages_pb.StubImplementationCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_SuiteDataStoreInitRequest(arg) {
  if (!(arg instanceof messages_pb.SuiteDataStoreInitRequest)) {
    throw new Error('Expected argument of type gauge.messages.SuiteDataStoreInitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_SuiteDataStoreInitRequest(buffer_arg) {
  return messages_pb.SuiteDataStoreInitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gauge_messages_SuiteExecutionResult(arg) {
  if (!(arg instanceof messages_pb.SuiteExecutionResult)) {
    throw new Error('Expected argument of type gauge.messages.SuiteExecutionResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gauge_messages_SuiteExecutionResult(buffer_arg) {
  return messages_pb.SuiteExecutionResult.deserializeBinary(new Uint8Array(buffer_arg));
}


var RunnerService = exports.RunnerService = {
  // ValidateStep is a RPC to validate a given step.
//
// Accepts a StepValidateRequest message and returns a StepValidateResponse message
validateStep: {
    path: '/gauge.messages.Runner/ValidateStep',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.StepValidateRequest,
    responseType: messages_pb.StepValidateResponse,
    requestSerialize: serialize_gauge_messages_StepValidateRequest,
    requestDeserialize: deserialize_gauge_messages_StepValidateRequest,
    responseSerialize: serialize_gauge_messages_StepValidateResponse,
    responseDeserialize: deserialize_gauge_messages_StepValidateResponse,
  },
  // SuiteDataStoreInit is a RPC to initialize the suite level data store.
//
// Accepts a Empty message and returns a ExecutionStatusResponse message
initializeSuiteDataStore: {
    path: '/gauge.messages.Runner/InitializeSuiteDataStore',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.SuiteDataStoreInitRequest,
    responseType: messages_pb.ExecutionStatusResponse,
    requestSerialize: serialize_gauge_messages_SuiteDataStoreInitRequest,
    requestDeserialize: deserialize_gauge_messages_SuiteDataStoreInitRequest,
    responseSerialize: serialize_gauge_messages_ExecutionStatusResponse,
    responseDeserialize: deserialize_gauge_messages_ExecutionStatusResponse,
  },
  // ExecutionStarting is a RPC to tell runner to execute Suite level hooks.
//
// Accepts a ExecutionStartingRequest message and returns a ExecutionStatusResponse message
startExecution: {
    path: '/gauge.messages.Runner/StartExecution',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.ExecutionStartingRequest,
    responseType: messages_pb.ExecutionStatusResponse,
    requestSerialize: serialize_gauge_messages_ExecutionStartingRequest,
    requestDeserialize: deserialize_gauge_messages_ExecutionStartingRequest,
    responseSerialize: serialize_gauge_messages_ExecutionStatusResponse,
    responseDeserialize: deserialize_gauge_messages_ExecutionStatusResponse,
  },
  // SpecDataStoreInit is a RPC to initialize the spec level data store.
//
// Accepts a Empty message and returns a ExecutionStatusResponse message
initializeSpecDataStore: {
    path: '/gauge.messages.Runner/InitializeSpecDataStore',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.SpecDataStoreInitRequest,
    responseType: messages_pb.ExecutionStatusResponse,
    requestSerialize: serialize_gauge_messages_SpecDataStoreInitRequest,
    requestDeserialize: deserialize_gauge_messages_SpecDataStoreInitRequest,
    responseSerialize: serialize_gauge_messages_ExecutionStatusResponse,
    responseDeserialize: deserialize_gauge_messages_ExecutionStatusResponse,
  },
  // SpecExecutionStarting is a RPC to tell runner to execute spec level hooks.
//
// Accepts a SpecExecutionStartingRequest message and returns a ExecutionStatusResponse message
startSpecExecution: {
    path: '/gauge.messages.Runner/StartSpecExecution',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.SpecExecutionStartingRequest,
    responseType: messages_pb.ExecutionStatusResponse,
    requestSerialize: serialize_gauge_messages_SpecExecutionStartingRequest,
    requestDeserialize: deserialize_gauge_messages_SpecExecutionStartingRequest,
    responseSerialize: serialize_gauge_messages_ExecutionStatusResponse,
    responseDeserialize: deserialize_gauge_messages_ExecutionStatusResponse,
  },
  // ScenarioDataStoreInit is a RPC to initialize the scenario level data store.
//
// Accepts a Empty message and returns a ExecutionStatusResponse message
initializeScenarioDataStore: {
    path: '/gauge.messages.Runner/InitializeScenarioDataStore',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.ScenarioDataStoreInitRequest,
    responseType: messages_pb.ExecutionStatusResponse,
    requestSerialize: serialize_gauge_messages_ScenarioDataStoreInitRequest,
    requestDeserialize: deserialize_gauge_messages_ScenarioDataStoreInitRequest,
    responseSerialize: serialize_gauge_messages_ExecutionStatusResponse,
    responseDeserialize: deserialize_gauge_messages_ExecutionStatusResponse,
  },
  // ScenarioExecutionStarting is a RPC to tell runner to execute scenario level hooks.
//
// Accepts a ScenarioExecutionStartingRequest message and returns a ExecutionStatusResponse message
startScenarioExecution: {
    path: '/gauge.messages.Runner/StartScenarioExecution',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.ScenarioExecutionStartingRequest,
    responseType: messages_pb.ExecutionStatusResponse,
    requestSerialize: serialize_gauge_messages_ScenarioExecutionStartingRequest,
    requestDeserialize: deserialize_gauge_messages_ScenarioExecutionStartingRequest,
    responseSerialize: serialize_gauge_messages_ExecutionStatusResponse,
    responseDeserialize: deserialize_gauge_messages_ExecutionStatusResponse,
  },
  // StepExecutionStarting is a RPC to tell runner to execute step level hooks.
//
// Accepts a StepExecutionStartingRequest message and returns a ExecutionStatusResponse message
startStepExecution: {
    path: '/gauge.messages.Runner/StartStepExecution',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.StepExecutionStartingRequest,
    responseType: messages_pb.ExecutionStatusResponse,
    requestSerialize: serialize_gauge_messages_StepExecutionStartingRequest,
    requestDeserialize: deserialize_gauge_messages_StepExecutionStartingRequest,
    responseSerialize: serialize_gauge_messages_ExecutionStatusResponse,
    responseDeserialize: deserialize_gauge_messages_ExecutionStatusResponse,
  },
  // ExecuteStep is a RPC to tell runner to execute a step .
//
// Accepts a ExecuteStepRequest message and returns a ExecutionStatusResponse message
executeStep: {
    path: '/gauge.messages.Runner/ExecuteStep',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.ExecuteStepRequest,
    responseType: messages_pb.ExecutionStatusResponse,
    requestSerialize: serialize_gauge_messages_ExecuteStepRequest,
    requestDeserialize: deserialize_gauge_messages_ExecuteStepRequest,
    responseSerialize: serialize_gauge_messages_ExecutionStatusResponse,
    responseDeserialize: deserialize_gauge_messages_ExecutionStatusResponse,
  },
  // StepExecutionEnding is a RPC to tell runner to execute step level hooks.
//
// Accepts a StepExecutionEndingRequest message and returns a ExecutionStatusResponse message
finishStepExecution: {
    path: '/gauge.messages.Runner/FinishStepExecution',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.StepExecutionEndingRequest,
    responseType: messages_pb.ExecutionStatusResponse,
    requestSerialize: serialize_gauge_messages_StepExecutionEndingRequest,
    requestDeserialize: deserialize_gauge_messages_StepExecutionEndingRequest,
    responseSerialize: serialize_gauge_messages_ExecutionStatusResponse,
    responseDeserialize: deserialize_gauge_messages_ExecutionStatusResponse,
  },
  // ScenarioExecutionEnding is a RPC to tell runner to execute Scenario level hooks.
//
// Accepts a ScenarioExecutionEndingRequest message and returns a ExecutionStatusResponse message
finishScenarioExecution: {
    path: '/gauge.messages.Runner/FinishScenarioExecution',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.ScenarioExecutionEndingRequest,
    responseType: messages_pb.ExecutionStatusResponse,
    requestSerialize: serialize_gauge_messages_ScenarioExecutionEndingRequest,
    requestDeserialize: deserialize_gauge_messages_ScenarioExecutionEndingRequest,
    responseSerialize: serialize_gauge_messages_ExecutionStatusResponse,
    responseDeserialize: deserialize_gauge_messages_ExecutionStatusResponse,
  },
  // SpecExecutionEnding is a RPC to tell runner to execute spec level hooks.
//
// Accepts a SpecExecutionEndingRequest message and returns a ExecutionStatusResponse message
finishSpecExecution: {
    path: '/gauge.messages.Runner/FinishSpecExecution',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.SpecExecutionEndingRequest,
    responseType: messages_pb.ExecutionStatusResponse,
    requestSerialize: serialize_gauge_messages_SpecExecutionEndingRequest,
    requestDeserialize: deserialize_gauge_messages_SpecExecutionEndingRequest,
    responseSerialize: serialize_gauge_messages_ExecutionStatusResponse,
    responseDeserialize: deserialize_gauge_messages_ExecutionStatusResponse,
  },
  // ExecutionEnding is a RPC to tell runner to execute suite level hooks.
//
// Accepts a ExecutionEndingRequest message and returns a ExecutionStatusResponse message
finishExecution: {
    path: '/gauge.messages.Runner/FinishExecution',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.ExecutionEndingRequest,
    responseType: messages_pb.ExecutionStatusResponse,
    requestSerialize: serialize_gauge_messages_ExecutionEndingRequest,
    requestDeserialize: deserialize_gauge_messages_ExecutionEndingRequest,
    responseSerialize: serialize_gauge_messages_ExecutionStatusResponse,
    responseDeserialize: deserialize_gauge_messages_ExecutionStatusResponse,
  },
  // CacheFile is a RPC to tell runner to load/reload/unload a implementation file.
//
// Accepts a CacheFileRequest message and returns a Empty message
cacheFile: {
    path: '/gauge.messages.Runner/CacheFile',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.CacheFileRequest,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_CacheFileRequest,
    requestDeserialize: deserialize_gauge_messages_CacheFileRequest,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
  // GetStepName is a RPC to get information about the given step.
//
// Accepts a StepNameRequest message and returns a StepNameResponse message.
getStepName: {
    path: '/gauge.messages.Runner/GetStepName',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.StepNameRequest,
    responseType: messages_pb.StepNameResponse,
    requestSerialize: serialize_gauge_messages_StepNameRequest,
    requestDeserialize: deserialize_gauge_messages_StepNameRequest,
    responseSerialize: serialize_gauge_messages_StepNameResponse,
    responseDeserialize: deserialize_gauge_messages_StepNameResponse,
  },
  // GetGlobPatterns is a RPC to get the file path pattern which needs to be cached.
//
// Accepts a Empty message and returns a ImplementationFileGlobPatternResponse message.
getGlobPatterns: {
    path: '/gauge.messages.Runner/GetGlobPatterns',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.Empty,
    responseType: messages_pb.ImplementationFileGlobPatternResponse,
    requestSerialize: serialize_gauge_messages_Empty,
    requestDeserialize: deserialize_gauge_messages_Empty,
    responseSerialize: serialize_gauge_messages_ImplementationFileGlobPatternResponse,
    responseDeserialize: deserialize_gauge_messages_ImplementationFileGlobPatternResponse,
  },
  // GetStepNames is a RPC to get all the available steps from the runner.
//
// Accepts a StepNamesRequest message and returns a StepNamesResponse
getStepNames: {
    path: '/gauge.messages.Runner/GetStepNames',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.StepNamesRequest,
    responseType: messages_pb.StepNamesResponse,
    requestSerialize: serialize_gauge_messages_StepNamesRequest,
    requestDeserialize: deserialize_gauge_messages_StepNamesRequest,
    responseSerialize: serialize_gauge_messages_StepNamesResponse,
    responseDeserialize: deserialize_gauge_messages_StepNamesResponse,
  },
  // GetStepPositions is a RPC to get positions of all available steps in a given file.
//
// Accepts a StepPositionsRequest message and returns a StepPositionsResponse message
getStepPositions: {
    path: '/gauge.messages.Runner/GetStepPositions',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.StepPositionsRequest,
    responseType: messages_pb.StepPositionsResponse,
    requestSerialize: serialize_gauge_messages_StepPositionsRequest,
    requestDeserialize: deserialize_gauge_messages_StepPositionsRequest,
    responseSerialize: serialize_gauge_messages_StepPositionsResponse,
    responseDeserialize: deserialize_gauge_messages_StepPositionsResponse,
  },
  // GetImplementationFiles is a RPC get all the existing implementation files.
//
// Accepts a Empty and returns a ImplementationFileListResponse message.
getImplementationFiles: {
    path: '/gauge.messages.Runner/GetImplementationFiles',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.Empty,
    responseType: messages_pb.ImplementationFileListResponse,
    requestSerialize: serialize_gauge_messages_Empty,
    requestDeserialize: deserialize_gauge_messages_Empty,
    responseSerialize: serialize_gauge_messages_ImplementationFileListResponse,
    responseDeserialize: deserialize_gauge_messages_ImplementationFileListResponse,
  },
  // ImplementStub is a RPC to to ask runner to add a given implementation to given file.
//
// Accepts a StubImplementationCodeRequest and returns a FileDiff message.
implementStub: {
    path: '/gauge.messages.Runner/ImplementStub',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.StubImplementationCodeRequest,
    responseType: messages_pb.FileDiff,
    requestSerialize: serialize_gauge_messages_StubImplementationCodeRequest,
    requestDeserialize: deserialize_gauge_messages_StubImplementationCodeRequest,
    responseSerialize: serialize_gauge_messages_FileDiff,
    responseDeserialize: deserialize_gauge_messages_FileDiff,
  },
  // Refactor is a RPC to refactor a given step in implementation file.
//
// Accepts a RefactorRequest message and returns a RefactorResponse message.
refactor: {
    path: '/gauge.messages.Runner/Refactor',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.RefactorRequest,
    responseType: messages_pb.RefactorResponse,
    requestSerialize: serialize_gauge_messages_RefactorRequest,
    requestDeserialize: deserialize_gauge_messages_RefactorRequest,
    responseSerialize: serialize_gauge_messages_RefactorResponse,
    responseDeserialize: deserialize_gauge_messages_RefactorResponse,
  },
  // Kill is a RPC tell plugin to stop grpc server and kill the plugin process.
//
// Accepts a KillProcessRequest message and returns a Empty message.
kill: {
    path: '/gauge.messages.Runner/Kill',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.KillProcessRequest,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_KillProcessRequest,
    requestDeserialize: deserialize_gauge_messages_KillProcessRequest,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
};

exports.RunnerClient = grpc.makeGenericClientConstructor(RunnerService);
// Reporter services is meant for reporting plugins, or others plugins which are interested the live events
var ReporterService = exports.ReporterService = {
  // NotifyExecutionStarting is a RPC to tell plugins that the execution has started.
//
// Accepts a ExecutionStartingRequest message and returns a Empty message
notifyExecutionStarting: {
    path: '/gauge.messages.Reporter/NotifyExecutionStarting',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.ExecutionStartingRequest,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_ExecutionStartingRequest,
    requestDeserialize: deserialize_gauge_messages_ExecutionStartingRequest,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
  // NotifySpecExecutionStarting is a RPC to tell plugins that the specification execution has started.
//
// Accepts a SpecExecutionStartingRequest message and returns a Empty message
notifySpecExecutionStarting: {
    path: '/gauge.messages.Reporter/NotifySpecExecutionStarting',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.SpecExecutionStartingRequest,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_SpecExecutionStartingRequest,
    requestDeserialize: deserialize_gauge_messages_SpecExecutionStartingRequest,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
  // NotifyScenarioExecutionStarting is a RPC to tell plugins that the scenario execution has started.
//
// Accepts a ScenarioExecutionStartingRequest message and returns a Empty message
notifyScenarioExecutionStarting: {
    path: '/gauge.messages.Reporter/NotifyScenarioExecutionStarting',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.ScenarioExecutionStartingRequest,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_ScenarioExecutionStartingRequest,
    requestDeserialize: deserialize_gauge_messages_ScenarioExecutionStartingRequest,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
  // NotifyStepExecutionStarting is a RPC to tell plugins that the step execution has started.
//
// Accepts a StepExecutionStartingRequest message and returns a Empty message
notifyStepExecutionStarting: {
    path: '/gauge.messages.Reporter/NotifyStepExecutionStarting',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.StepExecutionStartingRequest,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_StepExecutionStartingRequest,
    requestDeserialize: deserialize_gauge_messages_StepExecutionStartingRequest,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
  // NotifyStepExecutionEnding is a RPC to tell plugins that the step execution has finished.
//
// Accepts a StepExecutionStartingRequest message and returns a Empty message
notifyStepExecutionEnding: {
    path: '/gauge.messages.Reporter/NotifyStepExecutionEnding',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.StepExecutionEndingRequest,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_StepExecutionEndingRequest,
    requestDeserialize: deserialize_gauge_messages_StepExecutionEndingRequest,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
  // NotifyScenarioExecutionEnding is a RPC to tell plugins that the scenario execution has finished.
//
// Accepts a ScenarioExecutionEndingRequest message and returns a Empty message
notifyScenarioExecutionEnding: {
    path: '/gauge.messages.Reporter/NotifyScenarioExecutionEnding',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.ScenarioExecutionEndingRequest,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_ScenarioExecutionEndingRequest,
    requestDeserialize: deserialize_gauge_messages_ScenarioExecutionEndingRequest,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
  // NotifySpecExecutionEnding is a RPC to tell plugins that the specification execution has finished.
//
// Accepts a SpecExecutionStartingRequest message and returns a Empty message
notifySpecExecutionEnding: {
    path: '/gauge.messages.Reporter/NotifySpecExecutionEnding',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.SpecExecutionEndingRequest,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_SpecExecutionEndingRequest,
    requestDeserialize: deserialize_gauge_messages_SpecExecutionEndingRequest,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
  // NotifyExecutionEnding is a RPC to tell plugins that the execution has finished.
//
// Accepts a ExecutionEndingRequest message and returns a Empty message
notifyExecutionEnding: {
    path: '/gauge.messages.Reporter/NotifyExecutionEnding',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.ExecutionEndingRequest,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_ExecutionEndingRequest,
    requestDeserialize: deserialize_gauge_messages_ExecutionEndingRequest,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
  // NotifySuiteResult is a RPC to tell about the end result of execution
//
// Accepts a SuiteExecutionResult message and returns a Empty message.
notifySuiteResult: {
    path: '/gauge.messages.Reporter/NotifySuiteResult',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.SuiteExecutionResult,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_SuiteExecutionResult,
    requestDeserialize: deserialize_gauge_messages_SuiteExecutionResult,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
  // Kill is a RPC tell plugin to stop grpc server and kill the plugin process.
//
// Accepts a KillProcessRequest message and returns a Empty message.
kill: {
    path: '/gauge.messages.Reporter/Kill',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.KillProcessRequest,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_KillProcessRequest,
    requestDeserialize: deserialize_gauge_messages_KillProcessRequest,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
};

exports.ReporterClient = grpc.makeGenericClientConstructor(ReporterService);
// Reporter services is meant for documentation plugins
var DocumenterService = exports.DocumenterService = {
  // GenerateDocs is a RPC tell plugin to generate docs from the spec details.
//
// Accepts a SpecDetails message and returns a Empty message.
generateDocs: {
    path: '/gauge.messages.Documenter/GenerateDocs',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.SpecDetails,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_SpecDetails,
    requestDeserialize: deserialize_gauge_messages_SpecDetails,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
  // Kill is a RPC tell plugin to stop grpc server and kill the plugin process.
//
// Accepts a KillProcessRequest message and returns a Empty message.
kill: {
    path: '/gauge.messages.Documenter/Kill',
    requestStream: false,
    responseStream: false,
    requestType: messages_pb.KillProcessRequest,
    responseType: messages_pb.Empty,
    requestSerialize: serialize_gauge_messages_KillProcessRequest,
    requestDeserialize: deserialize_gauge_messages_KillProcessRequest,
    responseSerialize: serialize_gauge_messages_Empty,
    responseDeserialize: deserialize_gauge_messages_Empty,
  },
};

exports.DocumenterClient = grpc.makeGenericClientConstructor(DocumenterService);
