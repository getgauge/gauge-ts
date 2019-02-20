import { GaugeListener } from "./connection/GaugeListener";
import { ImplementationLoader } from "./loader/ImplementationLoader";
import { MessageProcessorFactory } from "./processors/MessageProcessorFactory";
import { GaugeProjectBuilder } from "./loader/GaugeProjectBuilder";

export class GaugeRuntime {

    private readonly _state: string;

    constructor(state: string) {
        this._state = state;
    }

    public start() {
        if (this._state === "--start") {
            this.startRunner();
        } else if (this._state === "--start") {
            this.initProject();
        } else {
            this.printUsage();
        }
    }

    public startRunner() {
        let loader = new ImplementationLoader(new GaugeProjectBuilder());
        loader.loadImplementations();
        let factory = new MessageProcessorFactory(loader);
        let listener = new GaugeListener(factory);
        listener.pollForMessages();
    }

    public initProject() {
        throw new Error("Method not implemented.");
    }

    public printUsage() {
        throw new Error("Method not implemented.");
    }

}

