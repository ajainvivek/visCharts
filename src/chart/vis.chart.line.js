/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $ */

vis.chart.Line = function (options) {
    "use strict";
    vis.chart.Base.apply(this, [options]); 
};

vis.chart.Line.prototype = Object.create(vis.chart.Base.prototype);
