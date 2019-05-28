module.exports = {
    transform: { '^.+\\.ts?$': 'ts-jest' },
    verbose: true,
    testEnvironment: 'node',
    testRegex: '/tests/.*(Test)?\\.(ts)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};