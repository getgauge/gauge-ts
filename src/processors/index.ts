import { CacheFileProcessor } from "./CacheFileProcessor";
import { ExecutionEndingProcessor } from "./ExecutionEndingProcessor";
import { ExecutionStartingProcessor } from "./ExecutionStartingProcessor";
import { RefactorProcessor } from "./RefactorProcessor";
import { ScenarioExecutionEndingProcessor } from "./ScenarioExecutionEndingProcessor";
import { ScenarioExecutionStartingProcessor } from "./ScenarioExecutionStartingProcessor";
import { SpecExecutionEndingProcessor } from "./SpecExecutionEndingProcessor";
import { SpecExecutionStartingProcessor } from "./SpecExecutionStartingProcessor";
import { StepExecutionEndingProcessor } from "./StepExecutionEndingProcessor";
import { StepExecutionProcessor } from "./StepExecutionProcessor";
import { StepExecutionStartingProcessor } from "./StepExecutionStartingProcessor";
import { StepNameProcessor } from "./StepNameProcessor";
import { StepPositionsProcessor } from "./StepPositionsProcessor";
import { StubImplementationCodeProcessor } from "./StubImplementationCodeProcessor";
import { ValidationProcessor } from "./ValidationProcessor";

export const cacheFileProcessor = new CacheFileProcessor();
export const executionEndingProcessor = new ExecutionEndingProcessor();
export const executionStartingProcessor = new ExecutionStartingProcessor();
export const refactorProcessor = new RefactorProcessor();
export const scenarioExecutionEndingProcessor =
  new ScenarioExecutionEndingProcessor();
export const scenarioExecutionStartingProcessor =
  new ScenarioExecutionStartingProcessor();
export const specExecutionEndingProcessor = new SpecExecutionEndingProcessor();
export const specExecutionStartingProcessor =
  new SpecExecutionStartingProcessor();
export const stepExecutionEndingProcessor = new StepExecutionEndingProcessor();
export const stepExecutionProcessor = new StepExecutionProcessor();
export const stepExecutionStartingProcessor =
  new StepExecutionStartingProcessor();
export const stepNameProcessor = new StepNameProcessor();
export const stepPositionsProcessor = new StepPositionsProcessor();
export const stubImplementationCodeProcessor =
  new StubImplementationCodeProcessor();
export const validationProcessor = new ValidationProcessor();
