import { HookType } from "./HookType";
import { HookMethod } from "./HookMethod";


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
        if (!tags.length) return hooks.filter((hook) => { return hook.getTags().length === 0 });
        return hooks.filter((hook) => {
            return hook.getTags().some((t) => { return tags.includes(t) })
        })
    }
}

const hookRegistry = new HookRegistry();
export default hookRegistry;

