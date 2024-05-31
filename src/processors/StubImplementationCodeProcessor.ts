import { EOL } from "os";
import { basename } from "path";
import {
  Extension,
  type Node,
  ScriptTarget,
  createSourceFile,
  forEachChild,
  isClassDeclaration,
  isMethodDeclaration,
} from "typescript";
import {
  FileDiff,
  type StubImplementationCodeRequest,
  TextDiff,
} from "../gen/messages_pb";
import { Span } from "../gen/spec_pb";
import { Util } from "../utils/Util";

export class StubImplementationCodeProcessor {
  public process(req: StubImplementationCodeRequest): FileDiff {
    const filePath = req.getImplementationfilepath();
    const content = req.getCodesList().reduce((acc, cur) => {
      return acc + EOL + cur;
    });
    const fileDiff = new FileDiff();

    fileDiff.setFilepath(filePath);
    const textDiffs = new Array<TextDiff>();

    if (!Util.exists(filePath)) {
      const filePath = Util.getNewTSFileName(Util.getImplDirs()[0]);
      const className = basename(filePath).replace(Extension.Ts, "");

      textDiffs.push(this.diffForImplementationInNewClass(content, className));
    } else {
      textDiffs.push(
        this.diffForImplementationInExistingClass(filePath, content),
      );
    }
    fileDiff.setTextdiffsList(textDiffs);

    return fileDiff;
  }

  private diffForImplementationInExistingClass(
    filePath: string,
    content: string,
  ): TextDiff {
    const fileContent = Util.readFile(filePath)
      .toString()
      .replace("\r\n", "\n");
    const source = createSourceFile(filePath, fileContent, ScriptTarget.Latest);
    let lastMethod: Node | null = null;

    forEachChild(source, (childNode: Node) => {
      if (isClassDeclaration(childNode)) {
        forEachChild(childNode, (node: Node) => {
          if (isMethodDeclaration(node)) {
            lastMethod = node;
          }
        });
      }
    });
    const pos = source.getLineAndCharacterOfPosition(
      (lastMethod as unknown as Node).end,
    );
    const span = new Span();

    span.setStart(pos.line + 1);
    span.setEnd(pos.line + 1);
    span.setStartchar(0);
    span.setEndchar(0);
    const textDiff = new TextDiff();

    textDiff.setSpan(span);
    textDiff.setContent(
      content
        .split(EOL)
        .map((c) => {
          return "\t" + c;
        })
        .join(EOL) + EOL,
    );

    return textDiff;
  }

  private diffForImplementationInNewClass(
    content: string,
    className: string,
  ): TextDiff {
    const span = new Span();

    span.setStart(0);
    span.setEnd(0);
    span.setStartchar(0);
    span.setEndchar(0);
    const textDiff = new TextDiff();

    textDiff.setSpan(span);
    textDiff.setContent(this.getContentForNewClass(content, className));

    return textDiff;
  }

  private getContentForNewClass(content: string, className: string): string {
    return `import { Step } from "gauge-ts";${EOL}export default class ${className} {${EOL}${content
      .split(EOL)
      .map((c) => {
        return `\t${c}`;
      })
      .join(EOL)}${EOL}}`;
  }
}
