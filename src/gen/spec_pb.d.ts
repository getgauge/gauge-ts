// package: gauge.messages
// file: spec.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ProtoSpec extends jspb.Message { 
    getSpecheading(): string;
    setSpecheading(value: string): ProtoSpec;
    clearItemsList(): void;
    getItemsList(): Array<ProtoItem>;
    setItemsList(value: Array<ProtoItem>): ProtoSpec;
    addItems(value?: ProtoItem, index?: number): ProtoItem;
    getIstabledriven(): boolean;
    setIstabledriven(value: boolean): ProtoSpec;
    clearPrehookfailuresList(): void;
    getPrehookfailuresList(): Array<ProtoHookFailure>;
    setPrehookfailuresList(value: Array<ProtoHookFailure>): ProtoSpec;
    addPrehookfailures(value?: ProtoHookFailure, index?: number): ProtoHookFailure;
    clearPosthookfailuresList(): void;
    getPosthookfailuresList(): Array<ProtoHookFailure>;
    setPosthookfailuresList(value: Array<ProtoHookFailure>): ProtoSpec;
    addPosthookfailures(value?: ProtoHookFailure, index?: number): ProtoHookFailure;
    getFilename(): string;
    setFilename(value: string): ProtoSpec;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): ProtoSpec;
    addTags(value: string, index?: number): string;
    clearPrehookmessagesList(): void;
    getPrehookmessagesList(): Array<string>;
    setPrehookmessagesList(value: Array<string>): ProtoSpec;
    addPrehookmessages(value: string, index?: number): string;
    clearPosthookmessagesList(): void;
    getPosthookmessagesList(): Array<string>;
    setPosthookmessagesList(value: Array<string>): ProtoSpec;
    addPosthookmessages(value: string, index?: number): string;
    clearPrehookmessageList(): void;
    getPrehookmessageList(): Array<string>;
    setPrehookmessageList(value: Array<string>): ProtoSpec;
    addPrehookmessage(value: string, index?: number): string;
    clearPosthookmessageList(): void;
    getPosthookmessageList(): Array<string>;
    setPosthookmessageList(value: Array<string>): ProtoSpec;
    addPosthookmessage(value: string, index?: number): string;
    clearPrehookscreenshotsList(): void;
    getPrehookscreenshotsList(): Array<Uint8Array | string>;
    getPrehookscreenshotsList_asU8(): Array<Uint8Array>;
    getPrehookscreenshotsList_asB64(): Array<string>;
    setPrehookscreenshotsList(value: Array<Uint8Array | string>): ProtoSpec;
    addPrehookscreenshots(value: Uint8Array | string, index?: number): Uint8Array | string;
    clearPosthookscreenshotsList(): void;
    getPosthookscreenshotsList(): Array<Uint8Array | string>;
    getPosthookscreenshotsList_asU8(): Array<Uint8Array>;
    getPosthookscreenshotsList_asB64(): Array<string>;
    setPosthookscreenshotsList(value: Array<Uint8Array | string>): ProtoSpec;
    addPosthookscreenshots(value: Uint8Array | string, index?: number): Uint8Array | string;
    getItemcount(): number;
    setItemcount(value: number): ProtoSpec;
    clearPrehookscreenshotfilesList(): void;
    getPrehookscreenshotfilesList(): Array<string>;
    setPrehookscreenshotfilesList(value: Array<string>): ProtoSpec;
    addPrehookscreenshotfiles(value: string, index?: number): string;
    clearPosthookscreenshotfilesList(): void;
    getPosthookscreenshotfilesList(): Array<string>;
    setPosthookscreenshotfilesList(value: Array<string>): ProtoSpec;
    addPosthookscreenshotfiles(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoSpec): ProtoSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoSpec;
    static deserializeBinaryFromReader(message: ProtoSpec, reader: jspb.BinaryReader): ProtoSpec;
}

export namespace ProtoSpec {
    export type AsObject = {
        specheading: string,
        itemsList: Array<ProtoItem.AsObject>,
        istabledriven: boolean,
        prehookfailuresList: Array<ProtoHookFailure.AsObject>,
        posthookfailuresList: Array<ProtoHookFailure.AsObject>,
        filename: string,
        tagsList: Array<string>,
        prehookmessagesList: Array<string>,
        posthookmessagesList: Array<string>,
        prehookmessageList: Array<string>,
        posthookmessageList: Array<string>,
        prehookscreenshotsList: Array<Uint8Array | string>,
        posthookscreenshotsList: Array<Uint8Array | string>,
        itemcount: number,
        prehookscreenshotfilesList: Array<string>,
        posthookscreenshotfilesList: Array<string>,
    }
}

export class ProtoItem extends jspb.Message { 
    getItemtype(): ProtoItem.ItemType;
    setItemtype(value: ProtoItem.ItemType): ProtoItem;

    hasStep(): boolean;
    clearStep(): void;
    getStep(): ProtoStep | undefined;
    setStep(value?: ProtoStep): ProtoItem;

