import { gauge } from '../gen/messages';
import { getListOfFiles } from '../utils/fileUtils';
import { IMessageProcessor } from './IMessageProcessor';
export class ImplementationFileListProcessor implements IMessageProcessor {
    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        return new gauge.messages.Message({
            messageId : message.messageId,
            messageType: gauge.messages.Message.MessageType.ImplementationFileListResponse,
            implementationFileListResponse: new gauge.messages.ImplementationFileListResponse({
                implementationFilePaths: getListOfFiles()
            })
        })
    }
}
