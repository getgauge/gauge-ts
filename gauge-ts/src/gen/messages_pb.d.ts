// package: gauge.messages
// file: messages.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as spec_pb from "./spec_pb";

export class KillProcessRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KillProcessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: KillProcessRequest): KillProcessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KillProcessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KillProcessRequest;
    static deserializeBinaryFromReader(message: KillProcessRequest, reader: jspb.BinaryReader): KillProcessRequest;
}

export namespace KillProcessRequest {
    export type AsObject = {
    }
}

export class ExecutionStatusResponse extends jspb.Message { 

    hasExecutionresult(): boolean;
    clearExecutionresult(): void;
    getExecutionresult(): spec_pb.ProtoExecutionResult | undefined;
    setExecutionresult(value?: spec_pb.ProtoExecutionResult): ExecutionStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutionStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutionStatusResponse): ExecutionStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutionStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutionStatusResponse;
    static deserializeBinaryFromReader(message: ExecutionStatusResponse, reader: jspb.BinaryReader): ExecutionStatusResponse;
}

export namespace ExecutionStatusResponse {
    export type AsObject = {
        executionresult?: spec_pb.ProtoExecutionResult.AsObject,
    }
}

export class ExecutionStartingRequest extends jspb.Message { 

    hasCurrentexecutioninfo(): boolean;
    clearCurrentexecutioninfo(): void;
    getCurrentexecutioninfo(): ExecutionInfo | undefined;
    setCurrentexecutioninfo(value?: ExecutionInfo): ExecutionStartingRequest;

    hasSuiteresult(): boolean;
    clearSuiteresult(): void;
    getSuiteresult(): spec_pb.ProtoSuiteResult | undefined;
    setSuiteresult(value?: spec_pb.ProtoSuiteResult): ExecutionStartingRequest;
    getStream(): number;
    setStream(value: number): ExecutionStartingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutionStartingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutionStartingRequest): ExecutionStartingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutionStartingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutionStartingRequest;
    static deserializeBinaryFromReader(message: ExecutionStartingRequest, reader: jspb.BinaryReader): ExecutionStartingRequest;
}

export namespace ExecutionStartingRequest {
    export type AsObject = {
        currentexecutioninfo?: ExecutionInfo.AsObject,
        suiteresult?: spec_pb.ProtoSuiteResult.AsObject,
        stream: number,
    }
}

export class ExecutionEndingRequest extends jspb.Message { 

    hasCurrentexecutioninfo(): boolean;
    clearCurrentexecutioninfo(): void;
    getCurrentexecutioninfo(): ExecutionInfo | undefined;
    setCurrentexecutioninfo(value?: ExecutionInfo): ExecutionEndingRequest;

    hasSuiteresult(): boolean;
    clearSuiteresult(): void;
    getSuiteresult(): spec_pb.ProtoSuiteResult | undefined;
    setSuiteresult(value?: spec_pb.ProtoSuiteResult): ExecutionEndingRequest;
    getStream(): number;
    setStream(value: number): ExecutionEndingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutionEndingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutionEndingRequest): ExecutionEndingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutionEndingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutionEndingRequest;
    static deserializeBinaryFromReader(message: ExecutionEndingRequest, reader: jspb.BinaryReader): ExecutionEndingRequest;
}

export namespace ExecutionEndingRequest {
    export type AsObject = {
        currentexecutioninfo?: ExecutionInfo.AsObject,
        suiteresult?: spec_pb.ProtoSuiteResult.AsObject,
        stream: number,
    }
}

export class SpecExecutionStartingRequest extends jspb.Message { 

    hasCurrentexecutioninfo(): boolean;
    clearCurrentexecutioninfo(): void;
    getCurrentexecutioninfo(): ExecutionInfo | undefined;
    setCurrentexecutioninfo(value?: ExecutionInfo): SpecExecutionStartingRequest;

    hasSpecresult(): boolean;
    clearSpecresult(): void;
    getSpecresult(): spec_pb.ProtoSpecResult | undefined;
    setSpecresult(value?: spec_pb.ProtoSpecResult): SpecExecutionStartingRequest;
    getStream(): number;
    setStream(value: number): SpecExecutionStartingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecExecutionStartingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SpecExecutionStartingRequest): SpecExecutionStartingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecExecutionStartingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecExecutionStartingRequest;
    static deserializeBinaryFromReader(message: SpecExecutionStartingRequest, reader: jspb.BinaryReader): SpecExecutionStartingRequest;
}

export namespace SpecExecutionStartingRequest {
    export type AsObject = {
        currentexecutioninfo?: ExecutionInfo.AsObject,
        specresult?: spec_pb.ProtoSpecResult.AsObject,
        stream: number,
    }
}

export class SpecExecutionEndingRequest extends jspb.Message { 

    hasCurrentexecutioninfo(): boolean;
    clearCurrentexecutioninfo(): void;
    getCurrentexecutioninfo(): ExecutionInfo | undefined;
    setCurrentexecutioninfo(value?: ExecutionInfo): SpecExecutionEndingRequest;

    hasSpecresult(): boolean;
    clearSpecresult(): void;
    getSpecresult(): spec_pb.ProtoSpecResult | undefined;
    setSpecresult(value?: spec_pb.ProtoSpecResult): SpecExecutionEndingRequest;
    getStream(): number;
    setStream(value: number): SpecExecutionEndingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecExecutionEndingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SpecExecutionEndingRequest): SpecExecutionEndingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecExecutionEndingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecExecutionEndingRequest;
    static deserializeBinaryFromReader(message: SpecExecutionEndingRequest, reader: jspb.BinaryReader): SpecExecutionEndingRequest;
}

export namespace SpecExecutionEndingRequest {
    export type AsObject = {
        currentexecutioninfo?: ExecutionInfo.AsObject,
        specresult?: spec_pb.ProtoSpecResult.AsObject,
        stream: number,
    }
}

export class ScenarioExecutionStartingRequest extends jspb.Message { 

    hasCurrentexecutioninfo(): boolean;
    clearCurrentexecutioninfo(): void;
    getCurrentexecutioninfo(): ExecutionInfo | undefined;
    setCurrentexecutioninfo(value?: ExecutionInfo): ScenarioExecutionStartingRequest;

