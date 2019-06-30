module.exports = {
  collectCoverageFrom: [
    'src/(components|pages|api|reducers|actions)/**/*.{js,jsx,ts,tsx}',
    'src/App.js',
    '!src/(components|api)/**/*.(d.ts|stories.js)',
    '!src/(components|api)/**/*Styled.js',
    '!src/(components|api)/**/Styled*.js'
  ],
  coverageDirectory: '<rootDir>/coverage',
  resolver: 'jest-pnp-resolver',
  setupFiles: ['react-app-polyfill/jsdom', '<rootDir>/src/setupTests.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}'
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
      '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ],
  watchPlugins: [
    '<rootDir>/node_modules/jest-watch-typeahead/filename.js',
    '<rootDir>/node_modules/jest-watch-typeahead/testname.js'
  ],
  globals: {
    ENVIRONMENT_CONFIGURATION: {
      BACKEND_API: ''
    },
    BUILD_CONFIGURATION: {}
  }
};
