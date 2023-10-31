module.exports = {
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      "compiler": "ts-patch/compiler"
    }
  },
  testRegex: '/tests/.*(Test)?\\.(ts)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "src/gen/*",
    "src/utils/*"
  ],
  setupFiles: [
    "<rootDir>config.ts",
  ]
};