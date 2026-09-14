import {
  isClassDeclaration,
  isMethodDeclaration,
} from "typescript/unstable/ast";

import type {
  MethodDeclaration,
  Node,
  SourceFile,
} from "typescript/unstable/ast";

import { CodeHelper } from "../helpers/CodeHelper";
import tsProject from "../helpers/TsProject";
import { Position } from "../models/Position";
import { Range } from "../models/Range";
import registry from "../models/StepRegistry";
import { StepRegistryEntry } from "../models/StepRegistryEntry";
import { Util } from "../utils/Util";

export default class StaticLoader extends CodeHelper {
  public loadImplementations(): void {
    this.loadFiles();
  }

  public loadStepsFromText(file: string, text: string): void {
    const source = tsProject.parse(file, text);

    if (!source) {
      return;
    }

    source.forEachChild((childNode: Node) => {
      if (isClassDeclaration(childNode)) {
        childNode.forEachChild((node: Node) => {
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
    tsProject.remove(filePath);
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
    const dec = CodeHelper.getDecorators(node);
    const start = source.getLineAndCharacterOfPosition(dec[0].expression.pos);
    const end = source.getLineAndCharacterOfPosition(node.end);

    return new Range(
      new Position(start.line + 1, start.character),
      new Position(end.line + 1, end.character),
    );
  }
}
