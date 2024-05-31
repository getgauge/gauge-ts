import { DataStore } from "./DataStore";
import type { GlobalDataStore } from "./GlobalDataStore";

declare const global: GlobalDataStore;

export class DataStoreFactory {
  public static getSuiteDataStore(): DataStore {
    if (!global.gaugeSuiteDataStore) {
      global.gaugeSuiteDataStore = new DataStore();
    }

    return global.gaugeSuiteDataStore;
  }

  public static getSpecDataStore(): DataStore {
    if (!global.gaugeSpecDataStore) {
      global.gaugeSpecDataStore = new DataStore();
    }

    return global.gaugeSpecDataStore;
  }

  public static getScenarioDataStore(): DataStore {
    if (!global.gaugeScenarioDataStore) {
      global.gaugeScenarioDataStore = new DataStore();
    }

    return global.gaugeScenarioDataStore;
  }
}
