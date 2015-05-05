/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, define, d3, vis, brackets: true, $, window, document, navigator*/

/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

vis.data.Flattened = function (options) {
    "use strict";
    var defer = new vis.promise.Defer();
    if (options.data.type === "json") {
        d3.json(options.data.url, function (error, json) {
            if (error) {
                return defer.reject(error);
            }
            defer.resolve(json);
        });
    }
    return defer.promise;
};