// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class MessageStore {
  private static message: Array<string> = [];

  public static pendingMessages(): Array<string> {
    const m = MessageStore.message;

    MessageStore.clear();

    return m;
  }

  public static addMessage(message: string): void {
    MessageStore.message.push(message);
  }

  public static clear(): void {
    MessageStore.message = new Array<string>();
  }
}
