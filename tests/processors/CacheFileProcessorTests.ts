import { CacheFileRequest } from "../../src/gen/messages_pb";
import { StaticLoader } from "../../src/loaders/StaticLoader";
import registry from "../../src/models/StepRegistry";
import { CacheFileProcessor } from "../../src/processors/CacheFileProcessor";
import { Util } from "../../src/utils/Util";

describe("CacheFileProcessor", () => {
  let processor: CacheFileProcessor;
  let loader: StaticLoader;
  const file1 = "StepImpl1.ts";
  const text1 =
    `import { Step } from "gauge-ts";` +
    `export default class StepImpl {` +
    `    @Step("foo")` +
    `    public async foo() {` +
    `        console.log("Hello World");` +
    `    }` +
    `}`;
  const text2 =
    `import { Step } from "gauge-ts";` +
    `export default class StepImpl {` +
    `    @Step("bar")` +
    `    public async bar() {` +
    `        console.log("Hello World");` +
    `    }` +
    `}`;

  beforeEach(() => {
    jest.clearAllMocks();
    loader = new StaticLoader();
    processor = new CacheFileProcessor(loader);
    registry.clear();
  });

  describe(".process", () => {
    it("should process cacheFileRequest when a file is opened", () => {
      const req = new CacheFileRequest();

      req.setStatus(CacheFileRequest.FileStatus.OPENED);
      req.setContent(text1);
      req.setFilepath(file1);
      req.setIsclosed(false);
      processor.process(req);
      expect(registry.isImplemented("foo")).toBe(true);
    });

    it("should process cacheFileRequest when a file is changed", () => {
      loader.loadStepsFromText(file1, text1);
      const req = new CacheFileRequest();

      req.setStatus(CacheFileRequest.FileStatus.CHANGED);
      req.setContent(text2);
      req.setFilepath(file1);
      req.setIsclosed(false);
      processor.process(req);
      expect(registry.isImplemented("foo")).toBe(false);
      expect(registry.isImplemented("bar")).toBe(true);
    });

    it("should process cacheFileRequest when a file is created", () => {
      Util.exists = jest.fn().mockReturnValue(true);
      Util.readFile = jest.fn().mockReturnValue(text1);
      const req = new CacheFileRequest();

      req.setStatus(CacheFileRequest.FileStatus.CREATED);
      req.setFilepath(file1);
      req.setIsclosed(false);
      processor.process(req);
      expect(registry.isImplemented("foo")).toBe(true);
    });

    it("should process cacheFileRequest when a file is created and cached", () => {
      registry.isFileCached = jest.fn().mockReturnValue(true);

      const req = new CacheFileRequest();

      req.setStatus(CacheFileRequest.FileStatus.CREATED);
      req.setFilepath(file1);
      req.setIsclosed(false);
      processor.process(req);
      expect(registry.isImplemented("foo")).toBe(false);
    });

    it("should process cacheFileRequest when a file closed", () => {
      loader.loadStepsFromText(file1, text1);

      expect(registry.isImplemented("foo")).toBe(true);

      Util.exists = jest.fn().mockReturnValue(true);
      Util.readFile = jest.fn().mockReturnValue(text2);

      const req = new CacheFileRequest();

      req.setStatus(CacheFileRequest.FileStatus.CLOSED);
      req.setFilepath(file1);
      req.setIsclosed(true);
      processor.process(req);
      expect(registry.isImplemented("foo")).toBe(false);
      expect(registry.isImplemented("bar")).toBe(true);
    });

    it("should process cacheFileRequest when a file closed and dont exists anymore", () => {
      Util.exists = jest.fn().mockReturnValue(false);
      const req = new CacheFileRequest();

      req.setStatus(CacheFileRequest.FileStatus.CLOSED);
      req.setFilepath(file1);
      processor.process(req);
      expect(registry.isImplemented("foo")).toBe(false);
    });

    it("should process cacheFileRequest when a file deleted", () => {
      loader.loadStepsFromText(file1, text1);
      const req = new CacheFileRequest();

      req.setStatus(CacheFileRequest.FileStatus.DELETED);
      req.setFilepath(file1);
      processor.process(req);
      expect(registry.isImplemented("foo")).toBe(false);
    });
  });
});
