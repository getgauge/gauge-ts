import { existsSync, unlinkSync } from "node:fs";
import { Screenshot } from "../../src/screenshot/Screenshot";
import { Util } from "../../src/utils/Util";

describe("Screenshot", () => {
  let screenshotFile: string;

  describe(".capture", () => {
    afterEach(() => {
      if (existsSync(screenshotFile)) {
        unlinkSync(screenshotFile);
      }
    });

    it("should capture screen shot and return the buffer", async () => {
      Util.readFileBuffer = jest.fn().mockReturnValue(new ArrayBuffer(10));
      Util.spawn = jest.fn();
      screenshotFile = await Screenshot.capture();
      expect(screenshotFile.endsWith(".png")).toBe(true);
    });

    it("should return empty buffer if fails to capture screenshot", async () => {
      Util.readFileBuffer = jest.fn().mockReturnValue(new ArrayBuffer(10));
      Util.spawn = jest.fn().mockImplementation(() => {
        throw new Error("failed to spawn");
      });
      console.log = jest.fn();
      const file = await Screenshot.capture();

      expect(file).toBe("");
    });

    it("should capture screenshot using custom screen grabber and write data to file", async () => {
      Screenshot.setCustomScreenGrabber(() => {
        return new Uint8Array(new ArrayBuffer(10));
      });
      screenshotFile = await Screenshot.capture();
      expect(screenshotFile.endsWith("png")).toBeTruthy();
    });

    it("should capture screenshot using async custom screen grabber and write data to file", async () => {
      // eslint-disable-next-line @typescript-eslint/require-await
      Screenshot.setCustomScreenGrabber(async () => {
        return new Uint8Array(new ArrayBuffer(5));
      });
      screenshotFile = await Screenshot.capture();
      expect(screenshotFile.endsWith("png")).toBeTruthy();
    });

    it("should capture screenshot using custom screen writer", async () => {
      Screenshot.setCustomScreenshotWriter(() => {
        return "foo.png";
      });
      screenshotFile = await Screenshot.capture();
      expect(screenshotFile.endsWith("png")).toBeTruthy();
    });

    it("should capture screenshot using async custom screen writer", async () => {
      // eslint-disable-next-line @typescript-eslint/require-await
      Screenshot.setCustomScreenshotWriter(async () => {
        return "foo.png";
      });
      screenshotFile = await Screenshot.capture();
      expect(screenshotFile.endsWith("png")).toBeTruthy();
    });
  });
});
