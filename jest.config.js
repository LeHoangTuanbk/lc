/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  testMatch: ["**/src/**/*.+(test|spec).ts"],

  moduleFileExtensions: ["ts", "js", "json", "node"],
};
