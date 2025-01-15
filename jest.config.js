export default {
    testEnvironment: "node",
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    moduleFileExtensions: ["js", "json"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.js"],
    coverageDirectory: "coverage",
    testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
    verbose: true
};