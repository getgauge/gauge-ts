export class MessageStore {
    private static message: Array<string> = new Array<string>();

    public static pendingMessages() {
        let m = this.message;
        this.clear();
        return m;
    }

    public static addMessage(message: string) {
        this.message.push(message);
    }

    public static clear() {
        this.message = new Array<string>();
    }
}