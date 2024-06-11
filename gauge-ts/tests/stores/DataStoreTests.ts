import { DataStore } from "../../src/stores/DataStore";

describe("DataStore", () => {
  it("should be able to store and fetch data", () => {
    const ds = new DataStore();

    ds.put<string, number>("key", 1);
    expect(ds.get<string, number>("key")).toBe(1);
  });

  it("should be able to remove", () => {
    const ds = new DataStore();

    ds.put<string, number>("key", 1);
    ds.remove("key");
    expect(ds.get<string, number>("key")).toBeUndefined();
  });

  it("should be able get entries", () => {
    const ds = new DataStore();

    ds.put<string, number>("key", 1);
    const entries = ds.entries();

    expect(entries.next().value).toStrictEqual(["key", 1]);
  });
});
