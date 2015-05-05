/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, vis, window */

vis.promise = (function () {
    var Promise = function () {
        this.successCallbacks = [];
        this.failCallbacks = [];
    };

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

    var Defer = function () {
        this.promise = new Promise();
    };

    Defer.prototype = {
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
        Defer: Defer,
        Promise: Promise
    };
}());