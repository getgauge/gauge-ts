import { DataStore } from "./DataStore";

export class DataStoreFactory {

    private static readonly _suiteDataStore: DataStore = new DataStore();
    private static readonly _specDataStore: DataStore = new DataStore();
    private static readonly _scenarioDataStore: DataStore = new DataStore();

    public static getSuiteDataStore(): DataStore {
        return this._suiteDataStore;
    }

    public static getSpecDataStore(): DataStore {
        return this._specDataStore;
    }

    public static getScenarioDataStore(): DataStore {
        return this._scenarioDataStore;
    }

}