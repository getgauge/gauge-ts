import { tmpdir } from 'os';
import { join } from "path";
import { Util } from "../utils/Util";

export class Screenshot {
    private static customScreenGrabber: Function;
    public static async capture(): Promise<Uint8Array> {
        try {
            if (!this.customScreenGrabber) {
                return Promise.resolve(this.captureScreenshot());
            }
            if (Util.isAsync(this.customScreenGrabber)) return await this.customScreenGrabber();
            return Promise.resolve(this.customScreenGrabber());
        } catch (error) {
            console.log(error)
        }
        return Promise.resolve(new Uint8Array());
    }

    private static captureScreenshot(): Uint8Array {
        try {
            let tmpFile = join(tmpdir(), `${Date.now()}_screenshot.png`);
            Util.spawn("gauge_screenshot", [tmpFile]);
            return new Uint8Array(Util.readFileBuffer(tmpFile));
        } catch (error) {
            throw new Error(`\nFailed to take screenshot using gauge_screenshot.\n${error}`)
        }
    }

    public static setCustomScreenGrabber(grabber: Function) {
        this.customScreenGrabber = grabber;
    }
}