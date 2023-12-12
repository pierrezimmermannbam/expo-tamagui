/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: 'jsdom',
  rootDir: '.',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  clearMocks: true,
  cacheDirectory: '.cache/jest',
  transform: {
    '\\.[jt]sx?$': ['@sucrase/jest-plugin', { jsxRuntime: 'automatic' }],
  },
  moduleNameMapper: {
    // Keep in sync with babel.config.js and tsconfig.json
    'app/(.*)': '../../packages/app/$1',
    '@my/ui/(.*)': '../../packages/ui/$1',
    '^react-native$': 'react-native-web',
  },
};
