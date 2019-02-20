import { gauge } from "../messages";
import { BaseDataStoreInitProcessor } from "./BaseDataStoreInitProcessor";
import { DataStoreType } from "./DataStoreType";

export class ScenarioDataStoreInitProcessor extends BaseDataStoreInitProcessor {

    constructor() {
        super(DataStoreType.Scenario);
    }

    public process(message: gauge.messages.IMessage): gauge.messages.IMessage {
        return super.process(message);
    }
}


