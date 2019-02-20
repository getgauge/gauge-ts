import { EventEmitter } from "events";
import { ImplementationLoader } from "../loader/ImplementationLoader";
import { gauge } from "../messages";
import { IMessageProcessor } from "./IMessageProcessor";
import { ValidationProcessor } from "./ValidationProcessor";
import { SuiteDataStoreInitProcessor } from "./SuiteDataStoreInitProcessor";
import { SpecDataStoreInitProcessor } from "./SpecDataStoreInitProcessor";
import { ScenarioDataStoreInitProcessor } from "./ScenarioDataStoreInitProcessor";
import { StepExecutionProcessor } from "./StepExecutionProcessor";

export class MessageProcessorFactory extends EventEmitter {

    private readonly _loader: ImplementationLoader;
    private _processors: Map<gauge.messages.Message.MessageType | null | undefined, IMessageProcessor>;
    constructor(loader: ImplementationLoader) {
        super();
        this._loader = loader;
        this._processors = new Map([
            [gauge.messages.Message.MessageType.StepValidateRequest, new ValidationProcessor()],
            [gauge.messages.Message.MessageType.SuiteDataStoreInit, new SuiteDataStoreInitProcessor()],
            [gauge.messages.Message.MessageType.SpecDataStoreInit, new SpecDataStoreInitProcessor()],
            [gauge.messages.Message.MessageType.ScenarioDataStoreInit, new ScenarioDataStoreInitProcessor()],
            [gauge.messages.Message.MessageType.ExecutionStarting, new ScenarioDataStoreInitProcessor()],
            [gauge.messages.Message.MessageType.SpecExecutionStarting, new ScenarioDataStoreInitProcessor()],
            [gauge.messages.Message.MessageType.ExecuteStep, new StepExecutionProcessor()],
            [gauge.messages.Message.MessageType.ScenarioExecutionStarting, new ScenarioDataStoreInitProcessor()],
            [gauge.messages.Message.MessageType.StepExecutionStarting, new ScenarioDataStoreInitProcessor()],
            [gauge.messages.Message.MessageType.ExecutionEnding, new ScenarioDataStoreInitProcessor()],
            [gauge.messages.Message.MessageType.SpecExecutionEnding, new ScenarioDataStoreInitProcessor()],
            [gauge.messages.Message.MessageType.ScenarioExecutionEnding, new ScenarioDataStoreInitProcessor()],
            [gauge.messages.Message.MessageType.StepExecutionEnding, new ScenarioDataStoreInitProcessor()],
        ])
    }

    public process(message: gauge.messages.IMessage): any {
        if (message.messageType === gauge.messages.Message.MessageType.KillProcessRequest) {
            process.exit();
        }
        let processor = this._processors.get(message.messageType);
        if (processor) {
            let res = processor.process(message);
            this.emit('messageProcessed', res);
        } else {
            throw new Error('Unknown message type ' + message.messageType);
        }
    }
}

