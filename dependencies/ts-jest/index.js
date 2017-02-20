"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_retrieve_file_handler_1 = require("./default-retrieve-file-handler");
var sourceMapSupport = require("source-map-support");
function install() {
    var options = {};
    options.retrieveFile = default_retrieve_file_handler_1.defaultRetrieveFileHandler;
    options.emptyCacheBetweenOperations = true;
    options['environment'] = 'node';
    return sourceMapSupport.install(options);
}
exports.install = install;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRkFBNkU7QUFDN0UscURBQXVEO0FBRXZEO0lBQ0UsSUFBSSxPQUFPLEdBQTZCLEVBQUUsQ0FBQztJQUMzQyxPQUFPLENBQUMsWUFBWSxHQUFHLDBEQUEwQixDQUFDO0lBQ2xELE9BQU8sQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUM7SUFDM0MsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUVoQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFQRCwwQkFPQyJ9