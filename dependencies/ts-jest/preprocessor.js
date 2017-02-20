"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsc = require("typescript");
var nodepath = require("path");
var utils_1 = require("./utils");
var babelJest = require("babel-jest");
var glob = require('glob-all');
var getPackageRoot = require('jest-util').getPackageRoot;
var root = getPackageRoot();
var _a = utils_1.getJestConfig(root), testRegex = _a.testRegex, collectCoverage = _a.collectCoverage, coverageDirectory = _a.coverageDirectory, coverageReporters = _a.coverageReporters, collectCoverageFrom = _a.collectCoverageFrom, testResultsProcessor = _a.testResultsProcessor;
if (testResultsProcessor) {
    global.__ts_coverage__cache__ = {};
    global.__ts_coverage__cache__.sourceCache = {};
    global.__ts_coverage__cache__.coverageConfig = { collectCoverage: collectCoverage, coverageDirectory: coverageDirectory, coverageReporters: coverageReporters };
    global.__ts_coverage__cache__.coverageCollectFiles =
        collectCoverage &&
            testResultsProcessor &&
            collectCoverageFrom &&
            collectCoverageFrom.length ?
            glob.sync(collectCoverageFrom).map(function (x) { return nodepath.resolve(root, x); }) : [];
}
function process(src, path, config) {
    var isTs = path.endsWith('.ts');
    var isTsx = path.endsWith('.tsx');
    if (isTs || isTsx) {
        //console.log(utils_1.getTSConfig(config.globals, collectCoverage));
        var transpiled = tsc.transpileModule(src, {
            compilerOptions: utils_1.getTSConfig(config.globals, collectCoverage),
            fileName: path
        });
        if (global.__ts_coverage__cache__) {
            if (!testRegex || !path.match(testRegex)) {
                global.__ts_coverage__cache__.sourceCache[path] = transpiled.outputText;
            }
        }
        var start = transpiled.outputText.length > 12 ? transpiled.outputText.substr(1, 10) : '';
        src = start === 'use strict'
            ? "'use strict';require('ts-jest').install();" + transpiled.outputText
            : "require('ts-jest').install();" + transpiled.outputText;
    }
    path = path.substr(0, path.lastIndexOf('.')) + (isTs ? '.js' : '.jsx') || path;
    if (path.endsWith('.js') || path.endsWith('.jsx')) {
        src = babelJest.process(src, path);
        //console.log(src);
    }
    return src;
}
exports.process = process;