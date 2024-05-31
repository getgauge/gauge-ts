// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class ScreenshotStore {
  private static screenshotFiles: Array<string> = [];

  public static pendingScreenshots(): Array<string> {
    const s = ScreenshotStore.screenshotFiles;

    ScreenshotStore.clear();

    return s;
  }

  public static addScreenshot(screenshotFile: string): void {
    ScreenshotStore.screenshotFiles.push(screenshotFile);
  }

  public static clear(): void {
    ScreenshotStore.screenshotFiles = new Array<string>();
  }
}
