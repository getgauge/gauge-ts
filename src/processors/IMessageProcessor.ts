import { gauge } from "../messages";
export interface IMessageProcessor {
    process(message: gauge.messages.IMessage): gauge.messages.IMessage;
}
