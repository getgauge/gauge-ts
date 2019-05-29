import { EOL } from "os";
import { createNodeArray, createParameter, createSourceFile, Decorator, EmitHint, forEachChild, isClassDeclaration, isMethodDeclaration, MethodDeclaration, Node, NodeArray, ParameterDeclaration, ScriptKind, ScriptTarget, SourceFile } from "typescript";
import { gauge } from "../gen/messages";
import { CodeHelper } from "../helpers/CodeHelper";
import registry from "../models/StepRegistry";
import { Util } from "../utils/Util";
import { IMessageProcessor } from "./IMessageProcessor";

export class RefactorProcessor extends CodeHelper implements IMessageProcessor {

    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let req = message.refactorRequest as gauge.messages.RefactorRequest;
        let oldStep = req.oldStepValue as gauge.messages.ProtoStepValue;
        let newStep = req.newStepValue as gauge.messages.ProtoStepValue;
        if (registry.hasMultipleImplementations(oldStep.stepValue)) {
            return this.wrapInMessage(message, new gauge.messages.RefactorResponse({
                success: false,
                error: `Multiple Implementation found for ${oldStep.parameterizedStepValue}`
            }));
        }
        let positions = req.paramPositions.map((p) => {
            return new gauge.messages.ParameterPosition({
                newPosition: p.newPosition || 0,
                oldPosition: p.oldPosition || 0
            })
        })
        return this.wrapInMessage(message, this.refactor(oldStep, newStep, positions, req.saveChanges));
    }

    private refactor(oldStep: gauge.messages.ProtoStepValue, newStep: gauge.messages.ProtoStepValue, paramPositions: gauge.messages.IParameterPosition[], saveChanges: boolean): gauge.messages.RefactorResponse {
        let respnse = new gauge.messages.RefactorResponse();
        try {
            let info = registry.get(oldStep.stepValue);
            let filePath = info.getFilePath();
            let source = createSourceFile(filePath, Util.readFile(filePath), ScriptTarget.Latest, false, ScriptKind.TS);
            let change1: gauge.messages.FileChanges = new gauge.messages.FileChanges({ fileName: filePath, diffs: [] });
            let change2: gauge.messages.FileChanges = new gauge.messages.FileChanges({ fileName: filePath, diffs: [] });
            forEachChild(source, (childNode: Node) => {
                if (isClassDeclaration(childNode)) {
                    forEachChild(childNode, (node: Node) => {
                        if (isMethodDeclaration(node) && this.hasStepDecorator(node) && this.hasStepText(node, info.getStepText())) {
                            change1.diffs.push(new gauge.messages.TextDiff({ content: `"${newStep.parameterizedStepValue}"`, span: this.getStepTextRange(source, node) }))
                            this.updateStepText(node, newStep);
                            change2.diffs.push(new gauge.messages.TextDiff({ span: this.createSpan(source, node.parameters) }))
                            let oldParams = node.parameters;
                            let newParams = new Array<ParameterDeclaration>();
                            for (let p of paramPositions) {
                                if (p.oldPosition as number < 0) {
                                    let pName = this.getParamName(paramPositions.indexOf(p), oldParams, source)
                                    newParams.splice(p.newPosition as number, 0, createParameter(undefined, undefined, undefined, `${pName}: any`))
                                } else {
                                    newParams.splice(p.newPosition as number, 0, oldParams[p.oldPosition as number])
                                }
                            }
                            node.parameters = createNodeArray(newParams);
                            change2.diffs[0].content = newParams.map((p) => {
                                return this.printer.printNode(EmitHint.Unspecified, p, source);
                            }).join(', ');
                        }
                    })
                }
            })
            if (saveChanges) Util.writeFile(filePath, this.printer.printFile(source))
            respnse.filesChanged = [filePath];
            respnse.fileChanges = [change1, change2];
            respnse.success = true;
        } catch (error) {
            respnse.error = error.message + EOL + error.stack;
            respnse.success = false
        }
        return respnse;
    }

    private updateStepText(node: MethodDeclaration, newStep: gauge.messages.ProtoStepValue) {
        let dec = (node.decorators as unknown) as Array<Decorator>;
        let stepDecExp = dec.filter(this.isStepDecorator)[0].expression as any;
        stepDecExp.arguments[0].text = newStep.parameterizedStepValue;
    }

    private getParamName(index: number, params: NodeArray<ParameterDeclaration>, source: SourceFile): string {
        let name = `arg${index}`;
        let p = params.map((p) => { return this.printer.printNode(EmitHint.Unspecified, p, source) })
        return !p.includes(name) ? name : this.getParamName(index++, params, source)
    }

    private getStepTextRange(source: SourceFile, node: MethodDeclaration): gauge.messages.Span {
        let dec = (node.decorators as unknown) as Array<Decorator>;
        let stepDecExp = dec.filter(this.isStepDecorator)[0].expression as any;
        return this.createSpan(source, stepDecExp.arguments[0])
    }

    private createSpan(source: SourceFile, node: any): gauge.messages.Span {
        let start = source.getLineAndCharacterOfPosition(node.pos);
        let end = source.getLineAndCharacterOfPosition(node.end);
        return new gauge.messages.Span({
            start: start.line + 1,
            startChar: start.character,
            end: end.line + 1,
            endChar: end.character
        })
    }

    private wrapInMessage(message: gauge.messages.IMessage, res: gauge.messages.RefactorResponse): gauge.messages.IMessage {
        return new gauge.messages.Message({
            messageId: message.messageId,
            messageType: gauge.messages.Message.MessageType.RefactorResponse,
            refactorResponse: res
        })
    }
}
