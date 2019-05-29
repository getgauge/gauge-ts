import { DataStore } from "./DataStore";

export class DataStoreFactory {
    private static _suiteDataStore: DataStore = new DataStore();
    private static _specDataStore: DataStore = new DataStore();
    private static _scenarioDataStore: DataStore = new DataStore();


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