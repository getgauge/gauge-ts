import { writeFileSync } from "node:fs";
import { basename } from "node:path";
import {
  type CommonAsyncFunction,
  type CommonFunction,
  Util,
} from "../utils/Util";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class Screenshot {
  private static customScreenshotWriter:
    | CommonFunction<string>
    | CommonAsyncFunction<string>;
  private static customScreenGrabber:
    | CommonFunction<Uint8Array>
    | CommonAsyncFunction<Uint8Array>;

  public static async capture(): Promise<string> {
    try {
      if (Screenshot.customScreenshotWriter != null) {
        const out = this.customScreenshotWriter();

        if (out.constructor.name === Promise.name) {
          return await out;
        }
        return out;
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
    Screenshot.customScreenGrabber = grabber;
  }

  public static setCustomScreenshotWriter(
    writer: CommonFunction<string> | CommonAsyncFunction<string>,
  ): void {
    Screenshot.customScreenshotWriter = writer;
  }
}
