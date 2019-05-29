import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import { Operator } from "../models/Operator";
import stepRegistry from "../models/StepRegistry";
import { StepRegistryEntry } from "../models/StepRegistryEntry";
import { Screenshot } from "../screenshot/Screenshot";

export function Step(stepText: string) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        let stepValue = stepText.replace(/(<.*?>)/g, "{}");
        stepRegistry.add(stepValue, new StepRegistryEntry(
            stepText,
            stepValue,
            process.env.STEP_FILE_PATH as string,
            descriptor.value));
    };
}

export function ContinueOnFailure(exceptions?: Array<string>) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        stepRegistry.addContinueOnFailure(descriptor.value, exceptions);
    };
}

export function BeforeSuite() {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        let file = process.env.STEP_FILE_PATH as string;
        hookRegistry.addHook(HookType.BeforeSuite, new HookMethod(descriptor.value, file))
    };
}

export function AfterSuite() {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        let file = process.env.STEP_FILE_PATH as string;
        hookRegistry.addHook(HookType.AfterSuite, new HookMethod(descriptor.value, file))
    };
}

export function BeforeSpec(options?: { tags: Array<string>, operator?: Operator }) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        let file = process.env.STEP_FILE_PATH as string;
        hookRegistry.addHook(HookType.BeforeSpec, new HookMethod(descriptor.value, file, options))
    };
}

export function AfterSpec(options?: { tags: Array<string>, operator?: Operator }) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        let file = process.env.STEP_FILE_PATH as string;
        hookRegistry.addHook(HookType.AfterSpec, new HookMethod(descriptor.value, file, options))
    };
}

export function BeforeScenario(options?: { tags: Array<string>, operator?: Operator }) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        let file = process.env.STEP_FILE_PATH as string;
        hookRegistry.addHook(HookType.BeforeScenario, new HookMethod(descriptor.value, file, options))
    };
}

export function AfterScenario(options?: { tags: Array<string>, operator?: Operator }) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        let file = process.env.STEP_FILE_PATH as string;
        hookRegistry.addHook(HookType.AfterScenario, new HookMethod(descriptor.value, file, options))
    };
}

export function BeforeStep(options?: { tags: Array<string>, operator?: Operator }) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        let file = process.env.STEP_FILE_PATH as string;
        hookRegistry.addHook(HookType.BeforeStep, new HookMethod(descriptor.value, file, options))
    };
}

export function AfterStep(options?: { tags: Array<string>, operator?: Operator }) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        let file = process.env.STEP_FILE_PATH as string;
        hookRegistry.addHook(HookType.AfterStep, new HookMethod(descriptor.value, file, options))
    };
}

export function CustomScreenGrabber() {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        Screenshot.setCustomScreenGrabber(descriptor.value);
    };
}
