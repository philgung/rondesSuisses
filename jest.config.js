module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.*\\.ts$': 'ts-jest',
  },
  testMatch: ['**/test/*.ts', '**/*.test.ts'],
  testEnvironment: 'node',
};