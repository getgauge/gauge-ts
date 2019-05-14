import { GaugeListener } from "./connection/GaugeListener";
import { MessageProcessorFactory } from "./processors/MessageProcessorFactory";
import { getListOfFiles } from "./utils/fileUtils";

export class GaugeRuntime {

    private async loadImplementations() {
        for (const file of getListOfFiles()) {
            await import(file);
        }
    }

    public async start() {
        await this.loadImplementations();
        let factory = new MessageProcessorFactory();
        let listener = new GaugeListener(factory);
        listener.pollForMessages();
    }
}

