import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import stepRegistry from "../models/StepRegistry";
import { StepRegistryEntry } from "../models/StepRegistryEntry";
import { Screenshot } from "../screenshot/Screenshot";
import type { CommonFunction } from "../utils/Util";
import type { Operator } from "./Operator";

export function Step(stepTexts: string | Array<string>) {
  return (target: CommonFunction, context: ClassMethodDecoratorContext) => {
    let _stepTexts = stepTexts;

    if (!Array.isArray(_stepTexts)) {
      _stepTexts = [_stepTexts];
    }
    for (const s of _stepTexts) {
      const stepValue = s.replace(/(<.*?>)/g, "{}");

      stepRegistry.add(
        stepValue,
        new StepRegistryEntry(
          s,
          stepValue,
          process.env.STEP_FILE_PATH as string,
          target,
          undefined,
          _stepTexts.length > 1,
        ),
      );
    }
    context.addInitializer(function (this: unknown): void {
      stepRegistry.setInstanceForMethod(
        target,
        this as Record<string, unknown>,
      );
    });
  };
}

export function ContinueOnFailure(exceptions?: Array<string>) {
  return (target: CommonFunction, _context: ClassMethodDecoratorContext) => {
    stepRegistry.addContinueOnFailure(target, exceptions);
  };
}

export function BeforeSuite() {
  return (_target: CommonFunction, _context: ClassMethodDecoratorContext) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(HookType.BeforeSuite, new HookMethod(_target, file));
  };
}

export function AfterSuite() {
  return (target: CommonFunction, _context: ClassMethodDecoratorContext) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(HookType.AfterSuite, new HookMethod(target, file));
  };
}

export function BeforeSpec(options?: {
  tags: Array<string>;
  operator?: Operator;
}) {
  return (target: CommonFunction, _context: ClassMethodDecoratorContext) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.BeforeSpec,
      new HookMethod(target, file, options),
    );
  };
}

export function AfterSpec(options?: {
  tags: Array<string>;
  operator?: Operator;
}) {
  return (target: CommonFunction, _context: ClassMethodDecoratorContext) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.AfterSpec,
      new HookMethod(target, file, options),
    );
  };
}

export function BeforeScenario(options?: {
  tags: Array<string>;
  operator?: Operator;
}) {
  return (target: CommonFunction, _context: ClassMethodDecoratorContext) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.BeforeScenario,
      new HookMethod(target, file, options),
    );
  };
}

export function AfterScenario(options?: {
  tags: Array<string>;
  operator?: Operator;
}) {
  return (target: CommonFunction, _context: ClassMethodDecoratorContext) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.AfterScenario,
      new HookMethod(target, file, options),
    );
  };
}

export function BeforeStep(options?: {
  tags: Array<string>;
  operator?: Operator;
}) {
  return (target: CommonFunction, _context: ClassMethodDecoratorContext) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.BeforeStep,
      new HookMethod(target, file, options),
    );
  };
}

export function AfterStep(options?: {
  tags: Array<string>;
  operator?: Operator;
}) {
  return (target: CommonFunction, _context: ClassMethodDecoratorContext) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.AfterStep,
      new HookMethod(target, file, options),
    );
  };
}

export function CustomScreenshotWriter() {
  return (
    target: CommonFunction<string>,
    _context: ClassMethodDecoratorContext,
  ) => {
    Screenshot.setCustomScreenshotWriter(target);
  };
}
