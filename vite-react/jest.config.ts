module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Add both TypeScript and JSX extensions
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for transforming TypeScript
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // In case you're importing styles
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/jest.mock.js',
  },
};