    hasConcept(): boolean;
    clearConcept(): void;
    getConcept(): ProtoConcept | undefined;
    setConcept(value?: ProtoConcept): ProtoItem;

    hasScenario(): boolean;
    clearScenario(): void;
    getScenario(): ProtoScenario | undefined;
    setScenario(value?: ProtoScenario): ProtoItem;

    hasTabledrivenscenario(): boolean;
    clearTabledrivenscenario(): void;
    getTabledrivenscenario(): ProtoTableDrivenScenario | undefined;
    setTabledrivenscenario(value?: ProtoTableDrivenScenario): ProtoItem;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): ProtoComment | undefined;
    setComment(value?: ProtoComment): ProtoItem;

    hasTable(): boolean;
    clearTable(): void;
    getTable(): ProtoTable | undefined;
    setTable(value?: ProtoTable): ProtoItem;

    hasTags(): boolean;
    clearTags(): void;
    getTags(): ProtoTags | undefined;
    setTags(value?: ProtoTags): ProtoItem;
    getFilename(): string;
    setFilename(value: string): ProtoItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoItem.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoItem): ProtoItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoItem;
    static deserializeBinaryFromReader(message: ProtoItem, reader: jspb.BinaryReader): ProtoItem;
}

export namespace ProtoItem {
    export type AsObject = {
        itemtype: ProtoItem.ItemType,
        step?: ProtoStep.AsObject,
        concept?: ProtoConcept.AsObject,
        scenario?: ProtoScenario.AsObject,
        tabledrivenscenario?: ProtoTableDrivenScenario.AsObject,
        comment?: ProtoComment.AsObject,
        table?: ProtoTable.AsObject,
        tags?: ProtoTags.AsObject,
        filename: string,
    }

    export enum ItemType {
    STEP = 0,
    COMMENT = 1,
    CONCEPT = 2,
    SCENARIO = 3,
    TABLEDRIVENSCENARIO = 4,
    TABLE = 5,
    TAGS = 6,
    }

}

export class ProtoScenario extends jspb.Message { 
    getScenarioheading(): string;
    setScenarioheading(value: string): ProtoScenario;
    getFailed(): boolean;
    setFailed(value: boolean): ProtoScenario;
    clearContextsList(): void;
    getContextsList(): Array<ProtoItem>;
    setContextsList(value: Array<ProtoItem>): ProtoScenario;
    addContexts(value?: ProtoItem, index?: number): ProtoItem;
    clearScenarioitemsList(): void;
    getScenarioitemsList(): Array<ProtoItem>;
    setScenarioitemsList(value: Array<ProtoItem>): ProtoScenario;
    addScenarioitems(value?: ProtoItem, index?: number): ProtoItem;

    hasPrehookfailure(): boolean;
    clearPrehookfailure(): void;
    getPrehookfailure(): ProtoHookFailure | undefined;
    setPrehookfailure(value?: ProtoHookFailure): ProtoScenario;

    hasPosthookfailure(): boolean;
    clearPosthookfailure(): void;
    getPosthookfailure(): ProtoHookFailure | undefined;
    setPosthookfailure(value?: ProtoHookFailure): ProtoScenario;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): ProtoScenario;
    addTags(value: string, index?: number): string;
    getExecutiontime(): number;
    setExecutiontime(value: number): ProtoScenario;
    getSkipped(): boolean;
    setSkipped(value: boolean): ProtoScenario;
    clearSkiperrorsList(): void;
    getSkiperrorsList(): Array<string>;
    setSkiperrorsList(value: Array<string>): ProtoScenario;
    addSkiperrors(value: string, index?: number): string;
    getId(): string;
    setId(value: string): ProtoScenario;
    clearTeardownstepsList(): void;
    getTeardownstepsList(): Array<ProtoItem>;
    setTeardownstepsList(value: Array<ProtoItem>): ProtoScenario;
    addTeardownsteps(value?: ProtoItem, index?: number): ProtoItem;

    hasSpan(): boolean;
    clearSpan(): void;
    getSpan(): Span | undefined;
    setSpan(value?: Span): ProtoScenario;
    getExecutionstatus(): ExecutionStatus;
    setExecutionstatus(value: ExecutionStatus): ProtoScenario;
    clearPrehookmessagesList(): void;
    getPrehookmessagesList(): Array<string>;
    setPrehookmessagesList(value: Array<string>): ProtoScenario;
    addPrehookmessages(value: string, index?: number): string;
    clearPosthookmessagesList(): void;
    getPosthookmessagesList(): Array<string>;
    setPosthookmessagesList(value: Array<string>): ProtoScenario;
    addPosthookmessages(value: string, index?: number): string;
    clearPrehookmessageList(): void;
    getPrehookmessageList(): Array<string>;
    setPrehookmessageList(value: Array<string>): ProtoScenario;
    addPrehookmessage(value: string, index?: number): string;
    clearPosthookmessageList(): void;
    getPosthookmessageList(): Array<string>;
    setPosthookmessageList(value: Array<string>): ProtoScenario;
    addPosthookmessage(value: string, index?: number): string;
    clearPrehookscreenshotsList(): void;
    getPrehookscreenshotsList(): Array<Uint8Array | string>;
    getPrehookscreenshotsList_asU8(): Array<Uint8Array>;
    getPrehookscreenshotsList_asB64(): Array<string>;
    setPrehookscreenshotsList(value: Array<Uint8Array | string>): ProtoScenario;
    addPrehookscreenshots(value: Uint8Array | string, index?: number): Uint8Array | string;
    clearPosthookscreenshotsList(): void;
    getPosthookscreenshotsList(): Array<Uint8Array | string>;
    getPosthookscreenshotsList_asU8(): Array<Uint8Array>;
    getPosthookscreenshotsList_asB64(): Array<string>;
    setPosthookscreenshotsList(value: Array<Uint8Array | string>): ProtoScenario;
    addPosthookscreenshots(value: Uint8Array | string, index?: number): Uint8Array | string;
    clearPrehookscreenshotfilesList(): void;
    getPrehookscreenshotfilesList(): Array<string>;
    setPrehookscreenshotfilesList(value: Array<string>): ProtoScenario;
    addPrehookscreenshotfiles(value: string, index?: number): string;
    clearPosthookscreenshotfilesList(): void;
    getPosthookscreenshotfilesList(): Array<string>;
    setPosthookscreenshotfilesList(value: Array<string>): ProtoScenario;
    addPosthookscreenshotfiles(value: string, index?: number): string;
    getRetriescount(): number;
    setRetriescount(value: number): ProtoScenario;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoScenario.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoScenario): ProtoScenario.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoScenario, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoScenario;
    static deserializeBinaryFromReader(message: ProtoScenario, reader: jspb.BinaryReader): ProtoScenario;
}

