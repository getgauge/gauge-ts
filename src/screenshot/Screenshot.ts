import { writeFileSync } from "fs";
import { basename } from "path";
import {
  type CommonAsyncFunction,
  type CommonFunction,
  Util,
} from "../utils/Util";

export class Screenshot {
  private static customScreenshotWriter:
    | CommonFunction<string>
    | CommonAsyncFunction<string>;
  private static customScreenGrabber:
    | CommonFunction<Uint8Array>
    | CommonAsyncFunction<Uint8Array>;

  public static async capture(): Promise<string> {
    try {
      if (this.customScreenshotWriter != null) {
        const out = this.customScreenshotWriter();

        if (out.constructor.name === Promise.name) {
          return await out;
        } else {
          return out;
        }
      } else if (this.customScreenGrabber != null) {
        let data: Uint8Array;
        const out = this.customScreenGrabber();

        if (out.constructor.name === Promise.name) {
          data = await out;
        } else {
          data = out as Uint8Array;
        }
        const file = Util.getUniqueScreenshotFileName();

        writeFileSync(file, data);

        return basename(file);
      } else {
        return this.captureScreenshot();
      }
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve("");
  }

  private static captureScreenshot(): string {
    try {
      const filename = Util.getUniqueScreenshotFileName();

      Util.spawn("gauge_screenshot", [filename]);

      return basename(filename);
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(
        `\nFailed to take screenshot using gauge_screenshot.\n${error}`,
      );
    }
  }

  public static setCustomScreenGrabber(
    grabber: CommonFunction<Uint8Array> | CommonAsyncFunction<Uint8Array>,
  ): void {
    this.customScreenGrabber = grabber;
  }

  public static setCustomScreenshotWriter(
    writer: CommonFunction<string> | CommonAsyncFunction<string>,
  ): void {
    this.customScreenshotWriter = writer;
  }
}
