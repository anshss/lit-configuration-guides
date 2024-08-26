const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transform TypeScript files
    "^.+\\.(mjs)$": "babel-jest", // Support for ES modules with .mjs files
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"], // Removed ".js" to avoid conflict
};

module.exports = createJestConfig(customJestConfig);
