import type { HookRegistry } from "./HookRegistry";
import type { StepRegistry } from "./StepRegistry";

export interface GlobalStepRegistry {
  gaugeStepRegistry: StepRegistry;
  gaugeHookRegistry: HookRegistry;
}
