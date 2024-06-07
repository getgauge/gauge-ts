import { Gauge } from "../../src/public/Gauge";
import { Screenshot } from "../../src/screenshot/Screenshot";
import { MessageStore } from "../../src/stores/MessageStore";
import { ScreenshotStore } from "../../src/stores/ScreenshotStore";

describe("Gauge", () => {
  describe("captureScreenshot", () => {
    it("should capture", async () => {
      Screenshot.capture = jest.fn();
      await Gauge.captureScreenshot();
      expect(ScreenshotStore.pendingScreenshots().length).toBe(1);
    });
  });

  describe("writeMessage", () => {
    it("should capture", () => {
      Gauge.writeMessage("Hello");
      Gauge.writeMessage("World");
      const m = MessageStore.pendingMessages();

      expect(m.length).toBe(2);
      expect(m).toStrictEqual(["Hello", "World"]);
    });
  });
});
