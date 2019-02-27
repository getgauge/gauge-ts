import registry from './models/StepRegistry';
import { StepRegistryEntry } from './models/StepRegistryEntry';

export function Step(stepText: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        registry.add(stepText.replace(/(<.*?>)/g, "{}"), new StepRegistryEntry(descriptor.value, target));
    };
}
