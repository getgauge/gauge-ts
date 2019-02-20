import { gauge } from "../messages";
import { BaseDataStoreInitProcessor } from "./BaseDataStoreInitProcessor";
import { DataStoreType } from "./DataStoreType";

export class SuiteDataStoreInitProcessor extends BaseDataStoreInitProcessor {

    constructor() {
        super(DataStoreType.Suite);
    }

    public process(message: gauge.messages.IMessage): gauge.messages.IMessage {
        return super.process(message);
    }
}