import { gauge } from "../messages";
import { BaseDataStoreInitProcessor } from "./BaseDataStoreInitProcessor";
import { DataStoreType } from "./DataStoreType";
export class SpecDataStoreInitProcessor extends BaseDataStoreInitProcessor {
    constructor() {
        super(DataStoreType.Spec);
    }

    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        return await super.process(message);
    }
}
