import { Position } from '../../src/models/Position';
import { Range } from '../../src/models/Range';
import registry from '../../src/models/StepRegistry';
import { StepRegistryEntry } from '../../src/models/StepRegistryEntry';

describe('StepRegistry', () => {

    afterEach(() => {
        registry.clear()
    })

    describe(".add", () => {
        it('should add a step to the registry', () => {
            let text = 'hello world';
            let file = 'StepImpl.ts';
            let entry = new StepRegistryEntry(text, text, file);
            registry.add(text, entry);
            expect(registry.isImplemented(text)).toBeTruthy();
        })
    })

    describe(".isImplemented", () => {
        it('should tell if a step is valid or not', () => {
            let text = 'hello world';
            expect(registry.isImplemented(text)).toBe(false);
        })
    })

    describe('.hasMultipleImplementations', () => {
        it('should tell if a step is implemented more than once', () => {
            let text = 'hello world';
            let file = 'StepImpl.ts';
            let file1 = 'StepImpl1.ts';
            let entry1 = new StepRegistryEntry(text, text, file);
            let entry2 = new StepRegistryEntry(text, text, file);
            registry.add(text, entry1);
            registry.add(text, entry2);
            expect(registry.hasMultipleImplementations(text)).toBe(true);
        })
    })

    describe('.get', () => {
        it('should give the step entry', () => {
            let text = 'hello world';
            let file = 'StepImpl.ts';
            let entry1 = new StepRegistryEntry(text, text, file, new Function());
            registry.add(text, entry1);
            expect(registry.get(text)).toStrictEqual(entry1);
            expect(registry.get(text).getMethod()).toBeDefined();
        })
    })

    describe('.addContinueOnFailure', () => {
        it('should mark a step entry as recoverable step', () => {
            let text = 'hello world';
            let file = 'StepImpl.ts';
            let func = () => { };
            let entry1 = new StepRegistryEntry(text, text, file, func);
            registry.add(text, entry1);
            registry.addContinueOnFailure(func, ['Error']);
            expect(registry.getContinueOnFailureFuncs(func)).toStrictEqual(['Error']);
        })

        it('should mark a step entry as recoverable step and add AssertionError as expeted error to contine if not provided', () => {
            let text = 'hello world';
            let file = 'StepImpl.ts';
            let func = () => { };
            let entry1 = new StepRegistryEntry(text, text, file, func);
            registry.add(text, entry1);
            registry.addContinueOnFailure(func);
            expect(registry.getContinueOnFailureFuncs(func)).toStrictEqual(['AssertionError']);
        })
    })

    describe('.getContinueOnFailureFuncs', () => {
        it('shoud give the expected error classes if the given funciton is  recoverable', () => {
            let text = 'hello world';
            let file = 'StepImpl.ts';
            let func = () => { };
            let entry1 = new StepRegistryEntry(text, text, file, func);
            registry.add(text, entry1);
            registry.addContinueOnFailure(func);
            expect(registry.getContinueOnFailureFuncs(func)).toStrictEqual(['AssertionError']);
        })

        it('shoud give empty if the given method is not recoverable', () => {
            let text = 'hello world';
            let file = 'StepImpl.ts';
            let func = () => { };
            let entry1 = new StepRegistryEntry(text, text, file, func);
            registry.add(text, entry1);
            expect(registry.getContinueOnFailureFuncs(func)).toStrictEqual([]);
        })
    })

    describe('.getStepPositions', () => {
        it('should get position of steps from a given file', () => {
            let text = 'hello world';
            let file = 'StepImpl.ts';
            let func = () => { };
            let start = new Position(3, 5);
            let end = new Position(7, 5);
            let span = new Range(start, end)
            let entry1 = new StepRegistryEntry(text, text, file, func, span);
            registry.add(text, entry1);
            let positions = registry.getStepPositions(file);
            expect(positions.length).toEqual(1);
            expect(positions[0].span.getStart()).toEqual(start);
            expect(positions[0].span.getStart().getLine()).toEqual(start.getLine());
            expect(positions[0].span.getStart().getChar()).toEqual(start.getChar());
            expect(positions[0].span.getEnd()).toEqual(end);

            expect(registry.getStepPositions('foo.ts').length).toBe(0);
        })
    })

    describe('.getStepTexts', () => {
        it('should give all the step texts from the registry', () => {
            let text1 = 'hello world';
            let text2 = 'Bonjour le monde';
            let file = 'StepImpl.ts';
            let entry1 = new StepRegistryEntry(text1, text1, file);
            let entry2 = new StepRegistryEntry(text2, text2, file);
            registry.add(text1, entry1);
            registry.add(text2, entry2);
            let steps = registry.getStepTexts();
            expect(steps.length).toEqual(2);
        })
    })

    describe('.isFileCached', () => {
        it('should tell if a file is already scaned', () => {
            let text1 = 'hello world';
            let file = 'StepImpl.ts';
            let entry1 = new StepRegistryEntry(text1, text1, file);
            registry.add(text1, entry1);
            expect(registry.isFileCached(file)).toBe(true);

            expect(registry.isFileCached('foo.ts')).toBe(false);
        })
    })

    describe('.removeSteps', () => {
        it('should remove all the steps of a given file', () => {
            let text1 = 'hello world';
            let text2 = 'Bonjour le monde';
            let file = 'StepImpl.ts';
            let file1 = 'StepImpl1.ts';
            let entry1 = new StepRegistryEntry(text1, text1, file);
            let entry2 = new StepRegistryEntry(text2, text2, file1);
            registry.add(text1, entry1);
            registry.add(text2, entry2);

            registry.removeSteps(file);

            expect(registry.isImplemented(text1)).toBe(false);
            expect(registry.isImplemented(text2)).toBe(true);
        })
    })

    describe('.setInstanceForMethodsIn', () => {
        it('should add an intance for all the steps of a given file', () => {
            let text1 = 'hello world';
            let text2 = 'Bonjour le monde';
            let file = 'StepImpl.ts';
            let file2 = 'StepImpl2.ts';
            let entry1 = new StepRegistryEntry(text1, text1, file);
            let entry2 = new StepRegistryEntry(text2, text2, file2);
            registry.add(text1, entry1);
            registry.add(text2, entry2);

            registry.setInstanceForMethodsIn(file, new Object());

            expect(registry.get(text1).getInstance()).toBeDefined();
            expect(registry.get(text2).getInstance()).toBeUndefined();
        })
    })

})