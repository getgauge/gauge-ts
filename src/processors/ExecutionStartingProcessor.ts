import { open } from "inspector";
import type {
  ExecutionInfo,
  ExecutionStartingRequest,
} from "../gen/messages_pb";
import type { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import {
  type HookExectionRequest,
  HookExecutionProcessor,
} from "./HookExecutionProcessor";

const ATTACH_DEBUGGER_EVENT = "Runner Ready for Debugging";

export class ExecutionStartingProcessor extends HookExecutionProcessor {
  protected hookType: HookType = HookType.BeforeSuite;

  private static sleepFor(ms: number) {
    const now = new Date().getTime();

    while (new Date().getTime() < now + ms) {
      /* do nothing */
    }
  }

  protected getExecutionInfo(message: HookExectionRequest): ExecutionInfo {
    if (process.env.DEBUGGING) {
      const port = Number.parseInt(process.env.DEBUG_PORT as string);

      console.log(ATTACH_DEBUGGER_EVENT);
      open(port, "127.0.0.1", true);
      ExecutionStartingProcessor.sleepFor(1000);
    }
    const req = message as ExecutionStartingRequest;

    return req.getCurrentexecutioninfo() as ExecutionInfo;
  }

  protected getApplicableHooks(): Array<HookMethod> {
    return hookRegistry.get(this.hookType, []);
  }
}
