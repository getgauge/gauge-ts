import {
  isArrayLiteralExpression,
  isCallExpression,
  isDecorator,
  isIdentifier,
  isStringLiteral,
} from "typescript/unstable/ast";

import type {
  Decorator,
  Expression,
  MethodDeclaration,
  ModifierLike,
} from "typescript/unstable/ast";

export abstract class CodeHelper {
  /**
   * TypeScript keeps decorators in the modifier list rather than in a field of
   * their own, so there is no `getDecorators` to call.
   */
  protected static getDecorators(method: MethodDeclaration): Array<Decorator> {
    const modifiers: readonly ModifierLike[] = method.modifiers ?? [];

    return modifiers.filter((modifier) => isDecorator(modifier));
  }

  protected static isStepDecorator(decorator: Decorator): boolean {
    const { expression } = decorator;

    return (
      isCallExpression(expression) &&
      isIdentifier(expression.expression) &&
      expression.expression.text === "Step"
    );
  }

  /** The first argument of `@Step(...)`: either a string or an array of them. */
  protected static getStepArgument(
    method: MethodDeclaration,
  ): Expression | undefined {
    const decorator = CodeHelper.getDecorators(method).find(
      CodeHelper.isStepDecorator,
    );

    if (!decorator || !isCallExpression(decorator.expression)) {
      return undefined;
    }

    return decorator.expression.arguments[0];
  }

  protected getStepTexts(method: MethodDeclaration): Array<string> {
    const arg = CodeHelper.getStepArgument(method);

    if (!arg) {
      return [];
    }

    if (isStringLiteral(arg)) {
      return [arg.text];
    }

    if (isArrayLiteralExpression(arg)) {
      return arg.elements.filter(isStringLiteral).map((e) => e.text);
    }

    return [];
  }

  protected hasStepDecorator(method: MethodDeclaration): boolean {
    return CodeHelper.getDecorators(method).some(CodeHelper.isStepDecorator);
  }

  protected hasStepText(method: MethodDeclaration, stepText: string): boolean {
    return this.getStepTexts(method).includes(stepText);
  }
}
