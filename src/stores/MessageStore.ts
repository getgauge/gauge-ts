export class MessageStore {
  private static message: Array<string> = [];

  public static pendingMessages(): Array<string> {
    const m = this.message;

    this.clear();

    return m;
  }

  public static addMessage(message: string): void {
    this.message.push(message);
  }

  public static clear(): void {
    this.message = new Array<string>();
  }
}
