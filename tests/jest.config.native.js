const packagesToTransform = [
  'react-native',
  'react-native-(.*)',
  '@react-native',
  '@react-native-community',
  '@react-navigation',
  'expo',
  'expo-(.*)',
  'i18n-js',
  '@expo-google-fonts/(.*)',
  'rn-tooltip',
  'solito',
];

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'jest-expo',
  rootDir: '.',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  clearMocks: true,
  transformIgnorePatterns: [`node_modules/(?!(${packagesToTransform.join('|')})/)`],
  cacheDirectory: '.cache/jest',
  transform: {
    'node_modules/react-native/Libraries/Lists': 'babel-jest',
    'node_modules/@react-native/virtualized-lists/Lists': 'babel-jest',
    '\\.[jt]sx?$': ['@sucrase/jest-plugin', { jsxRuntime: 'automatic' }],
  },
  moduleNameMapper: {
    // Keep in sync with babel.config.js and tsconfig.json
    'app/(.*)': '../../packages/app/$1',
    '@my/ui/(.*)': '../../packages/ui/$1',
  },
  snapshotResolver: '<rootDir>/../../tests/snapshotResolver.js',
};
