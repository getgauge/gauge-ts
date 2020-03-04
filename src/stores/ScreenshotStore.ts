export class ScreenshotStore {
    private static screenshotFiles: Array<string> = new Array();

    public static pendingScreenshots(): Array<string> {
        let s = this.screenshotFiles;
        this.clear();
        return s;
    }

    public static addScreenshot(screenshotFile: string) {
        this.screenshotFiles.push(screenshotFile);
    }

    public static clear() {
        this.screenshotFiles = new Array<string>();
    }
}