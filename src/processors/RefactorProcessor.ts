import {EOL} from "os";
import {
    createNodeArray,
    createParameter,
    createSourceFile,
    Decorator,
    EmitHint,
    forEachChild,
    isClassDeclaration,
    isMethodDeclaration,
    MethodDeclaration,
    Node,
    NodeArray,
    ParameterDeclaration,
    ScriptKind,
    ScriptTarget,
    SourceFile,
    TextRange
} from "typescript";
import {gauge} from "../gen/messages";
import {CodeHelper, ExpressionType} from "../helpers/CodeHelper";
import registry from "../models/StepRegistry";
import {Util} from "../utils/Util";
import {IMessageProcessor} from "./IMessageProcessor";

export class RefactorProcessor extends CodeHelper implements IMessageProcessor {

    public process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        const req = message.refactorRequest as gauge.messages.RefactorRequest;
        const oldStep = req.oldStepValue as gauge.messages.ProtoStepValue;
        const newStep = req.newStepValue as gauge.messages.ProtoStepValue;

        if (registry.hasMultipleImplementations(oldStep.stepValue)) {
            return RefactorProcessor.wrapInMessage(message, new gauge.messages.RefactorResponse({
                success: false,
                error: `Multiple Implementation found for ${oldStep.parameterizedStepValue}`
            }));
        }
        const positions = req.paramPositions.map((p) => {
            return new gauge.messages.ParameterPosition({
                newPosition: p.newPosition || 0,
                oldPosition: p.oldPosition || 0
            })
        })

        return RefactorProcessor.wrapInMessage(message, this.refactor(oldStep, newStep, positions, req.saveChanges));
    }

    private refactor(oldStep: gauge.messages.ProtoStepValue, newStep: gauge.messages.ProtoStepValue, paramPositions: gauge.messages.IParameterPosition[], saveChanges: boolean): gauge.messages.RefactorResponse {
        const response = new gauge.messages.RefactorResponse();

        try {
            const info = registry.get(oldStep.stepValue);
            const filePath = info.getFilePath();
            const source = createSourceFile(filePath, Util.readFile(filePath), ScriptTarget.Latest, false, ScriptKind.TS);
            const change1: gauge.messages.FileChanges = new gauge.messages.FileChanges({fileName: filePath, diffs: []});
            const change2: gauge.messages.FileChanges = new gauge.messages.FileChanges({fileName: filePath, diffs: []});

            forEachChild(source, (childNode: Node) => {
                if (isClassDeclaration(childNode)) {
                    forEachChild(childNode, (node: Node) => {
                        if (isMethodDeclaration(node) && this.hasStepDecorator(node) && this.hasStepText(node, info.getStepText())) {
                            change1.diffs.push(new gauge.messages.TextDiff({
                                content: `"${newStep.parameterizedStepValue}"`,
                                span: this.getStepTextRange(source, node)
                            }))
                            this.updateStepText(node, newStep);
                            change2.diffs.push(new gauge.messages.TextDiff({span: RefactorProcessor.createSpan(source, node.parameters)}))
                            const oldParams = node.parameters;
                            const newParams = new Array<ParameterDeclaration>();

                            for (const p of paramPositions) {
                                if ((p.oldPosition as number) < 0) {
                                    const pName = this.getParamName(paramPositions.indexOf(p), oldParams, source)

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
            if (saveChanges) {
                Util.writeFile(filePath, this.printer.printFile(source))
            }

            response.filesChanged = [filePath];
            response.fileChanges = [change1, change2];
            response.success = true;
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-plus-operands
            response.error = error.message + EOL + error.stack;
            response.success = false
        }

        return response;
    }

    private updateStepText(node: MethodDeclaration, newStep: gauge.messages.ProtoStepValue) {
        const dec = (node.decorators as unknown) as Array<Decorator>;
        const stepDecExp = dec.filter(this.isStepDecorator)[0].expression as unknown as ExpressionType;

        stepDecExp.arguments[0].text = newStep.parameterizedStepValue;
    }

    private getParamName(index: number, params: NodeArray<ParameterDeclaration>, source: SourceFile): string {
        const name = `arg${index}`;
        const p = params.map((p) => {
            return this.printer.printNode(EmitHint.Unspecified, p, source)
        })

        return !p.includes(name) ? name : this.getParamName(index++, params, source)
    }

    private getStepTextRange(source: SourceFile, node: MethodDeclaration): gauge.messages.Span {
        const dec = (node.decorators as unknown) as Array<Decorator>;
        const stepDecExp = dec.filter(this.isStepDecorator)[0].expression as unknown as ExpressionType;

        return RefactorProcessor.createSpan(source, stepDecExp.arguments[0])
    }

    private static createSpan(source: SourceFile, node: TextRange): gauge.messages.Span {
        const start = source.getLineAndCharacterOfPosition(node.pos);
        const end = source.getLineAndCharacterOfPosition(node.end);

        return new gauge.messages.Span({
            start: start.line + 1,
            startChar: start.character,
            end: end.line + 1,
            endChar: end.character
        })
    }

    private static wrapInMessage(message: gauge.messages.IMessage, res: gauge.messages.RefactorResponse): Promise<gauge.messages.IMessage> {
        return Promise.resolve(new gauge.messages.Message({
                messageId: message.messageId,
                messageType: gauge.messages.Message.MessageType.RefactorResponse,
                refactorResponse: res
            })
        );
    }

}
