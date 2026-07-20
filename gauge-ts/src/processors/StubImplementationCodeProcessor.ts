import { EOL } from "node:os";
import { basename } from "node:path";
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
} from "../gen/messages";
import { Span } from "../gen/spec";
import { Util } from "../utils/Util";

export class StubImplementationCodeProcessor {
  public process(req: StubImplementationCodeRequest): FileDiff {
    const filePath = req.implementationFilePath;
    const content = req.codes.join(EOL);
    const textDiffs = new Array<TextDiff>();

    if (!Util.exists(filePath)) {
      const newFilePath = Util.getNewTSFileName(Util.getImplDirs()[0]);
      const className = basename(newFilePath).replace(Extension.Ts, "");

      textDiffs.push(this.diffForImplementationInNewClass(content, className));
    } else {
      textDiffs.push(
        this.diffForImplementationInExistingClass(filePath, content),
      );
    }

    return FileDiff.create({ filePath, textDiffs });
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
    const span = Span.create({
      start: String(pos.line + 1),
      end: String(pos.line + 1),
      startChar: "0",
      endChar: "0",
    });

    return TextDiff.create({
      span,
      content:
        content
          .split(EOL)
          .map((c) => {
            return `\t${c}`;
          })
          .join(EOL) + EOL,
    });
  }

  private diffForImplementationInNewClass(
    content: string,
    className: string,
  ): TextDiff {
    const span = Span.create({
      start: "0",
      end: "0",
      startChar: "0",
      endChar: "0",
    });

    return TextDiff.create({
      span,
      content: this.getContentForNewClass(content, className),
    });
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
