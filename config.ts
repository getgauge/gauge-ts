import "jest-ts-auto-mock";
import { tmpdir } from "node:os";
process.env.gauge_screenshots_dir = tmpdir();
