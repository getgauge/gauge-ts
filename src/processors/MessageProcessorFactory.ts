import { EventEmitter } from "events";
import { ImplLoader } from "../loader/ImplLoader";
import { gauge } from "../messages";
import { DataStoreInitProcessor } from "./DataStoreInitProcessor";
import { ExecutionEndingProcessor } from "./ExecutionEndingProcessor";
import { ExecutionStartingProcessor } from "./ExecutionStartingProcessor";
import { IMessageProcessor } from "./IMessageProcessor";
import { RefactorProcessor } from "./RefactorProcessor";
import { ScenarioExecutionEndingProcessor } from "./ScenarioExecutionEndingProcessor";
import { ScenarioExecutionStartingProcessor } from "./ScenarioExecutionStartingProcessor";
import { SpecExecutionEndingProcessor } from "./SpecExecutionEndingProcessor";
import { SpecExecutionStartingProcessor } from "./SpecExecutionStartingProcessor";
import { StepExecutionEndingProcessor } from "./StepExecutionEndingProcessor";
import { StepExecutionProcessor } from "./StepExecutionProcessor";
import { StepExecutionStartingProcessor } from "./StepExecutionStartingProcessor";
import { StepNameProcessor } from "./StepNameProcessor";
import { ValidationProcessor } from "./ValidationProcessor";

export class MessageProcessorFactory extends EventEmitter {

    private _processors: Map<gauge.messages.Message.MessageType, IMessageProcessor>;

    constructor() {
        super();
        this._processors = new Map([
            [gauge.messages.Message.MessageType.StepValidateRequest, new ValidationProcessor()],
            [gauge.messages.Message.MessageType.RefactorRequest, new RefactorProcessor()],
            [gauge.messages.Message.MessageType.StepNameRequest, new StepNameProcessor()],

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
        let processor = this._processors.get(message.messageType as gauge.messages.Message.MessageType);
        if (processor) {
            let res = await processor.process(message);
            this.emit('messageProcessed', res);
        } else {
            throw new Error('Unknown message type ' + gauge.messages.Message.MessageType[message.messageType as number]);
        }
    }
}

