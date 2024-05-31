import "jest-ts-auto-mock";
import { tmpdir } from "os";
process.env.gauge_screenshots_dir = tmpdir();
