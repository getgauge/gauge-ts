module.exports = {
  transform: {
    '^.+\\.ts?$': ['ts-jest', {
      compiler: "typescript"
    }]
  },
  testEnvironment: 'node',
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
