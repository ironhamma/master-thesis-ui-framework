export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testMatch: ["<rootDir>/test/*.test.js"],
};
