/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, vis, window */

vis.promise = (function () {
    //Promise Constructor Method
    var Promise = function () {
        this.successCallbacks = [];
        this.failCallbacks = [];
    };

    //Extend Constructor Method
    Promise.prototype = {
        successCallbacks: null,
        failCallbacks: null,
        then: function (successCallback, failCallback) {
            this.successCallbacks.push(successCallback);
            if (failCallback) {
                this.failCallbacks.push(failCallback);
            }
        }
    };

    //Deferred Constructor Method
    var Deferred = function () {
        this.promise = new Promise();
    };

    //Extend Constructor Method
    Deferred.prototype = {
        promise: null,
        resolve: function (data) {
            this.promise.successCallbacks.forEach(function (callback) {
                window.setTimeout(function () {
                    callback(data);
                }, 0);
            });
        },

        reject: function (error) {
            this.promise.failCallbacks.forEach(function (callback) {
                window.setTimeout(function () {
                    callback(error);
                }, 0);
            });
        }
    };

    return {
        Deferred: Deferred,
        Promise: Promise
    };
}());