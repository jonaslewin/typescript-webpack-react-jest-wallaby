"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var includes = require("lodash.includes");
var partition = require("lodash.partition");
var loadCoverage = require('remap-istanbul/lib/loadCoverage');
var remap = require('remap-istanbul/lib/remap');
var writeReport = require('remap-istanbul/lib/writeReport');
var istanbulInstrument = require('istanbul-lib-instrument');
var pickBy = require("lodash.pickby");
function processResult(result) {
    if (!global.__ts_coverage__cache__)
        return result;
    var _a = global.__ts_coverage__cache__, coverageConfig = _a.coverageConfig, sourceCache = _a.sourceCache, coverageCollectFiles = _a.coverageCollectFiles;
    if (!coverageConfig.collectCoverage)
        return result;
    var coveredFiles = Object.keys(sourceCache);
    var coverage = [pickBy(result.coverageMap.data, function (_, fileName) { return includes(coveredFiles, fileName); })];
    var uncoveredFiles = partition(coverageCollectFiles, function (x) { return includes(coveredFiles, x); })[1];
    var coverageOutputPath = path.join(coverageConfig.coverageDirectory || 'coverage', 'remapped');
    var emptyCoverage = uncoveredFiles.map(function (x) {
        var ret = {};
        if (sourceCache[x]) {
            var instrumenter = istanbulInstrument.createInstrumenter();
            instrumenter.instrumentSync(sourceCache[x], x);
            ret[x] = instrumenter.fileCoverage;
        }
        return ret;
    });
    var mergedCoverage = loadCoverage(coverage.concat(emptyCoverage), { readJSON: function (t) { return t ? t : {}; } });
    var coverageCollector = remap(mergedCoverage, {
        readFile: function (x) {
            var key = path.normalize(x);
            var source = sourceCache[key];
            delete global.__ts_coverage__cache__.sourceCache[key];
            return source;
        }
    });
    writeReport(coverageCollector, 'html', {}, path.join(coverageOutputPath, 'html'));
    writeReport(coverageCollector, 'lcovonly', {}, path.join(coverageOutputPath, 'lcov.info'));
    writeReport(coverageCollector, 'json', {}, path.join(coverageOutputPath, 'coverage.json'));
    writeReport(coverageCollector, 'text', {}, path.join(coverageOutputPath, 'coverage.txt'));
    return result;
}
module.exports = processResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292ZXJhZ2Vwcm9jZXNzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY292ZXJhZ2Vwcm9jZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSwyQkFBNkI7QUFFN0IsMENBQTZDO0FBQzdDLDRDQUErQztBQUMvQyxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUNoRSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNsRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUM5RCxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQzlELHNDQUF3QztBQWN4Qyx1QkFBdUIsTUFBYztJQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztRQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDNUMsSUFBQSxrQ0FBcUYsRUFBbkYsa0NBQWMsRUFBRSw0QkFBVyxFQUFFLDhDQUFvQixDQUFtQztJQUM1RixFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUM7UUFBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBRW5ELElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDN0MsSUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDLENBQUE7SUFFckcsSUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFGLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLElBQUksVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBSWpHLElBQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1FBQ3hDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxZQUFZLEdBQUcsa0JBQWtCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMzRCxZQUFZLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUN2QyxDQUFDO1FBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBVixDQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3JHLElBQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRTtRQUM5QyxRQUFRLEVBQUUsVUFBQyxDQUFDO1lBQ1YsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsT0FBTyxNQUFNLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUNGLENBQUMsQ0FBQztJQUVILFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsRixXQUFXLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDM0YsV0FBVyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzNGLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMxRixNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyJ9