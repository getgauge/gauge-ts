import { gauge } from "../messages";
import { IMessageProcessor } from "./IMessageProcessor";
import { DataStoreType } from "./DataStoreType";

export abstract class BaseDataStoreInitProcessor implements IMessageProcessor {
    private readonly _storeType: any;
    protected constructor(storeType: DataStoreType) {
        this._storeType = storeType;
    }
    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
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
