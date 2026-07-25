import {
  type CacheFileRequest,
  CacheFileRequest_FileStatus,
} from "../gen/messages";
import type StaticLoader from "../loaders/StaticLoader";
import registry from "../models/StepRegistry";
import { Util } from "../utils/Util";

export class CacheFileProcessor {
  private readonly _loader: StaticLoader;

  constructor(loader: StaticLoader) {
    this._loader = loader;
  }

  public process(req: CacheFileRequest): void {
    switch (req.status) {
      case CacheFileRequest_FileStatus.CHANGED:
      case CacheFileRequest_FileStatus.OPENED:
        this._loader.reloadSteps(req.content, req.filePath);
        break;
      case CacheFileRequest_FileStatus.CREATED:
        if (!registry.isFileCached(req.filePath)) {
          this.loadFromDisk(req.filePath);
        }
        break;
      case CacheFileRequest_FileStatus.CLOSED:
        this.loadFromDisk(req.filePath);
        break;
      case CacheFileRequest_FileStatus.DELETED:
        this._loader.removeSteps(req.filePath);
        break;
    }
  }

  private loadFromDisk(filePath: string) {
    if (!Util.exists(filePath)) {
      return;
    }
    this._loader.reloadSteps(Util.readFile(filePath), filePath);
  }
}
