import { HookMethod } from './models/HookMethod';
import hookRegistry from './models/HookRegistry';
import { HookType } from './models/HookType';
import { Operator as _operator } from './models/Operator';
import stepRegistry from './models/StepRegistry';
import { StepRegistryEntry } from './models/StepRegistryEntry';
import { Screenshot } from './screenshot/Screenshot';
import { DataStoreFactory as _dataStoreFactory } from './stores/DataStoreFactory';
import { MessageStore } from './stores/MessageStore';
import { ScreenshotStore } from './stores/ScreenshotStore';

export function Step(stepText: string) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        let stepValue = stepText.replace(/(<.*?>)/g, "{}");
        stepRegistry.add(stepValue, new StepRegistryEntry(
            stepText,
            stepValue,
            descriptor.value,
            target,
            process.env.STEP_FILE_PATH));
    };
}

export function ContinueOnFailure(exceptions?: Array<string>) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        stepRegistry.addContinueOnFailure(descriptor.value, exceptions);
    };
}

export function BeforeSuite() {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        hookRegistry.addHook(HookType.BeforeSuite, new HookMethod(descriptor.value, target))
    };
}

export function AfterSuite() {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        hookRegistry.addHook(HookType.AfterSuite, new HookMethod(descriptor.value, target))
    };
}

export function BeforeSpec() {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        hookRegistry.addHook(HookType.BeforeSpec, new HookMethod(descriptor.value, target))
    };
}

export function AfterSpec() {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        hookRegistry.addHook(HookType.AfterSpec, new HookMethod(descriptor.value, target))
    };
}

export function BeforeScenario(options?: { tags: Array<string>, operator?: _operator }) {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        hookRegistry.addHook(HookType.BeforeScenario, new HookMethod(descriptor.value, target, options))
    };
}

export function AfterScenario() {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        hookRegistry.addHook(HookType.AfterScenario, new HookMethod(descriptor.value, target))
    };
}

export function BeforeStep() {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        hookRegistry.addHook(HookType.BeforeStep, new HookMethod(descriptor.value, target))
    };
}

export function AfterStep() {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        hookRegistry.addHook(HookType.AfterStep, new HookMethod(descriptor.value, target))
    };
}

export function CustomScreenGrabber() {
    return function (target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        Screenshot.setCustomScreenGrabber(descriptor.value);
    };
}
export class Gauge {
    public static async captureScreenshot() {
        ScreenshotStore.addScreenshot(await Screenshot.capture());
    }

    public static writeMessage(message: string) {
        MessageStore.addMessage(message);
    }
}

export const Operator = _operator;
export const DataStoreFactory = _dataStoreFactory;