// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

import { defaults } from "jest-config";

const config = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
};

export default config;
