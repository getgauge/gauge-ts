import { createPrinter, Decorator, MethodDeclaration, Printer } from "typescript";

export abstract class CodeHelper {

    protected printer: Printer = createPrinter();

    protected getStepText(node: MethodDeclaration) {
        let dec = (node.decorators as unknown) as Array<Decorator>;
        let stepDecExp = dec.filter(this.isStepDecorator)[0].expression as any;
        return stepDecExp.arguments[0].text; // TODO: Add alias support
    }

    protected isStepDecorator(d: Decorator): boolean {
        let decExp = d.expression as any;
        return decExp.expression.escapedText === 'Step';
    }

    protected hasStepDecorator(node: MethodDeclaration): boolean {
        return !!node.decorators && node.decorators.some(this.isStepDecorator)
    }

    protected hasStepText(node: MethodDeclaration, stepText: string) {
        let dec = (node.decorators as unknown) as Array<Decorator>;
        let stepDecExp = dec.filter(this.isStepDecorator)[0].expression as any;
        return stepDecExp.arguments[0].text === stepText;
    }
}