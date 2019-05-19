import { GaugeListener } from "./connection/GaugeListener";
import { StaticLoader } from "./loader/StaticLoader";
import { MessageProcessorFactory } from "./processors/MessageProcessorFactory";

export class GaugeRuntime {

    public async start() {
        let loader = new StaticLoader();
        loader.loadImplementations();
        let factory = new MessageProcessorFactory();
        let listener = new GaugeListener(factory);
        listener.pollForMessages();
    }
}

