"use strict";

var compilerOptions = require('./tsconfig.json');
compilerOptions.module = 'CommonJs';
// compilerOptions.target = 'ES5'; // may also do this if required

module.exports = function (wallaby) {
    return {
        files: [
            "site/Elements/Button/Button.tsx",
            "package.json"
        ],
        tests: [
            "site/Elements/Button/Button.test.tsx"
        ],
        env: {
            type: "node",
            runner: "node"
        },
        compilers: {
          '**/*.ts?(x)': wallaby.compilers.typeScript(compilerOptions)
        },
        testFramework: "jest",
        debug: true,
        bootstrap: function (wallaby) {
            wallaby.testFramework.configure(require("./package.json").jest);
        }
    };
};
