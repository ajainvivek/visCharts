/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, define, brackets: true, $, window, document, navigator*/

/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

 var vis = {};
 vis.chart = {};
 vis.chart.api = {};
 vis.data = {};

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, define, brackets: true, $, window, document, navigator*/

/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */
/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, vis, d3 */

vis.chart.api.construct = (function () {
    var wrapper = function (options) {

        var container = d3.select(document.createElement("div"));
        container.attr('id', options.id);
        container.attr('class', 'vis-wrapper');
        container.style({
            height: options.height,
            width: options.width,
            position: "relative"
        });

        container.append("canvas");

        container.append("svg")
            .attr("class", "vis-root")
            .attr("height", parseInt(options.height, 10))
            .attr("width", parseInt(options.width, 10))
            .style({
                position: "absolute",
                left: 0,
                top: 0
            })
            .append("g")
            .attr("vis-main");

        return container.node();
    };

    return {
        wrapper: wrapper
    };
}());
/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $ */

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
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, define, arguments, vis, brackets: true, $, window, document, navigator*/

/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

vis.chart.Base = function (id, options) {
    "use strict";

    this._id = id;
    this._options = options;

    /***
     * @desc: Set unique id for the chart
     * @param: {String} id
     ***/
    this.setId = function (id) {
        this.id = id;
    };

    /***
     * @desc: Get unique id for the chart
     * @param: {String} id
     ***/
    this.getId = function () {
        return this.id;
    };

    /***
     * @desc: Set unique id for the chart
     * @param: {String} id
     ***/
    this._setContent = function (content) {
        this.content = content;
    };

    /***
     * @desc: Get unique id for the chart
     * @param: {String} id
     ***/
    this.getContent = function () {
        return this.content;
    };

    /***
     * @desc: Get unique id for the chart
     * @param: {String} id
     ***/
    this.injectAt = function (ele) {
        var content = this.getContent();
        ele.appendChild(content);
        return this;
    };

    /***
     * @desc: Initialize the chart
     * @param: {Arguments}
     ***/
    this.init = function () {
        var self = this,
            content = null;

        //Set the wrapper id    
        this.setId(this._id);

        content = vis.chart.api.construct.wrapper({
            id: self.getId(),
            height: self._options.height,
            width: self._options.width
        });

        this._setContent(content);

        options.dataset.then(function (d) {
            console.log(d);
        }, function (e) {
            console.log(e);
        });
    };
};
/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $ */

vis.chart.Column = function (options) {
    "use strict";
    vis.chart.Base.apply(this, [options]); 
};

vis.chart.Column.prototype = Object.create(vis.chart.Base.prototype);


/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $ , vis*/
/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */
vis.chart.Line = function (id, options) {
    "use strict";
    vis.chart.Base.apply(this, [id, options]);

    //Initialize the line chart
    this.init();
};

vis.chart.Line.prototype = Object.create(vis.chart.Base.prototype);