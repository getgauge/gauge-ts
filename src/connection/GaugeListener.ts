import { GaugeConnection } from "./GaugeConnection";
import { MessageProcessorFactory } from "../processors/MessageProcessorFactory";
import { gauge } from "../messages";

export class GaugeListener {
    private readonly _processorFactory: MessageProcessorFactory;
    constructor(factory: MessageProcessorFactory) {
        this._processorFactory = factory;
    }

    public pollForMessages() {
        let connection = new GaugeConnection();
        this._processorFactory.on('messageProcessed', (message: gauge.messages.IMessage) => {
            connection.write(message);
        });
        connection.on('messageReceived', (message: gauge.messages.IMessage) => {
            this._processorFactory.process(message);
        });
        connection.start();
    }
}
