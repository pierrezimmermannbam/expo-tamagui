// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseNativeConfig = require('../../tests/jest.config.native.js');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...baseNativeConfig,
};
