import {gauge} from '../gen/messages';
import {Util} from '../utils/Util';
import {IMessageProcessor} from './IMessageProcessor';

export class ImplementationFileListProcessor implements IMessageProcessor {

    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        return Promise.resolve(
            new gauge.messages.Message({
                messageId: message.messageId,
                messageType: gauge.messages.Message.MessageType.ImplementationFileListResponse,
                implementationFileListResponse: new gauge.messages.ImplementationFileListResponse({
                    implementationFilePaths: Util.getListOfFiles()
                })
            })
        )
    }

}
