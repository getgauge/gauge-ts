import { existsSync, readFileSync } from "fs";

import { gauge } from "../gen/messages";
import { StaticLoader } from "../loader/StaticLoader";
import registry from "../models/StepRegistry";
import { IMessageProcessor } from "./IMessageProcessor";

export class CacheFileProcessor implements IMessageProcessor {
    private readonly _loader: StaticLoader;

    constructor(loader: StaticLoader) {
        this._loader = loader;
    }

    public async process(message: gauge.messages.IMessage): Promise<gauge.messages.IMessage> {
        let req = message.cacheFileRequest as gauge.messages.CacheFileRequest
        switch (req.status) {
            case gauge.messages.CacheFileRequest.FileStatus.CHANGED:
            case gauge.messages.CacheFileRequest.FileStatus.OPENED:
                this._loader.reloadSteps(req.content, req.filePath)
                break;
            case gauge.messages.CacheFileRequest.FileStatus.CREATED:
                if (!registry.isFileCached(req.filePath)) {
                    this.loadFromDisk(req.filePath);
                }
                break;
            case gauge.messages.CacheFileRequest.FileStatus.CLOSED:
                this.loadFromDisk(req.filePath);
                break;
            case gauge.messages.CacheFileRequest.FileStatus.DELETED:
                this._loader.reoveSteps(req.filePath);
                break;
            default:
                this._loader.reloadSteps(req.content, req.filePath)
                break;
        }
        return new gauge.messages.Message();
    }

    private loadFromDisk(filePath: string) {
        if (!existsSync(filePath)) return;
        this._loader.reloadSteps(readFileSync(filePath, 'utf-8'), filePath)
    }

}