import { EOL } from "os";
import { basename } from "path";
import { createSourceFile, Extension, forEachChild, isClassDeclaration, isMethodDeclaration, Node, ScriptTarget } from "typescript";
import { gauge } from "../gen/messages";
import { Util } from "../utils/Util";
import { IMessageProcessor } from "./IMessageProcessor";

export class StubImplementationCodeProcessor implements IMessageProcessor {
    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let req = message.stubImplementationCodeRequest as gauge.messages.StubImplementationCodeRequest
        let filePath = req.implementationFilePath;
        let content = req.codes.reduce((acc, cur) => { return acc + EOL + cur });
        if (!Util.exists(filePath)) {
            let filePath = Util.getNewTSFileName(Util.getImplDirs()[0]);
            let className = basename(filePath).replace(Extension.Ts, '');
            return this.wrapInMessage(message, filePath, this.diffForImplementationInNewClass(content, className))
        }
        return this.wrapInMessage(message, filePath, this.diffForImplementationInExistingClass(filePath, content));
    }


    private diffForImplementationInExistingClass(filePath: string, content: string): gauge.messages.TextDiff[] {
        let fileContent = Util.readFile(filePath).toString().replace("\r\n", "\n");
        let source = createSourceFile(filePath, fileContent, ScriptTarget.Latest)
        let lastMethod: Node | null = null;
        forEachChild(source, (childNode: Node) => {
            if (isClassDeclaration(childNode)) {
                forEachChild(childNode, (node: Node) => {
                    if (isMethodDeclaration(node)) {
                        lastMethod = node;
                    }
                })
            }
        })
        let pos = source.getLineAndCharacterOfPosition((lastMethod as unknown as Node).end)
        let span = new gauge.messages.Span({ start: pos.line + 1, end: pos.line + 1, startChar: 0, endChar: 0 });
        let textDiff = new gauge.messages.TextDiff({ span: span, content: content.split(EOL).map((c) => { return '\t' + c }).join(EOL) + EOL });
        return [textDiff];
    }

    private wrapInMessage(message: gauge.messages.IMessage, filePath: string, diffs: gauge.messages.TextDiff[]): gauge.messages.IMessage {
        return new gauge.messages.Message({
            messageId: message.messageId,
            messageType: gauge.messages.Message.MessageType.FileDiff,
            fileDiff: new gauge.messages.FileDiff({
                filePath: filePath,
                textDiffs: diffs
            })
        })
    }

    private diffForImplementationInNewClass(content: string, className: string): gauge.messages.TextDiff[] {
        let span = new gauge.messages.Span({
            start: 0,
            end: 0,
            startChar: 0,
            endChar: 0
        });
        let textDiff = new gauge.messages.TextDiff({
            span: span,
            content: this.getContentForNewClass(content, className)
        });
        return [textDiff]
    }

    private getContentForNewClass(content: string, className: string): string {
        return `import { Step } from "gauge-ts";` + EOL +
            `export class ${className} {` + EOL +
            `${content.split(EOL).map((c) => { return '\t' + c }).join(EOL)}` + EOL +
            `}`
    }

}
