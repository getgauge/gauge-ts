import { open } from "inspector";
import { gauge } from "../gen/messages";
import { HookMethod } from "../models/HookMethod";
import hookRegistry from "../models/HookRegistry";
import { HookType } from "../models/HookType";
import { HookExecutionProcessor } from "./HookExecutionProcessor";

export class ExecutionStartingProcessor extends HookExecutionProcessor {

    protected hookType: HookType = HookType.BeforeSuite
    attachDebuggerEvent: string = "Runner Ready for Debugging";
    constructor() {
        super();
    }

    private sleepFor(ms: number) {
        var now = new Date().getTime();
        while (new Date().getTime() < now + ms) { /* do nothing */ }
    }

    protected getExecutionInfo(message: gauge.messages.IMessage): gauge.messages.ExecutionInfo {
        if (process.env.DEBUGGING) {
            var port = parseInt(process.env.DEBUG_PORT as string);
            console.log(this.attachDebuggerEvent);
            open(port, "127.0.0.1", true);
            this.sleepFor(1000);
        }
        return (message.executionStartingRequest as gauge.messages.ExecutionStartingRequest)
            .currentExecutionInfo as gauge.messages.ExecutionInfo;
    }

    protected getApplicableHooks(message: gauge.messages.IMessage): Array<HookMethod> {
        return hookRegistry.get(this.hookType, [])
    }
}

