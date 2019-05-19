import { readFileSync } from "fs";
import { createSourceFile, Decorator, forEachChild, isClassDeclaration, isMethodDeclaration, MethodDeclaration, Node, ScriptTarget, SourceFile } from 'typescript';
import { Position } from "../models/Position";
import { Range } from "../models/Range";
import registry from "../models/StepRegistry";
import { StepRegistryEntry } from "../models/StepRegistryEntry";
import { getListOfFiles } from "../utils/fileUtils";

export class StaticLoader {

    private loadFiles() {
        getListOfFiles().forEach((file: string) => {
            let text = readFileSync(file, 'utf-8')
            this.loadFile(file, text);
        })
    }

    public loadFile(file: string, text: string) {
        let source = createSourceFile(file, text, ScriptTarget.Latest)
        forEachChild(source, (childNode: Node) => {
            if (isClassDeclaration(childNode)) {
                forEachChild(childNode, (node: Node) => {
                    if (isMethodDeclaration(node) && this.hasStepDecorator(node)) {
                        this.processNode(node, file, source);
                    }
                })
            }
        })
    }

    private processNode(node: MethodDeclaration, file: string, source: SourceFile) {
        let stepText = this.getStepText(node); // TODO: Add alias support
        let stepValue = stepText.replace(/(<.*?>)/g, "{}");
        registry.add(stepValue, new StepRegistryEntry(
            stepText,
            stepValue,
            undefined,
            undefined,
            file,
            this.getRange(node, source)));
    }

    private getRange(node: MethodDeclaration, source: SourceFile): Range {
        let dec = (node.decorators as unknown) as Array<Decorator>;
        let start = source.getLineAndCharacterOfPosition(dec[0].expression.pos);

        let end = source.getLineAndCharacterOfPosition(node.end);
        return new Range(new Position(start.line, start.character), new Position(end.line, end.character));
    }

    private getStepText(node: MethodDeclaration) {
        let dec = (node.decorators as unknown) as Array<Decorator>;
        let stepDecExp = dec.filter(this.isStepDecorator)[0].expression as any;
        return stepDecExp.arguments[0].text; // TODO: Add alias support
    }

    private isStepDecorator(d: Decorator): boolean {
        let decExp = d.expression as any;
        return decExp.expression.escapedText === 'Step';
    }

    private hasStepDecorator(node: MethodDeclaration): boolean {
        return !!node.decorators && node.decorators.some(this.isStepDecorator)
    }

    public loadImplementations() {
        this.loadFiles();
    }
}