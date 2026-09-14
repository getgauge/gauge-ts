import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Keeps describe/it/expect/vi ambient, so the suites read the same as they
    // did under Jest.
    globals: true,
    environment: "node",
    include: ["tests/**/*.ts"],
    setupFiles: ["./config.ts"],
    coverage: {
      exclude: ["src/gen/**", "src/utils/**"],
    },
  },
});
