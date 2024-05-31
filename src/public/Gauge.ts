import { Screenshot } from "../screenshot/Screenshot";
import { MessageStore } from "../stores/MessageStore";
import { ScreenshotStore } from "../stores/ScreenshotStore";

export class Gauge {
  public static async captureScreenshot(): Promise<void> {
    ScreenshotStore.addScreenshot(await Screenshot.capture());
  }

  public static writeMessage(message: string): void {
    MessageStore.addMessage(message);
  }
}
