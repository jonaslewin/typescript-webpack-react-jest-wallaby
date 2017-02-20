"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsc = require("typescript");
var utils_1 = require("./utils");
function transpileIfTypescript(path, contents) {
    if (path && (path.endsWith('.tsx') || path.endsWith('.ts'))) {
        var transpiled = tsc.transpileModule(contents, {
            compilerOptions: utils_1.getTSConfig({ __TS_CONFIG__: global['__TS_CONFIG__'] }, true),
            fileName: path
        });
        return transpiled.outputText;
    }
    return contents;
}
exports.transpileIfTypescript = transpileIfTypescript;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwaWxlLWlmLXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RyYW5zcGlsZS1pZi10cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdDQUFrQztBQUNsQyxpQ0FBc0M7QUFFdEMsK0JBQXNDLElBQUksRUFBRSxRQUFRO0lBQ2xELEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1RCxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRTtZQUM3QyxlQUFlLEVBQUUsbUJBQVcsQ0FBQyxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7WUFDOUUsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBWEQsc0RBV0MifQ==