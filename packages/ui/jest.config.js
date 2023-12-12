// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseNativeConfig = require('../../jest.config.native.js');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...baseNativeConfig,
  testMatch: ['<rootDir>/src/**/*.test.[jt]s?(x)'],
};