export namespace ProtoScenario {
    export type AsObject = {
        scenarioheading: string,
        failed: boolean,
        contextsList: Array<ProtoItem.AsObject>,
        scenarioitemsList: Array<ProtoItem.AsObject>,
        prehookfailure?: ProtoHookFailure.AsObject,
        posthookfailure?: ProtoHookFailure.AsObject,
        tagsList: Array<string>,
        executiontime: number,
        skipped: boolean,
        skiperrorsList: Array<string>,
        id: string,
        teardownstepsList: Array<ProtoItem.AsObject>,
        span?: Span.AsObject,
        executionstatus: ExecutionStatus,
        prehookmessagesList: Array<string>,
        posthookmessagesList: Array<string>,
        prehookmessageList: Array<string>,
        posthookmessageList: Array<string>,
        prehookscreenshotsList: Array<Uint8Array | string>,
        posthookscreenshotsList: Array<Uint8Array | string>,
        prehookscreenshotfilesList: Array<string>,
        posthookscreenshotfilesList: Array<string>,
        retriescount: number,
    }
}

export class Span extends jspb.Message { 
    getStart(): number;
    setStart(value: number): Span;
    getEnd(): number;
    setEnd(value: number): Span;
    getStartchar(): number;
    setStartchar(value: number): Span;
    getEndchar(): number;
    setEndchar(value: number): Span;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Span.AsObject;
    static toObject(includeInstance: boolean, msg: Span): Span.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Span, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Span;
    static deserializeBinaryFromReader(message: Span, reader: jspb.BinaryReader): Span;
}

export namespace Span {
    export type AsObject = {
        start: number,
        end: number,
        startchar: number,
        endchar: number,
    }
}

export class ProtoTableDrivenScenario extends jspb.Message { 

    hasScenario(): boolean;
    clearScenario(): void;
    getScenario(): ProtoScenario | undefined;
    setScenario(value?: ProtoScenario): ProtoTableDrivenScenario;
    getTablerowindex(): number;
    setTablerowindex(value: number): ProtoTableDrivenScenario;
    getScenariotablerowindex(): number;
    setScenariotablerowindex(value: number): ProtoTableDrivenScenario;
    getIsspectabledriven(): boolean;
    setIsspectabledriven(value: boolean): ProtoTableDrivenScenario;
    getIsscenariotabledriven(): boolean;
    setIsscenariotabledriven(value: boolean): ProtoTableDrivenScenario;

    hasScenariodatatable(): boolean;
    clearScenariodatatable(): void;
    getScenariodatatable(): ProtoTable | undefined;
    setScenariodatatable(value?: ProtoTable): ProtoTableDrivenScenario;

    hasScenariotablerow(): boolean;
    clearScenariotablerow(): void;
    getScenariotablerow(): ProtoTable | undefined;
    setScenariotablerow(value?: ProtoTable): ProtoTableDrivenScenario;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoTableDrivenScenario.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoTableDrivenScenario): ProtoTableDrivenScenario.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoTableDrivenScenario, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoTableDrivenScenario;
    static deserializeBinaryFromReader(message: ProtoTableDrivenScenario, reader: jspb.BinaryReader): ProtoTableDrivenScenario;
}

