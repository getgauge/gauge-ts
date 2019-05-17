import { EventEmitter } from "events";
import { gauge } from "../messages";
import { IMessageProcessor } from "./IMessageProcessor";
import { ValidationProcessor } from "./ValidationProcessor";
import { StepExecutionProcessor } from "./StepExecutionProcessor";
import { ExecutionStartingProcessor } from "./ExecutionStartingProcessor";
import { SpecExecutionStartingProcessor } from "./SpecExecutionStartingProcessor";
import { ScenarioExecutionStartingProcessor } from "./ScenarioExecutionStartingProcessor";
import { StepExecutionStartingProcessor } from "./StepExecutionStartingProcessor";
import { StepExecutionEndingProcessor } from "./StepExecutionEndingProcessor";
import { ScenarioExecutionEndingProcessor } from "./ScenarioExecutionEndingProcessor";
import { SpecExecutionEndingProcessor } from "./SpecExecutionEndingProcessor";
import { ExecutionEndingProcessor } from "./ExecutionEndingProcessor";
import { DataStoreInitProcessor } from "./DataStoreInitProcessor";

export class MessageProcessorFactory extends EventEmitter {

    private _processors: Map<gauge.messages.Message.MessageType, IMessageProcessor>;

    constructor() {
        super();
        this._processors = new Map([
            [gauge.messages.Message.MessageType.StepValidateRequest, new ValidationProcessor()],

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

    public async process(message: gauge.messages.IMessage) {
        if (message.messageType === gauge.messages.Message.MessageType.KillProcessRequest) {
            process.exit(0);
        }
        let processor = this._processors.get(message.messageType as gauge.messages.Message.MessageType);
        if (processor) {
            let res = await processor.process(message);
            this.emit('messageProcessed', res);
        } else {
            throw new Error('Unknown message type ' + message.messageType);
        }
    }
}

