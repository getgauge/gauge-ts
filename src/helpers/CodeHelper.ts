import { createPrinter, Decorator, MethodDeclaration, Printer } from "typescript";

export abstract class CodeHelper {

    protected printer: Printer = createPrinter();

    protected getStepTexts(node: MethodDeclaration): Array<string> {
        let dec = (node.decorators as unknown) as Array<Decorator>;
        let stepDecExp = dec.filter(this.isStepDecorator)[0].expression as any;
        let arg = stepDecExp.arguments[0];
        if (!arg.text && arg.elements) {
            return arg.elements.map((e: { text: any; }) => { return e.text })
        }
        return [arg.text];
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
        let arg = stepDecExp.arguments[0]
        if (!arg.text && arg.elements) return arg.elements.some((e: any) => { return e.text === stepText })
        return arg.text === stepText;
    }
}