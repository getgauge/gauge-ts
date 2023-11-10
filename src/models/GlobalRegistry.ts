import {StepRegistry} from "./StepRegistry";
import {HookRegistry} from "./HookRegistry";

export interface GlobalStepRegistry extends Global {
    gaugeStepRegistry: StepRegistry,
    gaugeHookRegistry: HookRegistry
}

declare global {
    // eslint-disable-next-line no-var
    var gaugeHookRegistry: HookRegistry;
    // eslint-disable-next-line no-var
    var gaugeStepRegistry: StepRegistry;
}