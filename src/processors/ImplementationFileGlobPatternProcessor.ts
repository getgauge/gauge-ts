import {sep} from 'path';
import {gauge} from '../gen/messages';
import {Util} from '../utils/Util';
import {IMessageProcessor} from './IMessageProcessor';

export class ImplementationFileGlobPatternProcessor implements IMessageProcessor {

    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        const patterns = Util.getImplDirs().map((dir: string) => {
            return dir.split(sep).concat(['**', '*.ts']).join('/');
        })

        return Promise.resolve(new gauge.messages.Message({
                messageId: message.messageId,
                messageType: gauge.messages.Message.MessageType.ImplementationFileGlobPatternResponse,
                implementationFileGlobPatternResponse: new gauge.messages.ImplementationFileGlobPatternResponse({
                    globPatterns: patterns
                })
            })
        );
    }

}
