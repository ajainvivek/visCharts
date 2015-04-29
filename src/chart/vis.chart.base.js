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
    };
};