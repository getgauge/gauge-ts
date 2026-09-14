import { EOL } from "node:os";
import {
  isClassDeclaration,
  isMethodDeclaration,
} from "typescript/unstable/ast";

import type {
  MethodDeclaration,
  Node,
  SourceFile,
  TextRange,
} from "typescript/unstable/ast";

import {
  FileChanges,
  ParameterPosition,
  RefactorResponse,
  TextDiff,
} from "../gen/messages";

import type { RefactorRequest } from "../gen/messages";
import { Span } from "../gen/spec";
import type { ProtoStepValue } from "../gen/spec";
import { CodeHelper } from "../helpers/CodeHelper";
import tsProject from "../helpers/TsProject";
import registry from "../models/StepRegistry";
import { Util } from "../utils/Util";

export class RefactorProcessor extends CodeHelper {
  public process(req: RefactorRequest): RefactorResponse | undefined {
    const oldStep = req.oldStepValue;
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
      const source = tsProject.parse(filePath, Util.readFile(filePath));

      if (!source) {
        throw new Error(`Failed to parse ${filePath}`);
      }
      const change1 = FileChanges.create({
        fileName: filePath,
        diffs: [],
      });
      const change2 = FileChanges.create({
        fileName: filePath,
        diffs: [],
      });

      source.forEachChild((childNode: Node) => {
        if (isClassDeclaration(childNode)) {
          childNode.forEachChild((node: Node) => {
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

              // Existing parameters are carried over as the source text that
              // declared them, which keeps their original types and formatting.
              const oldParams = node.parameters.map((p) =>
                RefactorProcessor.textOf(source, p),
              );
              const newParams = new Array<string>();

              for (const p of paramPositions) {
                if (p.oldPosition < 0) {
                  const pName = RefactorProcessor.getParamName(
                    paramPositions.indexOf(p),
                    oldParams,
                  );

                  newParams.splice(p.newPosition, 0, `${pName}: any`);
                } else {
                  newParams.splice(p.newPosition, 0, oldParams[p.oldPosition]);
                }
              }

              const diff2 = TextDiff.create({
                content: newParams.join(", "),
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

  private static textOf(source: SourceFile, range: TextRange): string {
    return source.text.slice(range.pos, range.end).trim();
  }

  private static getParamName(index: number, params: string[]): string {
    const name = `arg${index}`;

    return !params.includes(name)
      ? name
      : RefactorProcessor.getParamName(index + 1, params);
  }

  private getStepTextRange(source: SourceFile, node: MethodDeclaration): Span {
    const arg = CodeHelper.getStepArgument(node);

    if (!arg) {
      throw new Error("Step decorator has no step text");
    }

    return this.createSpan(source, arg);
  }

  private createSpan(source: SourceFile, range: TextRange): Span {
    const start = source.getLineAndCharacterOfPosition(range.pos);
    const end = source.getLineAndCharacterOfPosition(range.end);

    return Span.create({
      start: String(start.line + 1),
      startChar: String(start.character),
      end: String(end.line + 1),
      endChar: String(end.character),
    });
  }
}