export namespace ProtoTableDrivenScenario {
    export type AsObject = {
        scenario?: ProtoScenario.AsObject,
        tablerowindex: number,
        scenariotablerowindex: number,
        isspectabledriven: boolean,
        isscenariotabledriven: boolean,
        scenariodatatable?: ProtoTable.AsObject,
        scenariotablerow?: ProtoTable.AsObject,
    }
}

export class ProtoStep extends jspb.Message { 
    getActualtext(): string;
    setActualtext(value: string): ProtoStep;
    getParsedtext(): string;
    setParsedtext(value: string): ProtoStep;
    clearFragmentsList(): void;
    getFragmentsList(): Array<Fragment>;
    setFragmentsList(value: Array<Fragment>): ProtoStep;
    addFragments(value?: Fragment, index?: number): Fragment;

    hasStepexecutionresult(): boolean;
    clearStepexecutionresult(): void;
    getStepexecutionresult(): ProtoStepExecutionResult | undefined;
    setStepexecutionresult(value?: ProtoStepExecutionResult): ProtoStep;
    clearPrehookmessagesList(): void;
    getPrehookmessagesList(): Array<string>;
    setPrehookmessagesList(value: Array<string>): ProtoStep;
    addPrehookmessages(value: string, index?: number): string;
    clearPosthookmessagesList(): void;
    getPosthookmessagesList(): Array<string>;
    setPosthookmessagesList(value: Array<string>): ProtoStep;
    addPosthookmessages(value: string, index?: number): string;
    clearPrehookscreenshotsList(): void;
    getPrehookscreenshotsList(): Array<Uint8Array | string>;
    getPrehookscreenshotsList_asU8(): Array<Uint8Array>;
    getPrehookscreenshotsList_asB64(): Array<string>;
    setPrehookscreenshotsList(value: Array<Uint8Array | string>): ProtoStep;
    addPrehookscreenshots(value: Uint8Array | string, index?: number): Uint8Array | string;
    clearPosthookscreenshotsList(): void;
    getPosthookscreenshotsList(): Array<Uint8Array | string>;
    getPosthookscreenshotsList_asU8(): Array<Uint8Array>;
    getPosthookscreenshotsList_asB64(): Array<string>;
    setPosthookscreenshotsList(value: Array<Uint8Array | string>): ProtoStep;
    addPosthookscreenshots(value: Uint8Array | string, index?: number): Uint8Array | string;
    clearPrehookscreenshotfilesList(): void;
    getPrehookscreenshotfilesList(): Array<string>;
    setPrehookscreenshotfilesList(value: Array<string>): ProtoStep;
    addPrehookscreenshotfiles(value: string, index?: number): string;
    clearPosthookscreenshotfilesList(): void;
    getPosthookscreenshotfilesList(): Array<string>;
    setPosthookscreenshotfilesList(value: Array<string>): ProtoStep;
    addPosthookscreenshotfiles(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoStep.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoStep): ProtoStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoStep;
    static deserializeBinaryFromReader(message: ProtoStep, reader: jspb.BinaryReader): ProtoStep;
}

export namespace ProtoStep {
    export type AsObject = {
        actualtext: string,
        parsedtext: string,
        fragmentsList: Array<Fragment.AsObject>,
        stepexecutionresult?: ProtoStepExecutionResult.AsObject,
        prehookmessagesList: Array<string>,
        posthookmessagesList: Array<string>,
        prehookscreenshotsList: Array<Uint8Array | string>,
        posthookscreenshotsList: Array<Uint8Array | string>,
        prehookscreenshotfilesList: Array<string>,
        posthookscreenshotfilesList: Array<string>,
    }
}

export class ProtoConcept extends jspb.Message { 

    hasConceptstep(): boolean;
    clearConceptstep(): void;
    getConceptstep(): ProtoStep | undefined;
    setConceptstep(value?: ProtoStep): ProtoConcept;
    clearStepsList(): void;
    getStepsList(): Array<ProtoItem>;
    setStepsList(value: Array<ProtoItem>): ProtoConcept;
    addSteps(value?: ProtoItem, index?: number): ProtoItem;

    hasConceptexecutionresult(): boolean;
    clearConceptexecutionresult(): void;
    getConceptexecutionresult(): ProtoStepExecutionResult | undefined;
    setConceptexecutionresult(value?: ProtoStepExecutionResult): ProtoConcept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoConcept.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoConcept): ProtoConcept.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoConcept, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoConcept;
    static deserializeBinaryFromReader(message: ProtoConcept, reader: jspb.BinaryReader): ProtoConcept;
}

export namespace ProtoConcept {
    export type AsObject = {
        conceptstep?: ProtoStep.AsObject,
        stepsList: Array<ProtoItem.AsObject>,
        conceptexecutionresult?: ProtoStepExecutionResult.AsObject,
    }
}

export class ProtoTags extends jspb.Message { 
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): ProtoTags;
    addTags(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoTags.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoTags): ProtoTags.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoTags, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoTags;
    static deserializeBinaryFromReader(message: ProtoTags, reader: jspb.BinaryReader): ProtoTags;
}

export namespace ProtoTags {
    export type AsObject = {
        tagsList: Array<string>,
    }
}

