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
} from "../gen/messages_pb";

import type { RefactorRequest } from "../gen/messages_pb";
import { Span } from "../gen/spec_pb";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ProtoStepValue } from "../gen/spec_pb";
import { CodeHelper } from "../helpers/CodeHelper";
import registry from "../models/StepRegistry";
import { Util } from "../utils/Util";

export class RefactorProcessor extends CodeHelper {
  public process(req: RefactorRequest): RefactorResponse | undefined {
    const oldStep = req.getOldstepvalue();
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const newStep = req.getNewstepvalue();

    if (!oldStep || !newStep) {
      // eslint-disable-next-line semi
      return;
    }

    if (registry.hasMultipleImplementations(oldStep.getStepvalue())) {
      const res = new RefactorResponse();

      res.setSuccess(false);
      res.setError(
        `Multiple Implementation found for ${oldStep.getParameterizedstepvalue()}`,
      );

      return res;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const positions = req.getParampositionsList().map((p) => {
      const pp = new ParameterPosition();

      pp.setNewposition(p.getNewposition());
      pp.setOldposition(p.getOldposition());

      return pp;
    });

    return this.refactor(oldStep, newStep, positions);
  }

  private refactor(
    oldStep: ProtoStepValue,
    newStep: ProtoStepValue,
    paramPositions: ParameterPosition[],
  ): RefactorResponse {
    const response = new RefactorResponse();

    try {
      const info = registry.get(oldStep.getStepvalue());
      const filePath = info.getFilePath();
      const source = createSourceFile(
        filePath,
        Util.readFile(filePath),
        ScriptTarget.Latest,
        false,
        ScriptKind.TS,
      );
      const change1 = new FileChanges();

      change1.setFilename(filePath);
      const change2 = new FileChanges();

      change2.setFilename(filePath);
      forEachChild(source, (childNode: Node) => {
        if (isClassDeclaration(childNode)) {
          forEachChild(childNode, (node: Node) => {
            if (
              isMethodDeclaration(node) &&
              this.hasStepDecorator(node) &&
              this.hasStepText(node, info.getStepText())
            ) {
              const diff1 = new TextDiff();
              const span = this.getStepTextRange(source, node);

              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions
              diff1.setContent(`"${newStep.getParameterizedstepvalue()}"`);
              diff1.setSpan(span);
              change1.addDiffs(diff1);

              const diff2 = new TextDiff();
              const oldParams = node.parameters;
              const newParams = new Array<ParameterDeclaration>();

              for (const p of paramPositions) {
                if (p.getOldposition() < 0) {
                  const pName = this.getParamName(
                    paramPositions.indexOf(p),
                    oldParams,
                    source,
                  );

                  newParams.splice(
                    p.getNewposition(),
                    0,
                    factory.createParameterDeclaration(
                      undefined,
                      undefined,
                      `${pName}: any`,
                    ),
                  );
                } else {
                  newParams.splice(
                    p.getNewposition(),
                    0,
                    oldParams[p.getOldposition()],
                  );
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

              diff2.setContent(content);
              diff2.setSpan(this.createSpan(source, node.parameters));
              change2.addDiffs(diff2);
            }
          });
        }
      });
      response.setFileschangedList([filePath]);
      response.setFilechangesList([change1, change2]);
      response.setSuccess(true);
    } catch (error) {
      const err = error as Error;

      response.setError(`${err.message}${EOL}${err.stack ?? ""}`);
      response.setSuccess(false);
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
      : this.getParamName(index++, params, source);
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private createSpan(source: SourceFile, node: any): Span {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const start = source.getLineAndCharacterOfPosition(node.pos);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const end = source.getLineAndCharacterOfPosition(node.end);
    const span = new Span();

    span.setStart(start.line + 1);
    span.setStartchar(start.character);
    span.setEnd(end.line + 1);
    span.setEndchar(end.character);

    return span;
    // eslint-disable-next-line padded-blocks
  }
}
