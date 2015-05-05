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