export class Fragment extends jspb.Message { 
    getFragmenttype(): Fragment.FragmentType;
    setFragmenttype(value: Fragment.FragmentType): Fragment;
    getText(): string;
    setText(value: string): Fragment;

    hasParameter(): boolean;
    clearParameter(): void;
    getParameter(): Parameter | undefined;
    setParameter(value?: Parameter): Fragment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fragment.AsObject;
    static toObject(includeInstance: boolean, msg: Fragment): Fragment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fragment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fragment;
    static deserializeBinaryFromReader(message: Fragment, reader: jspb.BinaryReader): Fragment;
}

export namespace Fragment {
    export type AsObject = {
        fragmenttype: Fragment.FragmentType,
        text: string,
        parameter?: Parameter.AsObject,
    }

    export enum FragmentType {
    TEXT = 0,
    PARAMETER = 1,
    }

}

export class Parameter extends jspb.Message { 
    getParametertype(): Parameter.ParameterType;
    setParametertype(value: Parameter.ParameterType): Parameter;
    getValue(): string;
    setValue(value: string): Parameter;
    getName(): string;
    setName(value: string): Parameter;

    hasTable(): boolean;
    clearTable(): void;
    getTable(): ProtoTable | undefined;
    setTable(value?: ProtoTable): Parameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Parameter.AsObject;
    static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Parameter;
    static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
}

export namespace Parameter {
    export type AsObject = {
        parametertype: Parameter.ParameterType,
        value: string,
        name: string,
        table?: ProtoTable.AsObject,
    }

    export enum ParameterType {
    STATIC = 0,
    DYNAMIC = 1,
    SPECIAL_STRING = 2,
    SPECIAL_TABLE = 3,
    TABLE = 4,
    }

}

export class ProtoComment extends jspb.Message { 
    getText(): string;
    setText(value: string): ProtoComment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoComment.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoComment): ProtoComment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoComment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoComment;
    static deserializeBinaryFromReader(message: ProtoComment, reader: jspb.BinaryReader): ProtoComment;
}

export namespace ProtoComment {
    export type AsObject = {
        text: string,
    }
}

export class ProtoTable extends jspb.Message { 

    hasHeaders(): boolean;
    clearHeaders(): void;
    getHeaders(): ProtoTableRow | undefined;
    setHeaders(value?: ProtoTableRow): ProtoTable;
    clearRowsList(): void;
    getRowsList(): Array<ProtoTableRow>;
    setRowsList(value: Array<ProtoTableRow>): ProtoTable;
    addRows(value?: ProtoTableRow, index?: number): ProtoTableRow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoTable.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoTable): ProtoTable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoTable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoTable;
    static deserializeBinaryFromReader(message: ProtoTable, reader: jspb.BinaryReader): ProtoTable;
}

export namespace ProtoTable {
    export type AsObject = {
        headers?: ProtoTableRow.AsObject,
        rowsList: Array<ProtoTableRow.AsObject>,
    }
}

export class ProtoTableRow extends jspb.Message { 
    clearCellsList(): void;
    getCellsList(): Array<string>;
    setCellsList(value: Array<string>): ProtoTableRow;
    addCells(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoTableRow.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoTableRow): ProtoTableRow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoTableRow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoTableRow;
    static deserializeBinaryFromReader(message: ProtoTableRow, reader: jspb.BinaryReader): ProtoTableRow;
}

export namespace ProtoTableRow {
    export type AsObject = {
        cellsList: Array<string>,
    }
}

export class ProtoStepExecutionResult extends jspb.Message { 

    hasExecutionresult(): boolean;
    clearExecutionresult(): void;
    getExecutionresult(): ProtoExecutionResult | undefined;
    setExecutionresult(value?: ProtoExecutionResult): ProtoStepExecutionResult;

    hasPrehookfailure(): boolean;
    clearPrehookfailure(): void;
    getPrehookfailure(): ProtoHookFailure | undefined;
    setPrehookfailure(value?: ProtoHookFailure): ProtoStepExecutionResult;

    hasPosthookfailure(): boolean;
    clearPosthookfailure(): void;
    getPosthookfailure(): ProtoHookFailure | undefined;
    setPosthookfailure(value?: ProtoHookFailure): ProtoStepExecutionResult;
    getSkipped(): boolean;
    setSkipped(value: boolean): ProtoStepExecutionResult;
    getSkippedreason(): string;
    setSkippedreason(value: string): ProtoStepExecutionResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoStepExecutionResult.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoStepExecutionResult): ProtoStepExecutionResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoStepExecutionResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoStepExecutionResult;
    static deserializeBinaryFromReader(message: ProtoStepExecutionResult, reader: jspb.BinaryReader): ProtoStepExecutionResult;
}

export namespace ProtoStepExecutionResult {
    export type AsObject = {
        executionresult?: ProtoExecutionResult.AsObject,
        prehookfailure?: ProtoHookFailure.AsObject,
        posthookfailure?: ProtoHookFailure.AsObject,
        skipped: boolean,
        skippedreason: string,
    }
}

