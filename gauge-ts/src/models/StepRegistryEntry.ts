import type { CommonFunction } from "../utils/Util";
import type { Range } from "./Range";

export class StepRegistryEntry {
  private readonly _method: CommonFunction | undefined;
  private readonly _filePath: string | undefined;
  private readonly _span: Range | undefined;
  private readonly _stepText: string;
  private readonly _stepValue: string;

  private _instance: Record<string, unknown> | undefined;
  private readonly _hasAlias: boolean;

  constructor(
    stepText: string,
    stepValue: string,
    filePath: string,
    method?: CommonFunction,
    span?: Range,
    hasAlias?: boolean,
  ) {
    this._stepText = stepText;
    this._stepValue = stepValue;
    this._method = method;
    this._filePath = filePath;
    this._span = span;
    this._hasAlias = hasAlias || false;
  }

  public getMethod(): CommonFunction | undefined {
    return this._method;
  }

  public getInstance(): Record<string, unknown> | undefined {
    return this._instance;
  }

  public setInstance(
    instance: Record<string, unknown>,
  ): Record<string, unknown> {
    this._instance = instance;
    return this._instance;
  }

  public getFilePath(): string {
    return this._filePath as string;
  }

  public getRange(): Range | undefined {
    return this._span;
  }

  public getStepText(): string {
    return this._stepText;
  }

  public hasAlias(): boolean {
    return this._hasAlias;
  }
}
