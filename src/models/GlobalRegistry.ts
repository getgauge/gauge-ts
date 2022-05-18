import Global = NodeJS.Global;
import {StepRegistry} from "./StepRegistry";
import {HookRegistry} from "./HookRegistry";

export interface GlobalStepRegistry extends Global {
    gaugeStepRegistry: StepRegistry,
    gaugeHookRegistry: HookRegistry
}