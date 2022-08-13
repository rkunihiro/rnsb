const { pathsToModuleNameMapper } = require("ts-jest");
const { loadConfig } = require("tsconfig-paths");

const tsconfig = loadConfig();

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "jest-expo",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

    // paths
    moduleNameMapper: pathsToModuleNameMapper(tsconfig.paths, { prefix: tsconfig.absoluteBaseUrl }),
};
