import { AssertionError } from "assert";
import type { Range } from "./Range";
import type { StepRegistryEntry } from "./StepRegistryEntry";
import type { CommonFunction } from "../utils/Util";
import type { GlobalStepRegistry } from "./GlobalRegistry";

export class StepRegistry {
  private _registry: Map<string, Array<StepRegistryEntry>>;
  private _continueOnFailureFunctions: Map<CommonFunction, Array<string>>;

  constructor() {
    this._registry = new Map<string, Array<StepRegistryEntry>>();
    this._continueOnFailureFunctions = new Map<CommonFunction, Array<string>>();
  }

  public get(text: string): StepRegistryEntry {
    return (this._registry.get(text) as Array<StepRegistryEntry>)[0];
  }

  public isImplemented(text: string): boolean {
    return this._registry.has(text);
  }

  public hasMultipleImplementations(stepText: string): boolean {
    return (
      this._registry.has(stepText) &&
      (this._registry.get(stepText) as Array<StepRegistryEntry>).length > 1
    );
  }

  public add(text: string, entry: StepRegistryEntry): void {
    if (this._registry.has(text)) {
      (this._registry.get(text) as Array<StepRegistryEntry>).push(entry);
    } else {
      this._registry.set(text, [entry]);
    }
  }

  public addContinueOnFailure(
    func: CommonFunction,
    exceptions?: Array<string>,
  ): void {
    this._continueOnFailureFunctions.set(
      func,
      exceptions || [AssertionError.name],
    );
  }

  public getContinueOnFailureFunctions(func: CommonFunction): Array<string> {
    if (this._continueOnFailureFunctions.has(func)) {
      return this._continueOnFailureFunctions.get(func) as Array<string>;
    }

    return [];
  }

  public getStepPositions(
    filePath: string,
  ): Array<{ stepValue: string; span: Range }> {
    const positions: Array<{ stepValue: string; span: Range }> = [];

    this._registry.forEach((entries, step) => {
      entries.forEach((entry) => {
        if (entry.getFilePath() === filePath) {
          positions.push({
            stepValue: step,
            span: entry.getRange() as Range,
          });
        }
      });
    });

    return positions;
  }

  public getStepTexts(): Array<string> {
    let steps: Array<string> = [];

    this._registry.forEach((v: StepRegistryEntry[]) => {
      steps = steps.concat(v[0].getStepText());
    });

    return steps;
  }

  public isFileCached(filePath: string): boolean {
    for (const kv of this._registry) {
      if (kv[1].some((i) => i.getFilePath() === filePath)) {
        return true;
      }
    }

    return false;
  }

  public removeSteps(filePath: string): void {
    const newReg = new Map<string, Array<StepRegistryEntry>>();

    this._registry.forEach((entries, stepValue) => {
      const methods = entries.filter(
        (entry) => entry.getFilePath() !== filePath,
      );

      if (methods.length > 0) {
        newReg.set(stepValue, methods);
      }
    });
    this._registry = newReg;
  }

  public setInstanceForMethodsIn(
    file: string,
    instance: Record<string, unknown>,
  ): void {
    this._registry.forEach((entries) => {
      entries.forEach((entry) => {
        if (entry.getFilePath() === file) {
          entry.setInstance(instance);
        }
      });
    });
  }

  public clear(): void {
    this._registry.clear();
    this._continueOnFailureFunctions.clear();
  }
}

declare const global: GlobalStepRegistry;

if (!global.gaugeStepRegistry) {
  global.gaugeStepRegistry = new StepRegistry();
}
const registry = global.gaugeStepRegistry;

export default registry;
