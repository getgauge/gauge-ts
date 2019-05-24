import { sep } from 'path';
import { gauge } from '../gen/messages';
import { getImplDirs } from '../utils/fileUtils';
import { IMessageProcessor } from './IMessageProcessor';
export class ImplementationFileGlobPatternProcessor implements IMessageProcessor {
    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let patterns = getImplDirs().map((dir: string) => {
            return dir.split(sep).concat(['**', '*.ts']).join('/');
        })
        return new gauge.messages.Message({
            messageId: message.messageId,
            messageType: gauge.messages.Message.MessageType.ImplementationFileGlobPatternResponse,
            implementationFileGlobPatternResponse: new gauge.messages.ImplementationFileGlobPatternResponse({
                globPatterns: patterns
            })
        })
    }
}
