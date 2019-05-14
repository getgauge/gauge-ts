export class ScreenshotStore {
    private static screenshots: Array<Uint8Array> = new Array();

    public static pendingScreenshots() {
        let s = this.screenshots;
        this.clear();
        return s;
    }

    public static addScreenshot(screenshot: Uint8Array) {
        this.screenshots.push(screenshot);
    }

    public static clear() {
        this.screenshots = new Array<Uint8Array>();
    }
}