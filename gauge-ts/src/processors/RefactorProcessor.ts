import { EOL } from "node:os";
import {
  type Decorator,
  type MethodDeclaration,
  type Node,
  type NodeArray,
  type ParameterDeclaration,
  type SourceFile,
  getDecorators,
} from "typescript";
import {
  EmitHint,
  ScriptKind,
  ScriptTarget,
  createSourceFile,
  factory,
  forEachChild,
  isClassDeclaration,
  isMethodDeclaration,
} from "typescript";
import {
  FileChanges,
  ParameterPosition,
  RefactorResponse,
  TextDiff,
} from "../gen/messages";

import type { RefactorRequest } from "../gen/messages";
import { Span } from "../gen/spec";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ProtoStepValue } from "../gen/spec";
import { CodeHelper } from "../helpers/CodeHelper";
import registry from "../models/StepRegistry";
import { Util } from "../utils/Util";

export class RefactorProcessor extends CodeHelper {
  public process(req: RefactorRequest): RefactorResponse | undefined {
    const oldStep = req.oldStepValue;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const newStep = req.newStepValue;

    if (!oldStep || !newStep) {
      return;
    }

    if (registry.hasMultipleImplementations(oldStep.stepValue)) {
      return RefactorResponse.create({
        success: false,
        error: `Multiple Implementation found for ${oldStep.parameterizedStepValue}`,
      });
    }
    const positions = req.paramPositions.map((p) => {
      return ParameterPosition.create({
        newPosition: p.newPosition,
        oldPosition: p.oldPosition,
      });
    });

    return this.refactor(oldStep, newStep, positions);
  }

  private refactor(
    oldStep: ProtoStepValue,
    newStep: ProtoStepValue,
    paramPositions: ParameterPosition[],
  ): RefactorResponse {
    const response = RefactorResponse.create({});

    try {
      const info = registry.get(oldStep.stepValue);
      const filePath = info.getFilePath();
      const source = createSourceFile(
        filePath,
        Util.readFile(filePath),
        ScriptTarget.Latest,
        false,
        ScriptKind.TS,
      );
      const change1 = FileChanges.create({
        fileName: filePath,
        diffs: [],
      });
      const change2 = FileChanges.create({
        fileName: filePath,
        diffs: [],
      });

      forEachChild(source, (childNode: Node) => {
        if (isClassDeclaration(childNode)) {
          forEachChild(childNode, (node: Node) => {
            if (
              isMethodDeclaration(node) &&
              this.hasStepDecorator(node) &&
              this.hasStepText(node, info.getStepText())
            ) {
              const span = this.getStepTextRange(source, node);
              const diff1 = TextDiff.create({
                content: `"${newStep.parameterizedStepValue}"`,
                span,
              });

              change1.diffs.push(diff1);

              const oldParams = node.parameters;
              const newParams = new Array<ParameterDeclaration>();

              for (const p of paramPositions) {
                if (p.oldPosition < 0) {
                  const pName = this.getParamName(
                    paramPositions.indexOf(p),
                    oldParams,
                    source,
                  );

                  newParams.splice(
                    p.newPosition,
                    0,
                    factory.createParameterDeclaration(
                      undefined,
                      undefined,
                      `${pName}: any`,
                    ),
                  );
                } else {
                  newParams.splice(p.newPosition, 0, oldParams[p.oldPosition]);
                }
              }
              const content = newParams
                .map((p) => {
                  return this.printer.printNode(
                    EmitHint.Unspecified,
                    p,
                    source,
                  );
                })
                .join(", ");

              const diff2 = TextDiff.create({
                content,
                span: this.createSpan(source, node.parameters),
              });

              change2.diffs.push(diff2);
            }
          });
        }
      });
      response.filesChanged = [filePath];
      response.fileChanges = [change1, change2];
      response.success = true;
    } catch (error) {
      const err = error as Error;

      response.error = `${err.message}${EOL}${err.stack ?? ""}`;
      response.success = false;
    }

    return response;
  }

  private getParamName(
    index: number,
    params: NodeArray<ParameterDeclaration>,
    source: SourceFile,
  ): string {
    const name = `arg${index}`;
    const p = params.map((p) => {
      return this.printer.printNode(EmitHint.Unspecified, p, source);
    });

    return !p.includes(name)
      ? name
      : this.getParamName(index + 1, params, source);
  }

  private getStepTextRange(source: SourceFile, node: MethodDeclaration): Span {
    const dec = getDecorators(node) as unknown as Array<Decorator>;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const stepDecExp =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      dec.filter(CodeHelper.isStepDecorator)[0].expression as any;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return this.createSpan(source, stepDecExp.arguments[0]);
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  private createSpan(source: SourceFile, node: any): Span {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const start = source.getLineAndCharacterOfPosition(node.pos);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const end = source.getLineAndCharacterOfPosition(node.end);

    return Span.create({
      start: String(start.line + 1),
      startChar: String(start.character),
      end: String(end.line + 1),
      endChar: String(end.character),
    });
    // eslint-disable-next-line padded-blocks
  }
}