    hasScenarioresult(): boolean;
    clearScenarioresult(): void;
    getScenarioresult(): spec_pb.ProtoScenarioResult | undefined;
    setScenarioresult(value?: spec_pb.ProtoScenarioResult): ScenarioExecutionStartingRequest;
    getStream(): number;
    setStream(value: number): ScenarioExecutionStartingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScenarioExecutionStartingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScenarioExecutionStartingRequest): ScenarioExecutionStartingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScenarioExecutionStartingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScenarioExecutionStartingRequest;
    static deserializeBinaryFromReader(message: ScenarioExecutionStartingRequest, reader: jspb.BinaryReader): ScenarioExecutionStartingRequest;
}

export namespace ScenarioExecutionStartingRequest {
    export type AsObject = {
        currentexecutioninfo?: ExecutionInfo.AsObject,
        scenarioresult?: spec_pb.ProtoScenarioResult.AsObject,
        stream: number,
    }
}

export class ScenarioExecutionEndingRequest extends jspb.Message { 

    hasCurrentexecutioninfo(): boolean;
    clearCurrentexecutioninfo(): void;
    getCurrentexecutioninfo(): ExecutionInfo | undefined;
    setCurrentexecutioninfo(value?: ExecutionInfo): ScenarioExecutionEndingRequest;

    hasScenarioresult(): boolean;
    clearScenarioresult(): void;
    getScenarioresult(): spec_pb.ProtoScenarioResult | undefined;
    setScenarioresult(value?: spec_pb.ProtoScenarioResult): ScenarioExecutionEndingRequest;
    getStream(): number;
    setStream(value: number): ScenarioExecutionEndingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScenarioExecutionEndingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScenarioExecutionEndingRequest): ScenarioExecutionEndingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScenarioExecutionEndingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScenarioExecutionEndingRequest;
    static deserializeBinaryFromReader(message: ScenarioExecutionEndingRequest, reader: jspb.BinaryReader): ScenarioExecutionEndingRequest;
}

export namespace ScenarioExecutionEndingRequest {
    export type AsObject = {
        currentexecutioninfo?: ExecutionInfo.AsObject,
        scenarioresult?: spec_pb.ProtoScenarioResult.AsObject,
        stream: number,
    }
}

export class StepExecutionStartingRequest extends jspb.Message { 

    hasCurrentexecutioninfo(): boolean;
    clearCurrentexecutioninfo(): void;
    getCurrentexecutioninfo(): ExecutionInfo | undefined;
    setCurrentexecutioninfo(value?: ExecutionInfo): StepExecutionStartingRequest;

    hasStepresult(): boolean;
    clearStepresult(): void;
    getStepresult(): spec_pb.ProtoStepResult | undefined;
    setStepresult(value?: spec_pb.ProtoStepResult): StepExecutionStartingRequest;
    getStream(): number;
    setStream(value: number): StepExecutionStartingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepExecutionStartingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StepExecutionStartingRequest): StepExecutionStartingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepExecutionStartingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepExecutionStartingRequest;
    static deserializeBinaryFromReader(message: StepExecutionStartingRequest, reader: jspb.BinaryReader): StepExecutionStartingRequest;
}

export namespace StepExecutionStartingRequest {
    export type AsObject = {
        currentexecutioninfo?: ExecutionInfo.AsObject,
        stepresult?: spec_pb.ProtoStepResult.AsObject,
        stream: number,
    }
}

export class StepExecutionEndingRequest extends jspb.Message { 

    hasCurrentexecutioninfo(): boolean;
    clearCurrentexecutioninfo(): void;
    getCurrentexecutioninfo(): ExecutionInfo | undefined;
    setCurrentexecutioninfo(value?: ExecutionInfo): StepExecutionEndingRequest;

    hasStepresult(): boolean;
    clearStepresult(): void;
    getStepresult(): spec_pb.ProtoStepResult | undefined;
    setStepresult(value?: spec_pb.ProtoStepResult): StepExecutionEndingRequest;
    getStream(): number;
    setStream(value: number): StepExecutionEndingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepExecutionEndingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StepExecutionEndingRequest): StepExecutionEndingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepExecutionEndingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepExecutionEndingRequest;
    static deserializeBinaryFromReader(message: StepExecutionEndingRequest, reader: jspb.BinaryReader): StepExecutionEndingRequest;
}

export namespace StepExecutionEndingRequest {
    export type AsObject = {
        currentexecutioninfo?: ExecutionInfo.AsObject,
        stepresult?: spec_pb.ProtoStepResult.AsObject,
        stream: number,
    }
}

export class ExecutionArg extends jspb.Message { 
    getFlagname(): string;
    setFlagname(value: string): ExecutionArg;
    clearFlagvalueList(): void;
    getFlagvalueList(): Array<string>;
    setFlagvalueList(value: Array<string>): ExecutionArg;
    addFlagvalue(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutionArg.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutionArg): ExecutionArg.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutionArg, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutionArg;
    static deserializeBinaryFromReader(message: ExecutionArg, reader: jspb.BinaryReader): ExecutionArg;
}

export namespace ExecutionArg {
    export type AsObject = {
        flagname: string,
        flagvalueList: Array<string>,
    }
}

export class ExecutionInfo extends jspb.Message { 

    hasCurrentspec(): boolean;
    clearCurrentspec(): void;
    getCurrentspec(): SpecInfo | undefined;
    setCurrentspec(value?: SpecInfo): ExecutionInfo;

    hasCurrentscenario(): boolean;
    clearCurrentscenario(): void;
    getCurrentscenario(): ScenarioInfo | undefined;
    setCurrentscenario(value?: ScenarioInfo): ExecutionInfo;

    hasCurrentstep(): boolean;
    clearCurrentstep(): void;
    getCurrentstep(): StepInfo | undefined;
    setCurrentstep(value?: StepInfo): ExecutionInfo;
    getStacktrace(): string;
    setStacktrace(value: string): ExecutionInfo;
    getProjectname(): string;
    setProjectname(value: string): ExecutionInfo;
    clearExecutionargsList(): void;
    getExecutionargsList(): Array<ExecutionArg>;
    setExecutionargsList(value: Array<ExecutionArg>): ExecutionInfo;
    addExecutionargs(value?: ExecutionArg, index?: number): ExecutionArg;
    getNumberofexecutionstreams(): number;
    setNumberofexecutionstreams(value: number): ExecutionInfo;
    getRunnerid(): number;
    setRunnerid(value: number): ExecutionInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutionInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutionInfo): ExecutionInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutionInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutionInfo;
    static deserializeBinaryFromReader(message: ExecutionInfo, reader: jspb.BinaryReader): ExecutionInfo;
}

