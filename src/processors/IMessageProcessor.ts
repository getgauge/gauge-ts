import { gauge } from "../gen/messages";

export interface IMessageProcessor {
    process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage>;
}
