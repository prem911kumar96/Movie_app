module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/src/tests/**/*.test.ts"],
  transformIgnorePatterns: ["/node_modules/"],
  extensionsToTreatAsEsm: [".ts"],
};
