"use strict";

process.env.BABEL_ENV = 'test';

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
        preprocessors: {
          '**/*.js?(x)': file => require('babel-core')
            .transform(file.content, {babelrc: true, sourceMap: true, filename: file.path})
        },
        testFramework: "jest",
        debug: true,
        bootstrap: function (wallaby) {
            wallaby.testFramework.configure(require("./package.json").jest);
        }
    };
};
