module.exports = {
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        compiler: "typescript",
        diagnostics: false,
      },
    ],
  },
  testEnvironment: "node",
  // reporters: ["jest-silent-reporter"],
  testRegex: "/tests/.*\\.ts$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coveragePathIgnorePatterns: ["/node_modules/", "src/gen/*", "src/utils/*"],
  setupFiles: ["<rootDir>config.ts"],
};
