import { Operator } from "..";
import type { CommonFunction } from "../utils/Util";

export class HookMethod {
  private readonly _method: CommonFunction;
  private readonly _file: string;
  private readonly _options:
    | { tags: string[]; operator?: Operator | undefined }
    | undefined;

  private _instance: Record<string, unknown> | undefined;

  constructor(
    method: CommonFunction,
    file: string,
    options?: { tags: Array<string>; operator?: Operator },
  ) {
    this._method = method;
    this._file = file;
    this._options = options;
  }

  public getMethod(): CommonFunction {
    return this._method;
  }

  public getFilePath(): string {
    return this._file;
  }

  public setInstance(instance: Record<string, unknown>): void {
    this._instance = instance;
  }

  public getTags(): Array<string> {
    return this._options ? this._options.tags : [];
  }

  public getTagAggregationOperator(): Operator {
    return this._options?.operator
      ? this._options.operator
      : Operator.And;
  }

  public getInstance(): Record<string, unknown> | undefined {
    return this._instance;
  }
}
