/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable padding-line-between-statements */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-multi-spaces */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable padded-blocks */
import {
  createPrinter,
  getDecorators,
} from "typescript";

import type {
  Decorator,
  MethodDeclaration,
  Printer,
  TextRange,
} from "typescript";

export type ExpressionElementType = {
  text: string;
};

export interface ExpressionArgumentType extends TextRange {
  text: string;
  elements: Array<ExpressionElementType>;
}

export type ExpressionType = {
  expression: {
    escapedText: string;
  };
  arguments: Array<ExpressionArgumentType>;
};

export abstract class CodeHelper {

  protected printer: Printer = createPrinter();

  protected getStepTexts(method: MethodDeclaration): Array<string> {
    const dec = getDecorators(method) as unknown as Array<Decorator>;
    const stepDecExp = dec.filter(CodeHelper.isStepDecorator)[0]
      .expression as unknown as ExpressionType;
    const arg = stepDecExp.arguments[0];

    if (!arg.text && arg.elements) {
      return arg.elements.map((e) => {
        return e.text;
      });
    }

    return [arg.text];
  }

  protected static isStepDecorator(d: Decorator): boolean {
    const decExp = d.expression as unknown as ExpressionType;

    return decExp.expression.escapedText === "Step";
  }

  protected hasStepDecorator(method: MethodDeclaration): boolean {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const decorators = getDecorators(method);

    // eslint-disable-next-line padding-line-between-statements
    return !!decorators && decorators.some(CodeHelper.isStepDecorator);
  }

  protected hasStepText(method: MethodDeclaration, stepText: string): boolean {
    const dec = getDecorators(method) as unknown as Array<Decorator>;
    const stepDecExp = dec.filter(CodeHelper.isStepDecorator)[0]
      .expression as unknown as ExpressionType;
    const arg = stepDecExp.arguments[0];

    if (!arg.text && arg.elements) {
      return arg.elements.some((e) => {
        return e.text === stepText;
      });
    }

    return arg.text === stepText;
    // eslint-disable-next-line padded-blocks
  }

}