export class ProtoExecutionResult extends jspb.Message { 
    getFailed(): boolean;
    setFailed(value: boolean): ProtoExecutionResult;
    getRecoverableerror(): boolean;
    setRecoverableerror(value: boolean): ProtoExecutionResult;
    getErrormessage(): string;
    setErrormessage(value: string): ProtoExecutionResult;
    getStacktrace(): string;
    setStacktrace(value: string): ProtoExecutionResult;
    getScreenshot(): Uint8Array | string;
    getScreenshot_asU8(): Uint8Array;
    getScreenshot_asB64(): string;
    setScreenshot(value: Uint8Array | string): ProtoExecutionResult;
    getExecutiontime(): number;
    setExecutiontime(value: number): ProtoExecutionResult;
    clearMessageList(): void;
    getMessageList(): Array<string>;
    setMessageList(value: Array<string>): ProtoExecutionResult;
    addMessage(value: string, index?: number): string;
    getErrortype(): ProtoExecutionResult.ErrorType;
    setErrortype(value: ProtoExecutionResult.ErrorType): ProtoExecutionResult;
    getFailurescreenshot(): Uint8Array | string;
    getFailurescreenshot_asU8(): Uint8Array;
    getFailurescreenshot_asB64(): string;
    setFailurescreenshot(value: Uint8Array | string): ProtoExecutionResult;
    clearScreenshotsList(): void;
    getScreenshotsList(): Array<Uint8Array | string>;
    getScreenshotsList_asU8(): Array<Uint8Array>;
    getScreenshotsList_asB64(): Array<string>;
    setScreenshotsList(value: Array<Uint8Array | string>): ProtoExecutionResult;
    addScreenshots(value: Uint8Array | string, index?: number): Uint8Array | string;
    getFailurescreenshotfile(): string;
    setFailurescreenshotfile(value: string): ProtoExecutionResult;
    clearScreenshotfilesList(): void;
    getScreenshotfilesList(): Array<string>;
    setScreenshotfilesList(value: Array<string>): ProtoExecutionResult;
    addScreenshotfiles(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoExecutionResult.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoExecutionResult): ProtoExecutionResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoExecutionResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoExecutionResult;
    static deserializeBinaryFromReader(message: ProtoExecutionResult, reader: jspb.BinaryReader): ProtoExecutionResult;
}

export namespace ProtoExecutionResult {
    export type AsObject = {
        failed: boolean,
        recoverableerror: boolean,
        errormessage: string,
        stacktrace: string,
        screenshot: Uint8Array | string,
        executiontime: number,
        messageList: Array<string>,
        errortype: ProtoExecutionResult.ErrorType,
        failurescreenshot: Uint8Array | string,
        screenshotsList: Array<Uint8Array | string>,
        failurescreenshotfile: string,
        screenshotfilesList: Array<string>,
    }

    export enum ErrorType {
    ASSERTION = 0,
    VERIFICATION = 1,
    }

}

export class ProtoHookFailure extends jspb.Message { 
    getStacktrace(): string;
    setStacktrace(value: string): ProtoHookFailure;
    getErrormessage(): string;
    setErrormessage(value: string): ProtoHookFailure;
    getScreenshot(): Uint8Array | string;
    getScreenshot_asU8(): Uint8Array;
    getScreenshot_asB64(): string;
    setScreenshot(value: Uint8Array | string): ProtoHookFailure;
    getTablerowindex(): number;
    setTablerowindex(value: number): ProtoHookFailure;
    getFailurescreenshot(): Uint8Array | string;
    getFailurescreenshot_asU8(): Uint8Array;
    getFailurescreenshot_asB64(): string;
    setFailurescreenshot(value: Uint8Array | string): ProtoHookFailure;
    getFailurescreenshotfile(): string;
    setFailurescreenshotfile(value: string): ProtoHookFailure;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoHookFailure.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoHookFailure): ProtoHookFailure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoHookFailure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoHookFailure;
    static deserializeBinaryFromReader(message: ProtoHookFailure, reader: jspb.BinaryReader): ProtoHookFailure;
}

export namespace ProtoHookFailure {
    export type AsObject = {
        stacktrace: string,
        errormessage: string,
        screenshot: Uint8Array | string,
        tablerowindex: number,
        failurescreenshot: Uint8Array | string,
        failurescreenshotfile: string,
    }
}

export class ProtoSuiteResult extends jspb.Message { 
    clearSpecresultsList(): void;
    getSpecresultsList(): Array<ProtoSpecResult>;
    setSpecresultsList(value: Array<ProtoSpecResult>): ProtoSuiteResult;
    addSpecresults(value?: ProtoSpecResult, index?: number): ProtoSpecResult;

    hasPrehookfailure(): boolean;
    clearPrehookfailure(): void;
    getPrehookfailure(): ProtoHookFailure | undefined;
    setPrehookfailure(value?: ProtoHookFailure): ProtoSuiteResult;

