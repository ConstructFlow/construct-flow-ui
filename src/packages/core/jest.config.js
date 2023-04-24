module.exports = {
  displayName: '@construct-flow/core',
  testMatch: ['<rootDir>/__tests__/**/*.test.js'],
  testPathIgnorePatterns: ['packages/core-react', 'packages/core-angular'],
  testEnvironment: 'jest-environment-node-single-context',
};
