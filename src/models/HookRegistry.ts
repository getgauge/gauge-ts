import { Operator } from "../public/Operator";
import { HookMethod } from "./HookMethod";
import { HookType } from "./HookType";


export class HookRegistry {

    private _hooks: Map<HookType, Array<HookMethod>>;

    constructor() {
        this._hooks = new Map([
            [HookType.BeforeSuite, new Array<HookMethod>()],
            [HookType.BeforeSpec, new Array<HookMethod>()],
            [HookType.BeforeScenario, new Array<HookMethod>()],
            [HookType.BeforeStep, new Array<HookMethod>()],
            [HookType.AfterSuite, new Array<HookMethod>()],
            [HookType.AfterSpec, new Array<HookMethod>()],
            [HookType.AfterScenario, new Array<HookMethod>()],
            [HookType.AfterStep, new Array<HookMethod>()]
        ])
    }

    public addHook(type: HookType, method: HookMethod) {
        (this._hooks.get(type) as Array<HookMethod>).push(method);
    }

    public get(type: HookType, tags: Array<string>): Array<HookMethod> {
        let hooks = this._hooks.get(type) as Array<HookMethod>;
        if (!hooks || !hooks.length) return [];
        if (!tags.length) return hooks.filter((hook) => { return hook.getTags().length === 0 });
        return hooks.filter((hook) => {
            let hookTags = hook.getTags();
            let operator = hook.getTagAggregationOperator();
            if (!hookTags.length) {
                return true
            };
            let matched = this.hasIntersection(tags, hookTags);
            switch (operator) {
                case Operator.And:
                    return matched === hookTags.length;
                case Operator.Or:
                    return matched > 0;
            }
        })
    }

    public setInstanceForMethodsIn(file: string, instance: object) {
        this._hooks.forEach((hookMethods) => {
            hookMethods.forEach((hookMethod) => {
                hookMethod.setInstance(instance);
            });
        });
    }

    public clear() {
        this._hooks.forEach((v, k) => { this._hooks.set(k, new Array<HookMethod>()) });
    }

    private hasIntersection(tags: string[], hookTags: string[]): number {
        return tags.filter((t) => { return hookTags.includes(t); }).length
    }
}

const hookRegistry = new HookRegistry();
export default hookRegistry;

