describe("gaauge-ts", () => {
  it("should export all the reuired types", async () => {
    const gaugeTs = await import("../src/index");

    expect(gaugeTs.Step).toBeInstanceOf(Function);
    expect(gaugeTs.ContinueOnFailure).toBeInstanceOf(Function);
    expect(gaugeTs.BeforeSuite).toBeInstanceOf(Function);
    expect(gaugeTs.BeforeSpec).toBeInstanceOf(Function);
    expect(gaugeTs.BeforeScenario).toBeInstanceOf(Function);
    expect(gaugeTs.BeforeStep).toBeInstanceOf(Function);
    expect(gaugeTs.AfterStep).toBeInstanceOf(Function);
    expect(gaugeTs.AfterScenario).toBeInstanceOf(Function);
    expect(gaugeTs.AfterSpec).toBeInstanceOf(Function);
    expect(gaugeTs.AfterSuite).toBeInstanceOf(Function);

    expect(gaugeTs.CustomScreenGrabber).toBeInstanceOf(Function);
    expect(gaugeTs.CustomScreenshotWriter).toBeInstanceOf(Function);

    expect(gaugeTs.ExecutionContext).toBeDefined();
    expect(gaugeTs.Specification).toBeDefined();
    expect(gaugeTs.Scenario).toBeDefined();
    expect(gaugeTs.StepInfo).toBeDefined();
    expect(gaugeTs.DataStoreFactory).toBeDefined();
    expect(gaugeTs.DataStore).toBeDefined();

    expect(gaugeTs.Gauge).toHaveProperty("captureScreenshot");
  });
});
