import { gauge } from "../gen/messages";
import { MessageProcessorFactory } from "../processors/MessageProcessorFactory";
import { GaugeConnection } from "./GaugeConnection";

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
        connection.on('messageReceived', async (message: gauge.messages.IMessage) => {
            await this._processorFactory.process(message);
        });
        connection.start();
    }
}
