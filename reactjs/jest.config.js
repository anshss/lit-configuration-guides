module.exports = {
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts",
    "<rootDir>/src/jest.mock.js",
    "<rootDir>/src/setupJest.js",
  ],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    '^buffer$': 'browserify-buffer',
    '^buffer-from$': 'buffer-from',
    '^crypto$': 'crypto-browserify',
    '^stream$': 'stream-browserify',
    '^vm$': 'vm-browserify',
  },
  moduleDirectories: ['node_modules', '<rootDir>/reactjs/src'],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transformIgnorePatterns: [
    'node_modules/(?!(uint8arrays|@walletconnect|other-modules)/)',
  ],
};