export namespace ExecutionInfo {
    export type AsObject = {
        currentspec?: SpecInfo.AsObject,
        currentscenario?: ScenarioInfo.AsObject,
        currentstep?: StepInfo.AsObject,
        stacktrace: string,
        projectname: string,
        executionargsList: Array<ExecutionArg.AsObject>,
        numberofexecutionstreams: number,
        runnerid: number,
    }
}

export class SpecInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): SpecInfo;
    getFilename(): string;
    setFilename(value: string): SpecInfo;
    getIsfailed(): boolean;
    setIsfailed(value: boolean): SpecInfo;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): SpecInfo;
    addTags(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SpecInfo): SpecInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecInfo;
    static deserializeBinaryFromReader(message: SpecInfo, reader: jspb.BinaryReader): SpecInfo;
}

export namespace SpecInfo {
    export type AsObject = {
        name: string,
        filename: string,
        isfailed: boolean,
        tagsList: Array<string>,
    }
}

export class ScenarioInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): ScenarioInfo;
    getIsfailed(): boolean;
    setIsfailed(value: boolean): ScenarioInfo;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): ScenarioInfo;
    addTags(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScenarioInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ScenarioInfo): ScenarioInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScenarioInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScenarioInfo;
    static deserializeBinaryFromReader(message: ScenarioInfo, reader: jspb.BinaryReader): ScenarioInfo;
}

export namespace ScenarioInfo {
    export type AsObject = {
        name: string,
        isfailed: boolean,
        tagsList: Array<string>,
    }
}

export class StepInfo extends jspb.Message { 

    hasStep(): boolean;
    clearStep(): void;
    getStep(): ExecuteStepRequest | undefined;
    setStep(value?: ExecuteStepRequest): StepInfo;
    getIsfailed(): boolean;
    setIsfailed(value: boolean): StepInfo;
    getStacktrace(): string;
    setStacktrace(value: string): StepInfo;
    getErrormessage(): string;
    setErrormessage(value: string): StepInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepInfo.AsObject;
    static toObject(includeInstance: boolean, msg: StepInfo): StepInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepInfo;
    static deserializeBinaryFromReader(message: StepInfo, reader: jspb.BinaryReader): StepInfo;
}

export namespace StepInfo {
    export type AsObject = {
        step?: ExecuteStepRequest.AsObject,
        isfailed: boolean,
        stacktrace: string,
        errormessage: string,
    }
}

export class ExecuteStepRequest extends jspb.Message { 
    getActualsteptext(): string;
    setActualsteptext(value: string): ExecuteStepRequest;
    getParsedsteptext(): string;
    setParsedsteptext(value: string): ExecuteStepRequest;
    getScenariofailing(): boolean;
    setScenariofailing(value: boolean): ExecuteStepRequest;
    clearParametersList(): void;
    getParametersList(): Array<spec_pb.Parameter>;
    setParametersList(value: Array<spec_pb.Parameter>): ExecuteStepRequest;
    addParameters(value?: spec_pb.Parameter, index?: number): spec_pb.Parameter;
    getStream(): number;
    setStream(value: number): ExecuteStepRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteStepRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteStepRequest): ExecuteStepRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteStepRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteStepRequest;
    static deserializeBinaryFromReader(message: ExecuteStepRequest, reader: jspb.BinaryReader): ExecuteStepRequest;
}

export namespace ExecuteStepRequest {
    export type AsObject = {
        actualsteptext: string,
        parsedsteptext: string,
        scenariofailing: boolean,
        parametersList: Array<spec_pb.Parameter.AsObject>,
        stream: number,
    }
}

export class StepValidateRequest extends jspb.Message { 
    getSteptext(): string;
    setSteptext(value: string): StepValidateRequest;
    getNumberofparameters(): number;
    setNumberofparameters(value: number): StepValidateRequest;

    hasStepvalue(): boolean;
    clearStepvalue(): void;
    getStepvalue(): spec_pb.ProtoStepValue | undefined;
    setStepvalue(value?: spec_pb.ProtoStepValue): StepValidateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepValidateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StepValidateRequest): StepValidateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepValidateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepValidateRequest;
    static deserializeBinaryFromReader(message: StepValidateRequest, reader: jspb.BinaryReader): StepValidateRequest;
}

export namespace StepValidateRequest {
    export type AsObject = {
        steptext: string,
        numberofparameters: number,
        stepvalue?: spec_pb.ProtoStepValue.AsObject,
    }
}

export class StepValidateResponse extends jspb.Message { 
    getIsvalid(): boolean;
    setIsvalid(value: boolean): StepValidateResponse;
    getErrormessage(): string;
    setErrormessage(value: string): StepValidateResponse;
    getErrortype(): StepValidateResponse.ErrorType;
    setErrortype(value: StepValidateResponse.ErrorType): StepValidateResponse;
    getSuggestion(): string;
    setSuggestion(value: string): StepValidateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepValidateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StepValidateResponse): StepValidateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepValidateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepValidateResponse;
    static deserializeBinaryFromReader(message: StepValidateResponse, reader: jspb.BinaryReader): StepValidateResponse;
}

export namespace StepValidateResponse {
    export type AsObject = {
        isvalid: boolean,
        errormessage: string,
        errortype: StepValidateResponse.ErrorType,
        suggestion: string,
    }

    export enum ErrorType {
    STEP_IMPLEMENTATION_NOT_FOUND = 0,
    DUPLICATE_STEP_IMPLEMENTATION = 1,
    }

}

export class SuiteExecutionResult extends jspb.Message { 

    hasSuiteresult(): boolean;
    clearSuiteresult(): void;
    getSuiteresult(): spec_pb.ProtoSuiteResult | undefined;
    setSuiteresult(value?: spec_pb.ProtoSuiteResult): SuiteExecutionResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuiteExecutionResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuiteExecutionResult): SuiteExecutionResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuiteExecutionResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuiteExecutionResult;
    static deserializeBinaryFromReader(message: SuiteExecutionResult, reader: jspb.BinaryReader): SuiteExecutionResult;
}

export namespace SuiteExecutionResult {
    export type AsObject = {
        suiteresult?: spec_pb.ProtoSuiteResult.AsObject,
    }
}

export class SuiteExecutionResultItem extends jspb.Message { 

