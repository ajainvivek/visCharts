/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, vis */

vis.chart.api.construct = (function () {
    var wrapper = function (options) {
        var div = document.createElement('div');
        var svg = document.createElement('svg');
        var canvas = document.createElement('canvas');

        div.setAttribute('id', options.id);
        div.setAttribute('class', 'vis-wrapper');
        div.style.height = options.height;
        div.style.width = options.width;

        svg.setAttribute('class', 'vis-root');
        svg.setAttribute('height', parseInt(options.height, 10));
        svg.setAttribute('width', parseInt(options.width, 10));

        div.appendChild(canvas);
        div.appendChild(svg);

        return div;
    };

    return {
        wrapper: wrapper
    };
}());