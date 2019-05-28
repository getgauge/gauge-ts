import { HookMethod } from '../../src/models/HookMethod';
import hookRegistry from '../../src/models/HookRegistry';
import { HookType } from '../../src/models/HookType';
import { Operator } from '../../src/models/Operator';

describe('HookRegistry', () => {
    afterEach(() => {
        hookRegistry.clear();
    })

    describe('.add', () => {
        it('should add a given hook', () => {
            let file = 'HookImpl.ts';
            let f = () => { };
            hookRegistry.addHook(HookType.BeforeSuite, new HookMethod(f, file))
            expect(hookRegistry.get(HookType.BeforeSuite, []).length).toEqual(1);
        })
    })

    describe('.get', () => {
        it('should give empty list if there is not hooks', () => {
            expect(hookRegistry.get(HookType.AfterScenario, [])).toStrictEqual([]);
        })

        it('should give empty list if there is not hooks for given tag', () => {
            let file = 'HookImpl.ts';
            let f = () => { };
            hookRegistry.addHook(HookType.AfterScenario, new HookMethod(f, file, { tags: ['scenario'] }))
            expect(hookRegistry.get(HookType.AfterScenario, ["spec"])).toStrictEqual([]);
        })

        it('should give hooks for given tag', () => {
            let file = 'HookImpl.ts';
            let f = () => { };
            let hook = new HookMethod(f, file, { tags: ['scenario'] });
            hookRegistry.addHook(HookType.AfterScenario, hook);
            expect(hookRegistry.get(HookType.AfterScenario, ['scenario'])).toStrictEqual([hook]);
        })

        it('should give hooks for given tag with default operator if not given', () => {
            let file = 'HookImpl.ts';
            let f = () => { };
            let hook = new HookMethod(f, file, { tags: ['scenario', 'spec'] });
            hookRegistry.addHook(HookType.AfterScenario, hook);
            expect(hookRegistry.get(HookType.AfterScenario, ['scenario'])).toStrictEqual([]);
        })

        it('should give hooks for given tag with given operator', () => {
            let file = 'HookImpl.ts';
            let f = () => { };
            let hook = new HookMethod(f, file, { tags: ['scenario', 'spec'], operator:Operator.Or });
            hookRegistry.addHook(HookType.AfterScenario, hook);
            expect(hookRegistry.get(HookType.AfterScenario, ['scenario'])).toStrictEqual([hook]);
        })

        it('should give hooks for given all hooks if no tag is given', () => {
            let file = 'HookImpl.ts';
            let f = () => { };
            let hook = new HookMethod(f, file);
            hookRegistry.addHook(HookType.AfterScenario, hook);
            expect(hookRegistry.get(HookType.AfterScenario, ['spec'])).toStrictEqual([hook]);
            expect(hookRegistry.get(HookType.AfterScenario, [])[0].getMethod()).toEqual(f);
            expect(hookRegistry.get(HookType.AfterScenario, [])[0].getFilePath()).toEqual(file);
        })
    })

    describe('.setInstanceForMethodsIn', () => {
        it('shooud set the instance for all methods of a given file', () => {
            let file = 'HookImpl.ts';
            let file1 = 'HookImpl1.ts';
            let f = () => { };
            hookRegistry.addHook(HookType.BeforeSuite, new HookMethod(f, file))
            hookRegistry.addHook(HookType.AfterSuite, new HookMethod(f, file1))

            hookRegistry.setInstanceForMethodsIn(file, new Object());
            expect(hookRegistry.get(HookType.BeforeSuite, [])[0].getInstance()).toBeDefined();
            expect(hookRegistry.get(HookType.AfterSuite, [])[0].getInstance()).toBeDefined();
        })
    })


})
