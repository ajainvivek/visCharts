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