    hasResultitem(): boolean;
    clearResultitem(): void;
    getResultitem(): spec_pb.ProtoItem | undefined;
    setResultitem(value?: spec_pb.ProtoItem): SuiteExecutionResultItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuiteExecutionResultItem.AsObject;
    static toObject(includeInstance: boolean, msg: SuiteExecutionResultItem): SuiteExecutionResultItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuiteExecutionResultItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuiteExecutionResultItem;
    static deserializeBinaryFromReader(message: SuiteExecutionResultItem, reader: jspb.BinaryReader): SuiteExecutionResultItem;
}

export namespace SuiteExecutionResultItem {
    export type AsObject = {
        resultitem?: spec_pb.ProtoItem.AsObject,
    }
}

export class StepNamesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepNamesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StepNamesRequest): StepNamesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepNamesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepNamesRequest;
    static deserializeBinaryFromReader(message: StepNamesRequest, reader: jspb.BinaryReader): StepNamesRequest;
}

export namespace StepNamesRequest {
    export type AsObject = {
    }
}

export class StepNamesResponse extends jspb.Message { 
    clearStepsList(): void;
    getStepsList(): Array<string>;
    setStepsList(value: Array<string>): StepNamesResponse;
    addSteps(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepNamesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StepNamesResponse): StepNamesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepNamesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepNamesResponse;
    static deserializeBinaryFromReader(message: StepNamesResponse, reader: jspb.BinaryReader): StepNamesResponse;
}

export namespace StepNamesResponse {
    export type AsObject = {
        stepsList: Array<string>,
    }
}

export class ScenarioDataStoreInitRequest extends jspb.Message { 
    getStream(): number;
    setStream(value: number): ScenarioDataStoreInitRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScenarioDataStoreInitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScenarioDataStoreInitRequest): ScenarioDataStoreInitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScenarioDataStoreInitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScenarioDataStoreInitRequest;
    static deserializeBinaryFromReader(message: ScenarioDataStoreInitRequest, reader: jspb.BinaryReader): ScenarioDataStoreInitRequest;
}

export namespace ScenarioDataStoreInitRequest {
    export type AsObject = {
        stream: number,
    }
}

export class SpecDataStoreInitRequest extends jspb.Message { 
    getStream(): number;
    setStream(value: number): SpecDataStoreInitRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecDataStoreInitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SpecDataStoreInitRequest): SpecDataStoreInitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecDataStoreInitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecDataStoreInitRequest;
    static deserializeBinaryFromReader(message: SpecDataStoreInitRequest, reader: jspb.BinaryReader): SpecDataStoreInitRequest;
}

export namespace SpecDataStoreInitRequest {
    export type AsObject = {
        stream: number,
    }
}

export class SuiteDataStoreInitRequest extends jspb.Message { 
    getStream(): number;
    setStream(value: number): SuiteDataStoreInitRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuiteDataStoreInitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SuiteDataStoreInitRequest): SuiteDataStoreInitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuiteDataStoreInitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuiteDataStoreInitRequest;
    static deserializeBinaryFromReader(message: SuiteDataStoreInitRequest, reader: jspb.BinaryReader): SuiteDataStoreInitRequest;
}

export namespace SuiteDataStoreInitRequest {
    export type AsObject = {
        stream: number,
    }
}

export class ParameterPosition extends jspb.Message { 
    getOldposition(): number;
    setOldposition(value: number): ParameterPosition;
    getNewposition(): number;
    setNewposition(value: number): ParameterPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParameterPosition.AsObject;
    static toObject(includeInstance: boolean, msg: ParameterPosition): ParameterPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParameterPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParameterPosition;
    static deserializeBinaryFromReader(message: ParameterPosition, reader: jspb.BinaryReader): ParameterPosition;
}

export namespace ParameterPosition {
    export type AsObject = {
        oldposition: number,
        newposition: number,
    }
}

export class RefactorRequest extends jspb.Message { 

    hasOldstepvalue(): boolean;
    clearOldstepvalue(): void;
    getOldstepvalue(): spec_pb.ProtoStepValue | undefined;
    setOldstepvalue(value?: spec_pb.ProtoStepValue): RefactorRequest;

    hasNewstepvalue(): boolean;
    clearNewstepvalue(): void;
    getNewstepvalue(): spec_pb.ProtoStepValue | undefined;
    setNewstepvalue(value?: spec_pb.ProtoStepValue): RefactorRequest;
    clearParampositionsList(): void;
    getParampositionsList(): Array<ParameterPosition>;
    setParampositionsList(value: Array<ParameterPosition>): RefactorRequest;
    addParampositions(value?: ParameterPosition, index?: number): ParameterPosition;
    getSavechanges(): boolean;
    setSavechanges(value: boolean): RefactorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefactorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RefactorRequest): RefactorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefactorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefactorRequest;
    static deserializeBinaryFromReader(message: RefactorRequest, reader: jspb.BinaryReader): RefactorRequest;
}

export namespace RefactorRequest {
    export type AsObject = {
        oldstepvalue?: spec_pb.ProtoStepValue.AsObject,
        newstepvalue?: spec_pb.ProtoStepValue.AsObject,
        parampositionsList: Array<ParameterPosition.AsObject>,
        savechanges: boolean,
    }
}

export class FileChanges extends jspb.Message { 
    getFilename(): string;
    setFilename(value: string): FileChanges;
    getFilecontent(): string;
    setFilecontent(value: string): FileChanges;
    clearDiffsList(): void;
    getDiffsList(): Array<TextDiff>;
    setDiffsList(value: Array<TextDiff>): FileChanges;
    addDiffs(value?: TextDiff, index?: number): TextDiff;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileChanges.AsObject;
    static toObject(includeInstance: boolean, msg: FileChanges): FileChanges.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileChanges, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileChanges;
    static deserializeBinaryFromReader(message: FileChanges, reader: jspb.BinaryReader): FileChanges;
}

export namespace FileChanges {
    export type AsObject = {
        filename: string,
        filecontent: string,
        diffsList: Array<TextDiff.AsObject>,
    }
}

export class RefactorResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): RefactorResponse;
    getError(): string;
    setError(value: string): RefactorResponse;
    clearFileschangedList(): void;
    getFileschangedList(): Array<string>;
    setFileschangedList(value: Array<string>): RefactorResponse;
    addFileschanged(value: string, index?: number): string;
    clearFilechangesList(): void;
    getFilechangesList(): Array<FileChanges>;
    setFilechangesList(value: Array<FileChanges>): RefactorResponse;
    addFilechanges(value?: FileChanges, index?: number): FileChanges;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefactorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RefactorResponse): RefactorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefactorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefactorResponse;
    static deserializeBinaryFromReader(message: RefactorResponse, reader: jspb.BinaryReader): RefactorResponse;
}

