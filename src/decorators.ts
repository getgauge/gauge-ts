export function Step(stepTexts: string | Array<string>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(stepTexts);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
