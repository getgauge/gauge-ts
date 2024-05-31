import { Operator } from "..";
import type { GlobalStepRegistry } from "./GlobalRegistry";
import type { HookMethod } from "./HookMethod";
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
      [HookType.AfterStep, new Array<HookMethod>()],
    ]);
  }

  public addHook(type: HookType, method: HookMethod): void {
    (this._hooks.get(type) as Array<HookMethod>).push(method);
  }

  public get(type: HookType, tags: Array<string>): Array<HookMethod> {
    const hooks = this._hooks.get(type) as Array<HookMethod>;

    if (!hooks || !hooks.length) {
      return [];
    }

    if (!tags.length) {
      return hooks.filter((hook) => {
        return hook.getTags().length === 0;
      });
    }

    return hooks.filter((hook) => {
      const hookTags = hook.getTags();
      const operator = hook.getTagAggregationOperator();

      if (!hookTags.length) {
        return true;
      }
      const matched = HookRegistry.hasIntersection(tags, hookTags);

      switch (operator) {
        case Operator.And:
          return matched === hookTags.length;
        case Operator.Or:
          return matched > 0;
      }
    });
  }

  public setInstanceForMethodsIn(
    file: string,
    instance: Record<string, unknown>,
  ): void {
    this._hooks.forEach((hookMethods) => {
      hookMethods.forEach((hookMethod) => {
        hookMethod.setInstance(instance);
      });
    });
  }

  public clear(): void {
    this._hooks.forEach((v, k) => {
      this._hooks.set(k, new Array<HookMethod>());
    });
  }

  private static hasIntersection(tags: string[], hookTags: string[]): number {
    return tags.filter((t) => {
      return hookTags.includes(t);
    }).length;
  }
}
declare const global: GlobalStepRegistry;

if (!global.gaugeHookRegistry) {
  global.gaugeHookRegistry = new HookRegistry();
}
const hookRegistry = global.gaugeHookRegistry;

export default hookRegistry;