export namespace RefactorResponse {
    export type AsObject = {
        success: boolean,
        error: string,
        fileschangedList: Array<string>,
        filechangesList: Array<FileChanges.AsObject>,
    }
}

export class StepNameRequest extends jspb.Message { 
    getStepvalue(): string;
    setStepvalue(value: string): StepNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StepNameRequest): StepNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepNameRequest;
    static deserializeBinaryFromReader(message: StepNameRequest, reader: jspb.BinaryReader): StepNameRequest;
}

export namespace StepNameRequest {
    export type AsObject = {
        stepvalue: string,
    }
}

export class StepNameResponse extends jspb.Message { 
    getIssteppresent(): boolean;
    setIssteppresent(value: boolean): StepNameResponse;
    clearStepnameList(): void;
    getStepnameList(): Array<string>;
    setStepnameList(value: Array<string>): StepNameResponse;
    addStepname(value: string, index?: number): string;
    getHasalias(): boolean;
    setHasalias(value: boolean): StepNameResponse;
    getFilename(): string;
    setFilename(value: string): StepNameResponse;

    hasSpan(): boolean;
    clearSpan(): void;
    getSpan(): spec_pb.Span | undefined;
    setSpan(value?: spec_pb.Span): StepNameResponse;
    getIsexternal(): boolean;
    setIsexternal(value: boolean): StepNameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepNameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StepNameResponse): StepNameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepNameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepNameResponse;
    static deserializeBinaryFromReader(message: StepNameResponse, reader: jspb.BinaryReader): StepNameResponse;
}

export namespace StepNameResponse {
    export type AsObject = {
        issteppresent: boolean,
        stepnameList: Array<string>,
        hasalias: boolean,
        filename: string,
        span?: spec_pb.Span.AsObject,
        isexternal: boolean,
    }
}

export class UnsupportedMessageResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): UnsupportedMessageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnsupportedMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UnsupportedMessageResponse): UnsupportedMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnsupportedMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnsupportedMessageResponse;
    static deserializeBinaryFromReader(message: UnsupportedMessageResponse, reader: jspb.BinaryReader): UnsupportedMessageResponse;
}

export namespace UnsupportedMessageResponse {
    export type AsObject = {
        message: string,
    }
}

export class CacheFileRequest extends jspb.Message { 
    getContent(): string;
    setContent(value: string): CacheFileRequest;
    getFilepath(): string;
    setFilepath(value: string): CacheFileRequest;
    getIsclosed(): boolean;
    setIsclosed(value: boolean): CacheFileRequest;
    getStatus(): CacheFileRequest.FileStatus;
    setStatus(value: CacheFileRequest.FileStatus): CacheFileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CacheFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CacheFileRequest): CacheFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CacheFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CacheFileRequest;
    static deserializeBinaryFromReader(message: CacheFileRequest, reader: jspb.BinaryReader): CacheFileRequest;
}

export namespace CacheFileRequest {
    export type AsObject = {
        content: string,
        filepath: string,
        isclosed: boolean,
        status: CacheFileRequest.FileStatus,
    }

    export enum FileStatus {
    CHANGED = 0,
    CLOSED = 1,
    CREATED = 2,
    DELETED = 3,
    OPENED = 4,
    }

}

export class StepPositionsRequest extends jspb.Message { 
    getFilepath(): string;
    setFilepath(value: string): StepPositionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepPositionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StepPositionsRequest): StepPositionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepPositionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepPositionsRequest;
    static deserializeBinaryFromReader(message: StepPositionsRequest, reader: jspb.BinaryReader): StepPositionsRequest;
}

export namespace StepPositionsRequest {
    export type AsObject = {
        filepath: string,
    }
}

export class StepPositionsResponse extends jspb.Message { 
    clearSteppositionsList(): void;
    getSteppositionsList(): Array<StepPositionsResponse.StepPosition>;
    setSteppositionsList(value: Array<StepPositionsResponse.StepPosition>): StepPositionsResponse;
    addSteppositions(value?: StepPositionsResponse.StepPosition, index?: number): StepPositionsResponse.StepPosition;
    getError(): string;
    setError(value: string): StepPositionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepPositionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StepPositionsResponse): StepPositionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepPositionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepPositionsResponse;
    static deserializeBinaryFromReader(message: StepPositionsResponse, reader: jspb.BinaryReader): StepPositionsResponse;
}

export namespace StepPositionsResponse {
    export type AsObject = {
        steppositionsList: Array<StepPositionsResponse.StepPosition.AsObject>,
        error: string,
    }


    export class StepPosition extends jspb.Message { 
        getStepvalue(): string;
        setStepvalue(value: string): StepPosition;

        hasSpan(): boolean;
        clearSpan(): void;
        getSpan(): spec_pb.Span | undefined;
        setSpan(value?: spec_pb.Span): StepPosition;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StepPosition.AsObject;
        static toObject(includeInstance: boolean, msg: StepPosition): StepPosition.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StepPosition, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StepPosition;
        static deserializeBinaryFromReader(message: StepPosition, reader: jspb.BinaryReader): StepPosition;
    }

    export namespace StepPosition {
        export type AsObject = {
            stepvalue: string,
            span?: spec_pb.Span.AsObject,
        }
    }

}

export class ImplementationFileGlobPatternRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImplementationFileGlobPatternRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImplementationFileGlobPatternRequest): ImplementationFileGlobPatternRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImplementationFileGlobPatternRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImplementationFileGlobPatternRequest;
    static deserializeBinaryFromReader(message: ImplementationFileGlobPatternRequest, reader: jspb.BinaryReader): ImplementationFileGlobPatternRequest;
}

export namespace ImplementationFileGlobPatternRequest {
    export type AsObject = {
    }
}

export class ImplementationFileGlobPatternResponse extends jspb.Message { 
    clearGlobpatternsList(): void;
    getGlobpatternsList(): Array<string>;
    setGlobpatternsList(value: Array<string>): ImplementationFileGlobPatternResponse;
    addGlobpatterns(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImplementationFileGlobPatternResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ImplementationFileGlobPatternResponse): ImplementationFileGlobPatternResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImplementationFileGlobPatternResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImplementationFileGlobPatternResponse;
    static deserializeBinaryFromReader(message: ImplementationFileGlobPatternResponse, reader: jspb.BinaryReader): ImplementationFileGlobPatternResponse;
}

