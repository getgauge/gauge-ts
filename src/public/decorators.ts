import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import stepRegistry from "../models/StepRegistry";
import { StepRegistryEntry } from "../models/StepRegistryEntry";
import type { Operator } from "./Operator";
import { Screenshot } from "../screenshot/Screenshot";

/**
 *
 * @param stepTexts form accept only string parameters.
 * As far as you want to use e.g. number you will need to convert it first
 *
 * @constructor
 */
export function Step(stepTexts: string | Array<string>): MethodDecorator {
  return (target: unknown, _propertyKey, descriptor: PropertyDescriptor) => {
    let _stepTexts = stepTexts;

    if (!(_stepTexts instanceof Array)) {
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
          descriptor.value,
          undefined,
          _stepTexts.length > 1,
        ),
      );
    }
  };
}

export function ContinueOnFailure(exceptions?: Array<string>): MethodDecorator {
  return (target: unknown, _propertyKey, descriptor: PropertyDescriptor) => {
    stepRegistry.addContinueOnFailure(descriptor.value, exceptions);
  };
}

export function BeforeSuite(): MethodDecorator {
  return (target: unknown, _propertyKey, descriptor: PropertyDescriptor) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.BeforeSuite,
      new HookMethod(descriptor.value, file),
    );
  };
}

export function AfterSuite(): MethodDecorator {
  return (target: unknown, _propertyKey, descriptor: PropertyDescriptor) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.AfterSuite,
      new HookMethod(descriptor.value, file),
    );
  };
}

export function BeforeSpec(options?: {
  tags: Array<string>;
  operator?: Operator;
}): MethodDecorator {
  return (target: unknown, _propertyKey, descriptor: PropertyDescriptor) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.BeforeSpec,
      new HookMethod(descriptor.value, file, options),
    );
  };
}

export function AfterSpec(options?: {
  tags: Array<string>;
  operator?: Operator;
}): MethodDecorator {
  return (target: unknown, _propertyKey, descriptor: PropertyDescriptor) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.AfterSpec,
      new HookMethod(descriptor.value, file, options),
    );
  };
}

export function BeforeScenario(options?: {
  tags: Array<string>;
  operator?: Operator;
}): MethodDecorator {
  return (target: unknown, _propertyKey, descriptor: PropertyDescriptor) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.BeforeScenario,
      new HookMethod(descriptor.value, file, options),
    );
  };
}

export function AfterScenario(options?: {
  tags: Array<string>;
  operator?: Operator;
}): MethodDecorator {
  return (target: unknown, _propertyKey, descriptor: PropertyDescriptor) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.AfterScenario,
      new HookMethod(descriptor.value, file, options),
    );
  };
}

export function BeforeStep(options?: {
  tags: Array<string>;
  operator?: Operator;
}): MethodDecorator {
  return (target: unknown, _propertyKey, descriptor: PropertyDescriptor) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.BeforeStep,
      new HookMethod(descriptor.value, file, options),
    );
  };
}

export function AfterStep(options?: {
  tags: Array<string>;
  operator?: Operator;
}): MethodDecorator {
  return (target: unknown, _propertyKey, descriptor: PropertyDescriptor) => {
    const file = process.env.STEP_FILE_PATH as string;

    hookRegistry.addHook(
      HookType.AfterStep,
      new HookMethod(descriptor.value, file, options),
    );
  };
}

/**
 * @deprecated Use CustomScreenshotWriter instead.
 */
export function CustomScreenGrabber(): MethodDecorator {
  console.warn(
    "CustomScreenGrabber is deprecated. Please use CustomScreenWriter.",
  );

  return (target: unknown, _propertyKey, descriptor: PropertyDescriptor) => {
    Screenshot.setCustomScreenGrabber(descriptor.value);
  };
}

export function CustomScreenshotWriter(): MethodDecorator {
  return (target: unknown, _propertyKey, descriptor: PropertyDescriptor) => {
    Screenshot.setCustomScreenshotWriter(descriptor.value);
  };
}
