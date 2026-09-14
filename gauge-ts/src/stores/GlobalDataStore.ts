import type { DataStore } from "./DataStore";

export interface GlobalDataStore {
  gaugeSpecDataStore: DataStore;
  gaugeSuiteDataStore: DataStore;
  gaugeScenarioDataStore: DataStore;
}
