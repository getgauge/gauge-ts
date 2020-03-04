import { writeFileSync } from "fs";
import { basename } from "path";
import { Util } from "../utils/Util";

export class Screenshot {


    private static customScreenshotWriter: Function;
    private static customScreenGrabber: Function;

    public static async capture(): Promise<string> {
        try {
            if (this.customScreenshotWriter != null) {
                if (Util.isAsync(this.customScreenshotWriter)) {
                    return await this.customScreenshotWriter();
                } else {
                    return Promise.resolve(this.customScreenshotWriter());
                }
            } else if (this.customScreenGrabber != null) {
                let data: Uint8Array;
                if (Util.isAsync(this.customScreenshotWriter)) {
                    data = await this.customScreenGrabber();
                } else {
                    data = this.customScreenGrabber();
                }
                let file = Util.getUniqueScreenshotFileName();
                writeFileSync(file, data)
                return basename(file);
            }
            else {
                return this.captureScreenshot();
            }
        } catch (error) {
            console.log(error)
        }
        return Promise.resolve("");
    }

    private static captureScreenshot(): string {
        try {
            let filename = Util.getUniqueScreenshotFileName();
            Util.spawn("gauge_screenshot", [filename]);
            return basename(filename);
        } catch (error) {
            throw new Error(`\nFailed to take screenshot using gauge_screenshot.\n${error}`)
        }
    }

    public static setCustomScreenGrabber(grabber: Function) {
        this.customScreenGrabber = grabber;
    }

    public static setCustomScreenshotWriter(writer: any) {
        this.customScreenshotWriter = writer;
    }
}