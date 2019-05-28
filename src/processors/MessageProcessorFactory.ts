import { EventEmitter } from "events";
import { gauge } from "../gen/messages";
import { ImplLoader } from "../loaders/ImplLoader";
import { StaticLoader } from "../loaders/StaticLoader";
import { CacheFileProcessor } from "./CacheFileProcessor";
import { DataStoreInitProcessor } from "./DataStoreInitProcessor";
import { ExecutionEndingProcessor } from "./ExecutionEndingProcessor";
import { ExecutionStartingProcessor } from "./ExecutionStartingProcessor";
import { IMessageProcessor } from "./IMessageProcessor";
import { ImplementationFileGlobPatternProcessor } from "./ImplementationFileGlobPatternProcessor";
import { ImplementationFileListProcessor } from "./ImplementationFileListProcessor";
import { RefactorProcessor } from "./RefactorProcessor";
import { ScenarioExecutionEndingProcessor } from "./ScenarioExecutionEndingProcessor";
import { ScenarioExecutionStartingProcessor } from "./ScenarioExecutionStartingProcessor";
import { SpecExecutionEndingProcessor } from "./SpecExecutionEndingProcessor";
import { SpecExecutionStartingProcessor } from "./SpecExecutionStartingProcessor";
import { StepExecutionEndingProcessor } from "./StepExecutionEndingProcessor";
import { StepExecutionProcessor } from "./StepExecutionProcessor";
import { StepExecutionStartingProcessor } from "./StepExecutionStartingProcessor";
import { StepNameProcessor } from "./StepNameProcessor";
import { StepNamesProcessor } from "./StepNamesProcessor";
import { StepPositionsProcessor } from "./StepPositionsProcessor";
import { StubImplementationCodeProcessor } from "./StubImplementationCodeProcessor";
import { ValidationProcessor } from "./ValidationProcessor";

export class MessageProcessorFactory extends EventEmitter {

    private _processors: Map<gauge.messages.Message.MessageType, IMessageProcessor>;
    private readonly _loader: StaticLoader;

    constructor(loader: StaticLoader) {
        super();
        this._loader = loader;
        this._processors = new Map([
            [gauge.messages.Message.MessageType.StepValidateRequest, new ValidationProcessor()],
            [gauge.messages.Message.MessageType.RefactorRequest, new RefactorProcessor()],
            [gauge.messages.Message.MessageType.StepNameRequest, new StepNameProcessor()],

            [gauge.messages.Message.MessageType.StepNamesRequest, new StepNamesProcessor()],
            [gauge.messages.Message.MessageType.CacheFileRequest, new CacheFileProcessor(this._loader)],
            [gauge.messages.Message.MessageType.StepPositionsRequest, new StepPositionsProcessor()],
            [gauge.messages.Message.MessageType.ImplementationFileListRequest, new ImplementationFileListProcessor()],
            [gauge.messages.Message.MessageType.StubImplementationCodeRequest, new StubImplementationCodeProcessor()],
            [gauge.messages.Message.MessageType.StepPositionsRequest, new StepPositionsProcessor()],
            [gauge.messages.Message.MessageType.ImplementationFileGlobPatternRequest, new ImplementationFileGlobPatternProcessor()],


            [gauge.messages.Message.MessageType.SuiteDataStoreInit, new DataStoreInitProcessor()],
            [gauge.messages.Message.MessageType.SpecDataStoreInit, new DataStoreInitProcessor()],
            [gauge.messages.Message.MessageType.ScenarioDataStoreInit, new DataStoreInitProcessor()],

            [gauge.messages.Message.MessageType.ExecutionStarting, new ExecutionStartingProcessor()],
            [gauge.messages.Message.MessageType.SpecExecutionStarting, new SpecExecutionStartingProcessor()],
            [gauge.messages.Message.MessageType.ScenarioExecutionStarting, new ScenarioExecutionStartingProcessor()],
            [gauge.messages.Message.MessageType.StepExecutionStarting, new StepExecutionStartingProcessor()],

            [gauge.messages.Message.MessageType.ExecuteStep, new StepExecutionProcessor()],

            [gauge.messages.Message.MessageType.StepExecutionEnding, new StepExecutionEndingProcessor()],
            [gauge.messages.Message.MessageType.ScenarioExecutionEnding, new ScenarioExecutionEndingProcessor()],
            [gauge.messages.Message.MessageType.SpecExecutionEnding, new SpecExecutionEndingProcessor()],
            [gauge.messages.Message.MessageType.ExecutionEnding, new ExecutionEndingProcessor()],
        ])
    }

    public get(messageType: gauge.messages.Message.MessageType): IMessageProcessor {
        return this._processors.get(messageType) as IMessageProcessor;
    }

    public async process(message: gauge.messages.IMessage) {
        switch (message.messageType) {
            case gauge.messages.Message.MessageType.KillProcessRequest:
                process.exit(0);
                break;
            case gauge.messages.Message.MessageType.ExecutionStarting:
                let loader = new ImplLoader();
                await loader.loadImplementations();
                break;
            default:
                break;
        }
        await this._process(message);
    }

    private async _process(message: gauge.messages.IMessage) {
        try {
            let processor = this._processors.get(message.messageType as gauge.messages.Message.MessageType);
            if (processor) {
                let res = await processor.process(message);
                this.emit('messageProcessed', res);
            } else {
                throw new Error('Unknown message type ' +
                    gauge.messages.Message.MessageType[message.messageType as number]);
            }
        }
        catch (error) {
            console.error(error);
            process.exit(1);
        }
    }
}

