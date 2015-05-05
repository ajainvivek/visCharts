/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, define, d3, vis, brackets: true, $, window, document, navigator*/

/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

vis.data.Flattened = function (options) {
    "use strict";
    var deffered = new vis.promise.Deferred();

    var callback = function (error, json) {
        var path = _.compact(callback.options.data.path.split('/'));
        var data = _.get(json, path);
        var measures = _.forEach(callback.options.measures, function (measure) { //Get Measure Values
            var mPath = (typeof measure.value === "object") ? _.compact(measure.value.path.split('/')) : measure.value;
            var mData = _.pluck(data, mPath);
            measure.value = mData;
            return measure;
        });
        var dimensions = _.forEach(callback.options.dimensions, function (dimension) { // Get Dimension Values
            var dPath = (typeof dimension.value === "object") ? _.compact(dimension.value.path.split('/')) : dimension.value;
            var dData = _.pluck(data, dPath) || [];
            dimension.value = _.uniq(dData);
            return dimension;
        });
        var dataset = {
            measures: measures,
            dimensions: dimensions
        };
        if (error) {
            return deffered.reject(error);
        }
        deffered.resolve(dataset);
    };
    callback.options = options;

    if (options.data.value) { //Plain JSON object
        callback(null, options.data.value);
    } else if (options.data.type === "json") { //GET Request for JSON Object
        d3.json(options.data.url, function (error, json) {
            callback(error, json);
        });
    } else if (options.data.type === "csv") {
        d3.csv(options.data.url, function (error, json) { //GET CSV File Object
            callback(error, json);
        });
    }
    return deffered.promise;
};