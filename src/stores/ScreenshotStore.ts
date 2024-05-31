export class ScreenshotStore {
  private static screenshotFiles: Array<string> = [];

  public static pendingScreenshots(): Array<string> {
    const s = this.screenshotFiles;

    this.clear();

    return s;
  }

  public static addScreenshot(screenshotFile: string): void {
    this.screenshotFiles.push(screenshotFile);
  }

  public static clear(): void {
    this.screenshotFiles = new Array<string>();
  }
}
