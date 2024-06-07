import type { DataStore } from "./DataStore";

export interface GlobalDataStore extends Global {
  gaugeSpecDataStore: DataStore;
  gaugeSuiteDataStore: DataStore;
  gaugeScenarioDataStore: DataStore;
}
