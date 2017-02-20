"use strict";

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
        testFramework: "jest",
        debug: true,
        bootstrap: function (wallaby) {
            wallaby.testFramework.configure(require("./package.json").jest);
        }
    };
};