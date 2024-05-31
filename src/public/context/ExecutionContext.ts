import type { Scenario } from "./Scenario";
import type { Specification } from "./Specification";
import type { StepInfo } from "./StepInfo";

export class ExecutionContext {
  private readonly _spec: Specification | null;
  private readonly _scenario: Scenario | null;
  private readonly _step: StepInfo | null;
  private readonly _stackTrace: string | null;

  constructor(
    spec: Specification | null,
    scenario: Scenario | null,
    step: StepInfo | null,
    stackTrace: string | null,
  ) {
    this._spec = spec;
    this._scenario = scenario;
    this._step = step;
    this._stackTrace = stackTrace;
  }

  public getCurrentSpec(): Specification | null {
    return this._spec;
  }

  public getCurrentScenario(): Scenario | null {
    return this._scenario;
  }

  public getCurrentStep(): StepInfo | null {
    return this._step;
  }

  public getStacktrace(): string | null {
    return this._stackTrace;
  }
}
