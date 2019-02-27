import { GaugeListener } from "./connection/GaugeListener";
import { ImplementationLoader } from "./loader/ImplementationLoader";
import { MessageProcessorFactory } from "./processors/MessageProcessorFactory";
import { GaugeProjectBuilder } from "./loader/GaugeProjectBuilder";
import { join } from "path";
import { mkdir, createReadStream, createWriteStream } from "fs";

export class GaugeRuntime {
    public start() {
        let loader = new ImplementationLoader(new GaugeProjectBuilder());
        loader.loadImplementations();
        let factory = new MessageProcessorFactory();
        let listener = new GaugeListener(factory);
        listener.pollForMessages();
    }
}

