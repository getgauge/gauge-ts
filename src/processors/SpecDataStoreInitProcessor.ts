import { gauge } from "../messages";
import { BaseDataStoreInitProcessor } from "./BaseDataStoreInitProcessor";
import { DataStoreType } from "./DataStoreType";
export class SpecDataStoreInitProcessor extends BaseDataStoreInitProcessor {
    constructor() {
        super(DataStoreType.Spec);
    }

    public process(message: gauge.messages.IMessage): gauge.messages.IMessage {
        return super.process(message);
    }
}