    hasPosthookfailure(): boolean;
    clearPosthookfailure(): void;
    getPosthookfailure(): ProtoHookFailure | undefined;
    setPosthookfailure(value?: ProtoHookFailure): ProtoSuiteResult;
    getFailed(): boolean;
    setFailed(value: boolean): ProtoSuiteResult;
    getSpecsfailedcount(): number;
    setSpecsfailedcount(value: number): ProtoSuiteResult;
    getExecutiontime(): number;
    setExecutiontime(value: number): ProtoSuiteResult;
    getSuccessrate(): number;
    setSuccessrate(value: number): ProtoSuiteResult;
    getEnvironment(): string;
    setEnvironment(value: string): ProtoSuiteResult;
    getTags(): string;
    setTags(value: string): ProtoSuiteResult;
    getProjectname(): string;
    setProjectname(value: string): ProtoSuiteResult;
    getTimestamp(): string;
    setTimestamp(value: string): ProtoSuiteResult;
    getSpecsskippedcount(): number;
    setSpecsskippedcount(value: number): ProtoSuiteResult;
    clearPrehookmessagesList(): void;
    getPrehookmessagesList(): Array<string>;
    setPrehookmessagesList(value: Array<string>): ProtoSuiteResult;
    addPrehookmessages(value: string, index?: number): string;
    clearPosthookmessagesList(): void;
    getPosthookmessagesList(): Array<string>;
    setPosthookmessagesList(value: Array<string>): ProtoSuiteResult;
    addPosthookmessages(value: string, index?: number): string;
    clearPrehookmessageList(): void;
    getPrehookmessageList(): Array<string>;
    setPrehookmessageList(value: Array<string>): ProtoSuiteResult;
    addPrehookmessage(value: string, index?: number): string;
    clearPosthookmessageList(): void;
    getPosthookmessageList(): Array<string>;
    setPosthookmessageList(value: Array<string>): ProtoSuiteResult;
    addPosthookmessage(value: string, index?: number): string;
    clearPrehookscreenshotsList(): void;
    getPrehookscreenshotsList(): Array<Uint8Array | string>;
    getPrehookscreenshotsList_asU8(): Array<Uint8Array>;
    getPrehookscreenshotsList_asB64(): Array<string>;
    setPrehookscreenshotsList(value: Array<Uint8Array | string>): ProtoSuiteResult;
    addPrehookscreenshots(value: Uint8Array | string, index?: number): Uint8Array | string;
    clearPosthookscreenshotsList(): void;
    getPosthookscreenshotsList(): Array<Uint8Array | string>;
    getPosthookscreenshotsList_asU8(): Array<Uint8Array>;
    getPosthookscreenshotsList_asB64(): Array<string>;
    setPosthookscreenshotsList(value: Array<Uint8Array | string>): ProtoSuiteResult;
    addPosthookscreenshots(value: Uint8Array | string, index?: number): Uint8Array | string;
    getChunked(): boolean;
    setChunked(value: boolean): ProtoSuiteResult;
    getChunksize(): number;
    setChunksize(value: number): ProtoSuiteResult;
    clearPrehookscreenshotfilesList(): void;
    getPrehookscreenshotfilesList(): Array<string>;
    setPrehookscreenshotfilesList(value: Array<string>): ProtoSuiteResult;
    addPrehookscreenshotfiles(value: string, index?: number): string;
    clearPosthookscreenshotfilesList(): void;
    getPosthookscreenshotfilesList(): Array<string>;
    setPosthookscreenshotfilesList(value: Array<string>): ProtoSuiteResult;
    addPosthookscreenshotfiles(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoSuiteResult.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoSuiteResult): ProtoSuiteResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoSuiteResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoSuiteResult;
    static deserializeBinaryFromReader(message: ProtoSuiteResult, reader: jspb.BinaryReader): ProtoSuiteResult;
}

export namespace ProtoSuiteResult {
    export type AsObject = {
        specresultsList: Array<ProtoSpecResult.AsObject>,
        prehookfailure?: ProtoHookFailure.AsObject,
        posthookfailure?: ProtoHookFailure.AsObject,
        failed: boolean,
        specsfailedcount: number,
        executiontime: number,
        successrate: number,
        environment: string,
        tags: string,
        projectname: string,
        timestamp: string,
        specsskippedcount: number,
        prehookmessagesList: Array<string>,
        posthookmessagesList: Array<string>,
        prehookmessageList: Array<string>,
        posthookmessageList: Array<string>,
        prehookscreenshotsList: Array<Uint8Array | string>,
        posthookscreenshotsList: Array<Uint8Array | string>,
        chunked: boolean,
        chunksize: number,
        prehookscreenshotfilesList: Array<string>,
        posthookscreenshotfilesList: Array<string>,
    }
}

export class ProtoSpecResult extends jspb.Message { 

