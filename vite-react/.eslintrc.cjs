module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Update this path to make sure ESLint points to the correct tsconfig.json file
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,  // Ensures ESLint uses the correct root directory
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-refresh'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  },
};
