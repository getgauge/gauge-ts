import { HookMethod } from "../../src/models/HookMethod";
import hookRegistry from "../../src/models/HookRegistry";
import { HookType } from "../../src/models/HookType";
import { Operator } from "../../src/public/Operator";

describe("HookRegistry", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const DUMMY_FUNC = () => {};
  const FILE = "HookImpl.ts";

  afterEach(() => {
    hookRegistry.clear();
  });

  describe(".add", () => {
    it("should add a given hook", () => {
      hookRegistry.addHook(
        HookType.BeforeSuite,
        new HookMethod(DUMMY_FUNC, FILE),
      );
      expect(hookRegistry.get(HookType.BeforeSuite, []).length).toEqual(1);
    });
  });

  describe(".get", () => {
    it("should give empty list if there is not hooks", () => {
      expect(hookRegistry.get(HookType.AfterScenario, [])).toStrictEqual([]);
    });

    it("should give empty list if there is not hooks for given tag", () => {
      hookRegistry.addHook(
        HookType.AfterScenario,
        new HookMethod(DUMMY_FUNC, FILE, { tags: ["scenario"] }),
      );
      expect(hookRegistry.get(HookType.AfterScenario, ["spec"])).toStrictEqual(
        [],
      );
    });

    it("should give hooks for given tag", () => {
      const hook = new HookMethod(DUMMY_FUNC, FILE, { tags: ["scenario"] });

      hookRegistry.addHook(HookType.AfterScenario, hook);
      expect(
        hookRegistry.get(HookType.AfterScenario, ["scenario"]),
      ).toStrictEqual([hook]);
    });

    it("should give hooks for given tag with default operator if not given", () => {
      const hook = new HookMethod(DUMMY_FUNC, FILE, {
        tags: ["scenario", "spec"],
      });

      hookRegistry.addHook(HookType.AfterScenario, hook);
      expect(
        hookRegistry.get(HookType.AfterScenario, ["scenario"]),
      ).toStrictEqual([]);
    });

    it("should give hooks for given tag with given operator", () => {
      const hook = new HookMethod(DUMMY_FUNC, FILE, {
        tags: ["scenario", "spec"],
        operator: Operator.Or,
      });

      hookRegistry.addHook(HookType.AfterScenario, hook);
      expect(
        hookRegistry.get(HookType.AfterScenario, ["scenario"]),
      ).toStrictEqual([hook]);
    });

    it("should give hooks for given all hooks if no tag is given", () => {
      const hook = new HookMethod(DUMMY_FUNC, FILE);

      hookRegistry.addHook(HookType.AfterScenario, hook);
      expect(hookRegistry.get(HookType.AfterScenario, ["spec"])).toStrictEqual([
        hook,
      ]);
      expect(
        hookRegistry.get(HookType.AfterScenario, [])[0].getMethod(),
      ).toEqual(DUMMY_FUNC);
      expect(
        hookRegistry.get(HookType.AfterScenario, [])[0].getFilePath(),
      ).toEqual(FILE);
    });
  });

  describe(".setInstanceForMethodsIn", () => {
    it("shooud set the instance for all methods of a given FILE", () => {
      const FILE_1 = "HookImpl1.ts";

      hookRegistry.addHook(
        HookType.BeforeSuite,
        new HookMethod(DUMMY_FUNC, FILE),
      );
      hookRegistry.addHook(
        HookType.AfterSuite,
        new HookMethod(DUMMY_FUNC, FILE_1),
      );

      hookRegistry.setInstanceForMethodsIn(FILE, {});
      expect(
        hookRegistry.get(HookType.BeforeSuite, [])[0].getInstance(),
      ).toBeDefined();
      expect(
        hookRegistry.get(HookType.AfterSuite, [])[0].getInstance(),
      ).toBeDefined();
    });
  });
});