export namespace ImplementationFileGlobPatternResponse {
    export type AsObject = {
        globpatternsList: Array<string>,
    }
}

export class ImplementationFileListRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImplementationFileListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImplementationFileListRequest): ImplementationFileListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImplementationFileListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImplementationFileListRequest;
    static deserializeBinaryFromReader(message: ImplementationFileListRequest, reader: jspb.BinaryReader): ImplementationFileListRequest;
}

export namespace ImplementationFileListRequest {
    export type AsObject = {
    }
}

export class ImplementationFileListResponse extends jspb.Message { 
    clearImplementationfilepathsList(): void;
    getImplementationfilepathsList(): Array<string>;
    setImplementationfilepathsList(value: Array<string>): ImplementationFileListResponse;
    addImplementationfilepaths(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImplementationFileListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ImplementationFileListResponse): ImplementationFileListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImplementationFileListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImplementationFileListResponse;
    static deserializeBinaryFromReader(message: ImplementationFileListResponse, reader: jspb.BinaryReader): ImplementationFileListResponse;
}

export namespace ImplementationFileListResponse {
    export type AsObject = {
        implementationfilepathsList: Array<string>,
    }
}

export class StubImplementationCodeRequest extends jspb.Message { 
    getImplementationfilepath(): string;
    setImplementationfilepath(value: string): StubImplementationCodeRequest;
    clearCodesList(): void;
    getCodesList(): Array<string>;
    setCodesList(value: Array<string>): StubImplementationCodeRequest;
    addCodes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StubImplementationCodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StubImplementationCodeRequest): StubImplementationCodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StubImplementationCodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StubImplementationCodeRequest;
    static deserializeBinaryFromReader(message: StubImplementationCodeRequest, reader: jspb.BinaryReader): StubImplementationCodeRequest;
}

export namespace StubImplementationCodeRequest {
    export type AsObject = {
        implementationfilepath: string,
        codesList: Array<string>,
    }
}

export class TextDiff extends jspb.Message { 

    hasSpan(): boolean;
    clearSpan(): void;
    getSpan(): spec_pb.Span | undefined;
    setSpan(value?: spec_pb.Span): TextDiff;
    getContent(): string;
    setContent(value: string): TextDiff;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextDiff.AsObject;
    static toObject(includeInstance: boolean, msg: TextDiff): TextDiff.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextDiff, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextDiff;
    static deserializeBinaryFromReader(message: TextDiff, reader: jspb.BinaryReader): TextDiff;
}

export namespace TextDiff {
    export type AsObject = {
        span?: spec_pb.Span.AsObject,
        content: string,
    }
}

export class FileDiff extends jspb.Message { 
    getFilepath(): string;
    setFilepath(value: string): FileDiff;
    clearTextdiffsList(): void;
    getTextdiffsList(): Array<TextDiff>;
    setTextdiffsList(value: Array<TextDiff>): FileDiff;
    addTextdiffs(value?: TextDiff, index?: number): TextDiff;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileDiff.AsObject;
    static toObject(includeInstance: boolean, msg: FileDiff): FileDiff.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileDiff, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileDiff;
    static deserializeBinaryFromReader(message: FileDiff, reader: jspb.BinaryReader): FileDiff;
}

export namespace FileDiff {
    export type AsObject = {
        filepath: string,
        textdiffsList: Array<TextDiff.AsObject>,
    }
}

export class KeepAlive extends jspb.Message { 
    getPluginid(): string;
    setPluginid(value: string): KeepAlive;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeepAlive.AsObject;
    static toObject(includeInstance: boolean, msg: KeepAlive): KeepAlive.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeepAlive, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeepAlive;
    static deserializeBinaryFromReader(message: KeepAlive, reader: jspb.BinaryReader): KeepAlive;
}

export namespace KeepAlive {
    export type AsObject = {
        pluginid: string,
    }
}

export class SpecDetails extends jspb.Message { 
    clearDetailsList(): void;
    getDetailsList(): Array<SpecDetails.SpecDetail>;
    setDetailsList(value: Array<SpecDetails.SpecDetail>): SpecDetails;
    addDetails(value?: SpecDetails.SpecDetail, index?: number): SpecDetails.SpecDetail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecDetails.AsObject;
    static toObject(includeInstance: boolean, msg: SpecDetails): SpecDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecDetails;
    static deserializeBinaryFromReader(message: SpecDetails, reader: jspb.BinaryReader): SpecDetails;
}

export namespace SpecDetails {
    export type AsObject = {
        detailsList: Array<SpecDetails.SpecDetail.AsObject>,
    }


    export class SpecDetail extends jspb.Message { 

        hasSpec(): boolean;
        clearSpec(): void;
        getSpec(): spec_pb.ProtoSpec | undefined;
        setSpec(value?: spec_pb.ProtoSpec): SpecDetail;
        clearParseerrorsList(): void;
        getParseerrorsList(): Array<spec_pb.Error>;
        setParseerrorsList(value: Array<spec_pb.Error>): SpecDetail;
        addParseerrors(value?: spec_pb.Error, index?: number): spec_pb.Error;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SpecDetail.AsObject;
        static toObject(includeInstance: boolean, msg: SpecDetail): SpecDetail.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SpecDetail, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SpecDetail;
        static deserializeBinaryFromReader(message: SpecDetail, reader: jspb.BinaryReader): SpecDetail;
    }

