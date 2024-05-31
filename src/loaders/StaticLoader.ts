import {
  ScriptTarget,
  createSourceFile,
  forEachChild,
  getDecorators,
  isClassDeclaration,
  isMethodDeclaration,
} from "typescript";

import type {
  Decorator,
  MethodDeclaration,
  Node,
  SourceFile,
} from "typescript";

import { CodeHelper } from "../helpers/CodeHelper";
import { Position } from "../models/Position";
import { Range } from "../models/Range";
import registry from "../models/StepRegistry";
import { StepRegistryEntry } from "../models/StepRegistryEntry";
import { Util } from "../utils/Util";

class StaticLoader extends CodeHelper {
  public loadImplementations(): void {
    this.loadFiles();
  }

  public loadStepsFromText(file: string, text: string): void {
    const source = createSourceFile(file, text, ScriptTarget.Latest);

    forEachChild(source, (childNode: Node) => {
      if (isClassDeclaration(childNode)) {
        forEachChild(childNode, (node: Node) => {
          if (isMethodDeclaration(node) && this.hasStepDecorator(node)) {
            this.processNode(node, file, source);
          }
        });
      }
    });
  }

  public reloadSteps(content: string, filePath: string): void {
    registry.removeSteps(filePath);
    this.loadStepsFromText(filePath, content);
  }

  public removeSteps(filePath: string): void {
    registry.removeSteps(filePath);
  }

  private loadFiles() {
    for (const file of Util.getListOfFiles()) {
      const text = Util.readFile(file);

      this.loadStepsFromText(file, text);
    }
  }

  private processNode(
    node: MethodDeclaration,
    file: string,
    source: SourceFile,
  ) {
    const stepTexts = this.getStepTexts(node);

    for (const stepText of stepTexts) {
      const stepValue = stepText.replace(/(<.*?>)/g, "{}");

      registry.add(
        stepValue,
        new StepRegistryEntry(
          stepText,
          stepValue,
          file,
          undefined,
          StaticLoader.getRange(node, source),
          stepTexts.length > 1,
        ),
      );
    }
  }

  private static getRange(node: MethodDeclaration, source: SourceFile): Range {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const dec = getDecorators(node) as unknown as Array<Decorator>;
    const start = source.getLineAndCharacterOfPosition(dec[0].expression.pos);
    const end = source.getLineAndCharacterOfPosition(node.end);

    return new Range(
      new Position(start.line + 1, start.character),
      new Position(end.line + 1, end.character),
    );
  }
}

export const staticLoaderInstance = new StaticLoader();
export type StaticLoaderType = StaticLoader;
