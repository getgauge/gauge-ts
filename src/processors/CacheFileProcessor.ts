import { CacheFileRequest } from "../gen/messages_pb";
import type { StaticLoader } from "../loaders/StaticLoader";
import registry from "../models/StepRegistry";
import { Util } from "../utils/Util";

export class CacheFileProcessor {
  private readonly _loader: StaticLoader;

  constructor(loader: StaticLoader) {
    this._loader = loader;
  }

  public process(req: CacheFileRequest): void {
    switch (req.getStatus()) {
      case CacheFileRequest.FileStatus.CHANGED:
      case CacheFileRequest.FileStatus.OPENED:
        this._loader.reloadSteps(req.getContent(), req.getFilepath());
        break;
      case CacheFileRequest.FileStatus.CREATED:
        if (!registry.isFileCached(req.getFilepath())) {
          this.loadFromDisk(req.getFilepath());
        }
        break;
      case CacheFileRequest.FileStatus.CLOSED:
        this.loadFromDisk(req.getFilepath());
        break;
      case CacheFileRequest.FileStatus.DELETED:
        this._loader.removeSteps(req.getFilepath());
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