    export namespace SpecDetail {
        export type AsObject = {
            spec?: spec_pb.ProtoSpec.AsObject,
            parseerrorsList: Array<spec_pb.Error.AsObject>,
        }
    }

}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class Message extends jspb.Message { 
    getMessagetype(): Message.MessageType;
    setMessagetype(value: Message.MessageType): Message;
    getMessageid(): number;
    setMessageid(value: number): Message;

    hasExecutionstartingrequest(): boolean;
    clearExecutionstartingrequest(): void;
    getExecutionstartingrequest(): ExecutionStartingRequest | undefined;
    setExecutionstartingrequest(value?: ExecutionStartingRequest): Message;

    hasSpecexecutionstartingrequest(): boolean;
    clearSpecexecutionstartingrequest(): void;
    getSpecexecutionstartingrequest(): SpecExecutionStartingRequest | undefined;
    setSpecexecutionstartingrequest(value?: SpecExecutionStartingRequest): Message;

    hasSpecexecutionendingrequest(): boolean;
    clearSpecexecutionendingrequest(): void;
    getSpecexecutionendingrequest(): SpecExecutionEndingRequest | undefined;
    setSpecexecutionendingrequest(value?: SpecExecutionEndingRequest): Message;

    hasScenarioexecutionstartingrequest(): boolean;
    clearScenarioexecutionstartingrequest(): void;
    getScenarioexecutionstartingrequest(): ScenarioExecutionStartingRequest | undefined;
    setScenarioexecutionstartingrequest(value?: ScenarioExecutionStartingRequest): Message;

    hasScenarioexecutionendingrequest(): boolean;
    clearScenarioexecutionendingrequest(): void;
    getScenarioexecutionendingrequest(): ScenarioExecutionEndingRequest | undefined;
    setScenarioexecutionendingrequest(value?: ScenarioExecutionEndingRequest): Message;

    hasStepexecutionstartingrequest(): boolean;
    clearStepexecutionstartingrequest(): void;
    getStepexecutionstartingrequest(): StepExecutionStartingRequest | undefined;
    setStepexecutionstartingrequest(value?: StepExecutionStartingRequest): Message;

    hasStepexecutionendingrequest(): boolean;
    clearStepexecutionendingrequest(): void;
    getStepexecutionendingrequest(): StepExecutionEndingRequest | undefined;
    setStepexecutionendingrequest(value?: StepExecutionEndingRequest): Message;

    hasExecutesteprequest(): boolean;
    clearExecutesteprequest(): void;
    getExecutesteprequest(): ExecuteStepRequest | undefined;
    setExecutesteprequest(value?: ExecuteStepRequest): Message;

    hasExecutionendingrequest(): boolean;
    clearExecutionendingrequest(): void;
    getExecutionendingrequest(): ExecutionEndingRequest | undefined;
    setExecutionendingrequest(value?: ExecutionEndingRequest): Message;

    hasStepvalidaterequest(): boolean;
    clearStepvalidaterequest(): void;
    getStepvalidaterequest(): StepValidateRequest | undefined;
    setStepvalidaterequest(value?: StepValidateRequest): Message;

    hasStepvalidateresponse(): boolean;
    clearStepvalidateresponse(): void;
    getStepvalidateresponse(): StepValidateResponse | undefined;
    setStepvalidateresponse(value?: StepValidateResponse): Message;

    hasExecutionstatusresponse(): boolean;
    clearExecutionstatusresponse(): void;
    getExecutionstatusresponse(): ExecutionStatusResponse | undefined;
    setExecutionstatusresponse(value?: ExecutionStatusResponse): Message;

    hasStepnamesrequest(): boolean;
    clearStepnamesrequest(): void;
    getStepnamesrequest(): StepNamesRequest | undefined;
    setStepnamesrequest(value?: StepNamesRequest): Message;

    hasStepnamesresponse(): boolean;
    clearStepnamesresponse(): void;
    getStepnamesresponse(): StepNamesResponse | undefined;
    setStepnamesresponse(value?: StepNamesResponse): Message;

    hasSuiteexecutionresult(): boolean;
    clearSuiteexecutionresult(): void;
    getSuiteexecutionresult(): SuiteExecutionResult | undefined;
    setSuiteexecutionresult(value?: SuiteExecutionResult): Message;

    hasKillprocessrequest(): boolean;
    clearKillprocessrequest(): void;
    getKillprocessrequest(): KillProcessRequest | undefined;
    setKillprocessrequest(value?: KillProcessRequest): Message;

    hasScenariodatastoreinitrequest(): boolean;
    clearScenariodatastoreinitrequest(): void;
    getScenariodatastoreinitrequest(): ScenarioDataStoreInitRequest | undefined;
    setScenariodatastoreinitrequest(value?: ScenarioDataStoreInitRequest): Message;

    hasSpecdatastoreinitrequest(): boolean;
    clearSpecdatastoreinitrequest(): void;
    getSpecdatastoreinitrequest(): SpecDataStoreInitRequest | undefined;
    setSpecdatastoreinitrequest(value?: SpecDataStoreInitRequest): Message;

    hasSuitedatastoreinitrequest(): boolean;
    clearSuitedatastoreinitrequest(): void;
    getSuitedatastoreinitrequest(): SuiteDataStoreInitRequest | undefined;
    setSuitedatastoreinitrequest(value?: SuiteDataStoreInitRequest): Message;

    hasStepnamerequest(): boolean;
    clearStepnamerequest(): void;
    getStepnamerequest(): StepNameRequest | undefined;
    setStepnamerequest(value?: StepNameRequest): Message;

    hasStepnameresponse(): boolean;
    clearStepnameresponse(): void;
    getStepnameresponse(): StepNameResponse | undefined;
    setStepnameresponse(value?: StepNameResponse): Message;

    hasRefactorrequest(): boolean;
    clearRefactorrequest(): void;
    getRefactorrequest(): RefactorRequest | undefined;
    setRefactorrequest(value?: RefactorRequest): Message;

    hasRefactorresponse(): boolean;
    clearRefactorresponse(): void;
    getRefactorresponse(): RefactorResponse | undefined;
    setRefactorresponse(value?: RefactorResponse): Message;

    hasUnsupportedmessageresponse(): boolean;
    clearUnsupportedmessageresponse(): void;
    getUnsupportedmessageresponse(): UnsupportedMessageResponse | undefined;
    setUnsupportedmessageresponse(value?: UnsupportedMessageResponse): Message;

    hasCachefilerequest(): boolean;
    clearCachefilerequest(): void;
    getCachefilerequest(): CacheFileRequest | undefined;
    setCachefilerequest(value?: CacheFileRequest): Message;

    hasSteppositionsrequest(): boolean;
    clearSteppositionsrequest(): void;
    getSteppositionsrequest(): StepPositionsRequest | undefined;
    setSteppositionsrequest(value?: StepPositionsRequest): Message;

    hasSteppositionsresponse(): boolean;
    clearSteppositionsresponse(): void;
    getSteppositionsresponse(): StepPositionsResponse | undefined;
    setSteppositionsresponse(value?: StepPositionsResponse): Message;

    hasImplementationfilelistrequest(): boolean;
    clearImplementationfilelistrequest(): void;
    getImplementationfilelistrequest(): ImplementationFileListRequest | undefined;
    setImplementationfilelistrequest(value?: ImplementationFileListRequest): Message;

    hasImplementationfilelistresponse(): boolean;
    clearImplementationfilelistresponse(): void;
    getImplementationfilelistresponse(): ImplementationFileListResponse | undefined;
    setImplementationfilelistresponse(value?: ImplementationFileListResponse): Message;

    hasStubimplementationcoderequest(): boolean;
    clearStubimplementationcoderequest(): void;
    getStubimplementationcoderequest(): StubImplementationCodeRequest | undefined;
    setStubimplementationcoderequest(value?: StubImplementationCodeRequest): Message;

    hasFilediff(): boolean;
    clearFilediff(): void;
    getFilediff(): FileDiff | undefined;
    setFilediff(value?: FileDiff): Message;

    hasImplementationfileglobpatternrequest(): boolean;
    clearImplementationfileglobpatternrequest(): void;
    getImplementationfileglobpatternrequest(): ImplementationFileGlobPatternRequest | undefined;
    setImplementationfileglobpatternrequest(value?: ImplementationFileGlobPatternRequest): Message;

    hasImplementationfileglobpatternresponse(): boolean;
    clearImplementationfileglobpatternresponse(): void;
    getImplementationfileglobpatternresponse(): ImplementationFileGlobPatternResponse | undefined;
    setImplementationfileglobpatternresponse(value?: ImplementationFileGlobPatternResponse): Message;

    hasSuiteexecutionresultitem(): boolean;
    clearSuiteexecutionresultitem(): void;
    getSuiteexecutionresultitem(): SuiteExecutionResultItem | undefined;
    setSuiteexecutionresultitem(value?: SuiteExecutionResultItem): Message;

    hasKeepalive(): boolean;
    clearKeepalive(): void;
    getKeepalive(): KeepAlive | undefined;
    setKeepalive(value?: KeepAlive): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        messagetype: Message.MessageType,
        messageid: number,
        executionstartingrequest?: ExecutionStartingRequest.AsObject,
        specexecutionstartingrequest?: SpecExecutionStartingRequest.AsObject,
        specexecutionendingrequest?: SpecExecutionEndingRequest.AsObject,
        scenarioexecutionstartingrequest?: ScenarioExecutionStartingRequest.AsObject,
        scenarioexecutionendingrequest?: ScenarioExecutionEndingRequest.AsObject,
        stepexecutionstartingrequest?: StepExecutionStartingRequest.AsObject,
        stepexecutionendingrequest?: StepExecutionEndingRequest.AsObject,
        executesteprequest?: ExecuteStepRequest.AsObject,
        executionendingrequest?: ExecutionEndingRequest.AsObject,
        stepvalidaterequest?: StepValidateRequest.AsObject,
        stepvalidateresponse?: StepValidateResponse.AsObject,
        executionstatusresponse?: ExecutionStatusResponse.AsObject,
        stepnamesrequest?: StepNamesRequest.AsObject,
        stepnamesresponse?: StepNamesResponse.AsObject,
        suiteexecutionresult?: SuiteExecutionResult.AsObject,
        killprocessrequest?: KillProcessRequest.AsObject,
        scenariodatastoreinitrequest?: ScenarioDataStoreInitRequest.AsObject,
        specdatastoreinitrequest?: SpecDataStoreInitRequest.AsObject,
        suitedatastoreinitrequest?: SuiteDataStoreInitRequest.AsObject,
        stepnamerequest?: StepNameRequest.AsObject,
        stepnameresponse?: StepNameResponse.AsObject,
        refactorrequest?: RefactorRequest.AsObject,
        refactorresponse?: RefactorResponse.AsObject,
        unsupportedmessageresponse?: UnsupportedMessageResponse.AsObject,
        cachefilerequest?: CacheFileRequest.AsObject,
        steppositionsrequest?: StepPositionsRequest.AsObject,
        steppositionsresponse?: StepPositionsResponse.AsObject,
        implementationfilelistrequest?: ImplementationFileListRequest.AsObject,
        implementationfilelistresponse?: ImplementationFileListResponse.AsObject,
        stubimplementationcoderequest?: StubImplementationCodeRequest.AsObject,
        filediff?: FileDiff.AsObject,
        implementationfileglobpatternrequest?: ImplementationFileGlobPatternRequest.AsObject,
        implementationfileglobpatternresponse?: ImplementationFileGlobPatternResponse.AsObject,
        suiteexecutionresultitem?: SuiteExecutionResultItem.AsObject,
        keepalive?: KeepAlive.AsObject,
    }

    export enum MessageType {
    EXECUTIONSTARTING = 0,
    SPECEXECUTIONSTARTING = 1,
    SPECEXECUTIONENDING = 2,
    SCENARIOEXECUTIONSTARTING = 3,
    SCENARIOEXECUTIONENDING = 4,
    STEPEXECUTIONSTARTING = 5,
    STEPEXECUTIONENDING = 6,
    EXECUTESTEP = 7,
    EXECUTIONENDING = 8,
    STEPVALIDATEREQUEST = 9,
    STEPVALIDATERESPONSE = 10,
    EXECUTIONSTATUSRESPONSE = 11,
    STEPNAMESREQUEST = 12,
    STEPNAMESRESPONSE = 13,
    KILLPROCESSREQUEST = 14,
    SUITEEXECUTIONRESULT = 15,
    SCENARIODATASTOREINIT = 16,
    SPECDATASTOREINIT = 17,
    SUITEDATASTOREINIT = 18,
    STEPNAMEREQUEST = 19,
    STEPNAMERESPONSE = 20,
    REFACTORREQUEST = 21,
    REFACTORRESPONSE = 22,
    UNSUPPORTEDMESSAGERESPONSE = 23,
    CACHEFILEREQUEST = 24,
    STEPPOSITIONSREQUEST = 25,
    STEPPOSITIONSRESPONSE = 26,
    IMPLEMENTATIONFILELISTREQUEST = 27,
    IMPLEMENTATIONFILELISTRESPONSE = 28,
    STUBIMPLEMENTATIONCODEREQUEST = 29,
    FILEDIFF = 30,
    IMPLEMENTATIONFILEGLOBPATTERNREQUEST = 31,
    IMPLEMENTATIONFILEGLOBPATTERNRESPONSE = 32,
    SUITEEXECUTIONRESULTITEM = 33,
    KEEPALIVE = 34,
    }

}
