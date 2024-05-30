import type { HookRegistry } from "./HookRegistry";
import type { StepRegistry } from "./StepRegistry";

export interface GlobalStepRegistry extends Global {
  gaugeStepRegistry: StepRegistry,
  gaugeHookRegistry: HookRegistry
}
