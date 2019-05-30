import { StaticLoader } from '../../src/loaders/StaticLoader';
import registry from '../../src/models/StepRegistry';
import { Util } from '../../src/utils/Util';

describe('StaticLoaderTests', () => {

    let loader: StaticLoader;
    let text1 = `import { Step } from "gauge-ts";` +
        `export default class StepImpl {` +
        `    @Step("foo")` +
        `    public async foo() {` +
        `        console.log("Hello World");` +
        `    }` +
        `}`;

    let text2 = `import { Step } from "gauge-ts";` +
        `export default class StepImpl {` +
        `    @Step("bar")` +
        `    public async bar() {` +
        `        console.log("Hello World");` +
        `    }` +
        `}`;

    beforeEach(() => {
        jest.clearAllMocks();
        loader = new StaticLoader();
        registry.clear();
    })

    describe('.loadFromText', () => {
        it('should load steps from given text', () => {
            let file = 'StepImpl.ts';
            loader.loadStepsFromText(file, text1);

            expect(registry.isImplemented("foo")).toBe(true);
        })
    })

    describe('.reloadSteps', () => {
        it('should reload steps from given test', () => {
            let file = 'StepImpl.ts';
            loader.loadStepsFromText(file, text1);

            expect(registry.isImplemented("foo")).toBe(true);

            loader.reloadSteps(text2, file)

            expect(registry.isImplemented("foo")).toBe(false);
            expect(registry.isImplemented("bar")).toBe(true);
        })

    })

    describe('.removeSteps', () => {
        it('should remove steps for a given file', () => {
            let file = 'StepImpl.ts';
            let file2 = 'StepImpl2.ts';
            loader.loadStepsFromText(file, text1);
            loader.loadStepsFromText(file2, text2);

            expect(registry.isImplemented("foo")).toBe(true);
            expect(registry.isImplemented("bar")).toBe(true);

            loader.removeSteps(file)
            expect(registry.isImplemented("foo")).toBe(false);
            expect(registry.isImplemented("bar")).toBe(true);
        })

    })


    describe('.loadImplementations', () => {
        it('should load steps from all the files', () => {
            let file1 = 'StepImpl.ts';
            let file2 = 'StepImpl2.ts';

            let mockFn = jest.fn().mockImplementation((file: string) => {
                return file == file1 ? text1 : text2;
            });
            Util.readFile = mockFn;
            Util.getListOfFiles = jest.fn().mockReturnValue([file1, file2]);

            loader.loadImplementations();

            expect(registry.isImplemented("foo")).toBe(true);
            expect(registry.isImplemented("bar")).toBe(true);
        })

    })

})
