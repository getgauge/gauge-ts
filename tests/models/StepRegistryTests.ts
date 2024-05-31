import { Position } from "../../src/models/Position";
import { Range } from "../../src/models/Range";
import registry from "../../src/models/StepRegistry";
import { StepRegistryEntry } from "../../src/models/StepRegistryEntry";

describe("StepRegistry", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const DUMMY_FUNC = () => {};

  afterEach(() => {
    registry.clear();
  });

  describe(".add", () => {
    it("should add a step to the registry", () => {
      const text = "hello world";
      const file = "StepImpl.ts";
      const entry = new StepRegistryEntry(text, text, file);

      registry.add(text, entry);
      expect(registry.isImplemented(text)).toBeTruthy();
    });
  });

  describe(".isImplemented", () => {
    it("should tell if a step is valid or not", () => {
      const text = "hello world";

      expect(registry.isImplemented(text)).toBe(false);
    });
  });

  describe(".hasMultipleImplementations", () => {
    it("should tell if a step is implemented more than once", () => {
      const text = "hello world";
      const file = "StepImpl.ts";
      const entry1 = new StepRegistryEntry(text, text, file);
      const entry2 = new StepRegistryEntry(text, text, file);

      registry.add(text, entry1);
      registry.add(text, entry2);
      expect(registry.hasMultipleImplementations(text)).toBe(true);
    });
  });

  describe(".get", () => {
    it("should give the step entry", () => {
      const text = "hello world";
      const file = "StepImpl.ts";
      const entry1 = new StepRegistryEntry(text, text, file, DUMMY_FUNC);

      registry.add(text, entry1);
      expect(registry.get(text)).toStrictEqual(entry1);
      expect(registry.get(text).getMethod()).toBeDefined();
    });
  });

  describe(".addContinueOnFailure", () => {
    it("should mark a step entry as recoverable step", () => {
      const text = "hello world";
      const file = "StepImpl.ts";

      const entry1 = new StepRegistryEntry(text, text, file, DUMMY_FUNC);

      registry.add(text, entry1);
      registry.addContinueOnFailure(DUMMY_FUNC, ["Error"]);
      expect(registry.getContinueOnFailureFunctions(DUMMY_FUNC)).toStrictEqual([
        "Error",
      ]);
    });

    it("should mark a step entry as recoverable step and add AssertionError as expeted error to contine if not provided", () => {
      const text = "hello world";
      const file = "StepImpl.ts";
      const entry1 = new StepRegistryEntry(text, text, file, DUMMY_FUNC);

      registry.add(text, entry1);
      registry.addContinueOnFailure(DUMMY_FUNC);
      expect(registry.getContinueOnFailureFunctions(DUMMY_FUNC)).toStrictEqual([
        "AssertionError",
      ]);
    });
  });

  describe(".getContinueOnFailureFuncs", () => {
    it("shoud give the expected error classes if the given funciton is  recoverable", () => {
      const text = "hello world";
      const file = "StepImpl.ts";
      const entry1 = new StepRegistryEntry(text, text, file, DUMMY_FUNC);

      registry.add(text, entry1);
      registry.addContinueOnFailure(DUMMY_FUNC);
      expect(registry.getContinueOnFailureFunctions(DUMMY_FUNC)).toStrictEqual([
        "AssertionError",
      ]);
    });

    it("shoud give empty if the given method is not recoverable", () => {
      const text = "hello world";
      const file = "StepImpl.ts";
      const entry1 = new StepRegistryEntry(text, text, file, DUMMY_FUNC);

      registry.add(text, entry1);
      expect(registry.getContinueOnFailureFunctions(DUMMY_FUNC)).toStrictEqual(
        [],
      );
    });
  });

  describe(".getStepPositions", () => {
    it("should get position of steps from a given file", () => {
      const text = "hello world";
      const file = "StepImpl.ts";
      const start = new Position(3, 5);
      const end = new Position(7, 5);
      const span = new Range(start, end);
      const entry1 = new StepRegistryEntry(text, text, file, DUMMY_FUNC, span);

      registry.add(text, entry1);
      const positions = registry.getStepPositions(file);

      expect(positions.length).toEqual(1);
      expect(positions[0].span.getStart()).toEqual(start);
      expect(positions[0].span.getStart().getLine()).toEqual(start.getLine());
      expect(positions[0].span.getStart().getChar()).toEqual(start.getChar());
      expect(positions[0].span.getEnd()).toEqual(end);

      expect(registry.getStepPositions("foo.ts").length).toBe(0);
    });
  });

  describe(".getStepTexts", () => {
    it("should give all the step texts from the registry", () => {
      const text1 = "hello world";
      const text2 = "Bonjour le monde";
      const file = "StepImpl.ts";
      const entry1 = new StepRegistryEntry(text1, text1, file);
      const entry2 = new StepRegistryEntry(text2, text2, file);

      registry.add(text1, entry1);
      registry.add(text2, entry2);
      const steps = registry.getStepTexts();

      expect(steps.length).toEqual(2);
    });
  });

  describe(".isFileCached", () => {
    it("should tell if a file is already scaned", () => {
      const text1 = "hello world";
      const file = "StepImpl.ts";
      const entry1 = new StepRegistryEntry(text1, text1, file);

      registry.add(text1, entry1);
      expect(registry.isFileCached(file)).toBe(true);

      expect(registry.isFileCached("foo.ts")).toBe(false);
    });
  });

  describe(".removeSteps", () => {
    it("should remove all the steps of a given file", () => {
      const text1 = "hello world";
      const text2 = "Bonjour le monde";
      const file = "StepImpl.ts";
      const file1 = "StepImpl1.ts";
      const entry1 = new StepRegistryEntry(text1, text1, file);
      const entry2 = new StepRegistryEntry(text2, text2, file1);

      registry.add(text1, entry1);
      registry.add(text2, entry2);

      registry.removeSteps(file);

      expect(registry.isImplemented(text1)).toBe(false);
      expect(registry.isImplemented(text2)).toBe(true);
    });
  });

  describe(".setInstanceForMethodsIn", () => {
    it("should add an intance for all the steps of a given file", () => {
      const text1 = "hello world";
      const text2 = "Bonjour le monde";
      const file = "StepImpl.ts";
      const file2 = "StepImpl2.ts";
      const entry1 = new StepRegistryEntry(text1, text1, file);
      const entry2 = new StepRegistryEntry(text2, text2, file2);

      registry.add(text1, entry1);
      registry.add(text2, entry2);

      registry.setInstanceForMethodsIn(file, {});

      expect(registry.get(text1).getInstance()).toBeDefined();
      expect(registry.get(text2).getInstance()).toBeUndefined();
    });
  });
});