    hasProtospec(): boolean;
    clearProtospec(): void;
    getProtospec(): ProtoSpec | undefined;
    setProtospec(value?: ProtoSpec): ProtoSpecResult;
    getScenariocount(): number;
    setScenariocount(value: number): ProtoSpecResult;
    getScenariofailedcount(): number;
    setScenariofailedcount(value: number): ProtoSpecResult;
    getFailed(): boolean;
    setFailed(value: boolean): ProtoSpecResult;
    clearFaileddatatablerowsList(): void;
    getFaileddatatablerowsList(): Array<number>;
    setFaileddatatablerowsList(value: Array<number>): ProtoSpecResult;
    addFaileddatatablerows(value: number, index?: number): number;
    getExecutiontime(): number;
    setExecutiontime(value: number): ProtoSpecResult;
    getSkipped(): boolean;
    setSkipped(value: boolean): ProtoSpecResult;
    getScenarioskippedcount(): number;
    setScenarioskippedcount(value: number): ProtoSpecResult;
    clearSkippeddatatablerowsList(): void;
    getSkippeddatatablerowsList(): Array<number>;
    setSkippeddatatablerowsList(value: Array<number>): ProtoSpecResult;
    addSkippeddatatablerows(value: number, index?: number): number;
    clearErrorsList(): void;
    getErrorsList(): Array<Error>;
    setErrorsList(value: Array<Error>): ProtoSpecResult;
    addErrors(value?: Error, index?: number): Error;
    getTimestamp(): string;
    setTimestamp(value: string): ProtoSpecResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoSpecResult.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoSpecResult): ProtoSpecResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoSpecResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoSpecResult;
    static deserializeBinaryFromReader(message: ProtoSpecResult, reader: jspb.BinaryReader): ProtoSpecResult;
}

export namespace ProtoSpecResult {
    export type AsObject = {
        protospec?: ProtoSpec.AsObject,
        scenariocount: number,
        scenariofailedcount: number,
        failed: boolean,
        faileddatatablerowsList: Array<number>,
        executiontime: number,
        skipped: boolean,
        scenarioskippedcount: number,
        skippeddatatablerowsList: Array<number>,
        errorsList: Array<Error.AsObject>,
        timestamp: string,
    }
}

export class ProtoScenarioResult extends jspb.Message { 

    hasProtoitem(): boolean;
    clearProtoitem(): void;
    getProtoitem(): ProtoItem | undefined;
    setProtoitem(value?: ProtoItem): ProtoScenarioResult;
    getExecutiontime(): number;
    setExecutiontime(value: number): ProtoScenarioResult;
    getTimestamp(): string;
    setTimestamp(value: string): ProtoScenarioResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoScenarioResult.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoScenarioResult): ProtoScenarioResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoScenarioResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoScenarioResult;
    static deserializeBinaryFromReader(message: ProtoScenarioResult, reader: jspb.BinaryReader): ProtoScenarioResult;
}

export namespace ProtoScenarioResult {
    export type AsObject = {
        protoitem?: ProtoItem.AsObject,
        executiontime: number,
        timestamp: string,
    }
}

export class ProtoStepResult extends jspb.Message { 

    hasProtoitem(): boolean;
    clearProtoitem(): void;
    getProtoitem(): ProtoItem | undefined;
    setProtoitem(value?: ProtoItem): ProtoStepResult;
    getExecutiontime(): number;
    setExecutiontime(value: number): ProtoStepResult;
    getTimestamp(): string;
    setTimestamp(value: string): ProtoStepResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoStepResult.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoStepResult): ProtoStepResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoStepResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoStepResult;
    static deserializeBinaryFromReader(message: ProtoStepResult, reader: jspb.BinaryReader): ProtoStepResult;
}

export namespace ProtoStepResult {
    export type AsObject = {
        protoitem?: ProtoItem.AsObject,
        executiontime: number,
        timestamp: string,
    }
}

export class Error extends jspb.Message { 
    getType(): Error.ErrorType;
    setType(value: Error.ErrorType): Error;
    getFilename(): string;
    setFilename(value: string): Error;
    getLinenumber(): number;
    setLinenumber(value: number): Error;
    getMessage(): string;
    setMessage(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
    export type AsObject = {
        type: Error.ErrorType,
        filename: string,
        linenumber: number,
        message: string,
    }

    export enum ErrorType {
    PARSE_ERROR = 0,
    VALIDATION_ERROR = 1,
    }

}

export class ProtoStepValue extends jspb.Message { 
    getStepvalue(): string;
    setStepvalue(value: string): ProtoStepValue;
    getParameterizedstepvalue(): string;
    setParameterizedstepvalue(value: string): ProtoStepValue;
    clearParametersList(): void;
    getParametersList(): Array<string>;
    setParametersList(value: Array<string>): ProtoStepValue;
    addParameters(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtoStepValue.AsObject;
    static toObject(includeInstance: boolean, msg: ProtoStepValue): ProtoStepValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtoStepValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtoStepValue;
    static deserializeBinaryFromReader(message: ProtoStepValue, reader: jspb.BinaryReader): ProtoStepValue;
}

export namespace ProtoStepValue {
    export type AsObject = {
        stepvalue: string,
        parameterizedstepvalue: string,
        parametersList: Array<string>,
    }
}

export enum ExecutionStatus {
    NOTEXECUTED = 0,
    PASSED = 1,
    FAILED = 2,
    SKIPPED = 3,
}
