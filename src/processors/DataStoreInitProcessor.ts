import { gauge } from "../gen/messages";
import { DataStoreFactory } from "../stores/DataStoreFactory";
import { IMessageProcessor } from "./IMessageProcessor";

export class DataStoreInitProcessor implements IMessageProcessor {
    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        switch (message.messageType as gauge.messages.Message.MessageType) {
            case gauge.messages.Message.MessageType.SuiteDataStoreInit:
                DataStoreFactory.getSuiteDataStore().clear();
                break;
            case gauge.messages.Message.MessageType.SpecDataStoreInit:
                DataStoreFactory.getSpecDataStore().clear();
                break;
            case gauge.messages.Message.MessageType.ScenarioDataStoreInit:
                DataStoreFactory.getScenarioDataStore().clear();
                break;
        }
        return new gauge.messages.Message({
            messageId: message.messageId,
            messageType: gauge.messages.Message.MessageType.ExecutionStatusResponse,
            executionStatusResponse: new gauge.messages.ExecutionStatusResponse({
                executionResult: new gauge.messages.ProtoExecutionResult({
                    failed: false,
                    executionTime: 0
                })
            })
        });
    }
}
