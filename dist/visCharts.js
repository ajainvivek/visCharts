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
/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $ */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, define, brackets: true, $, window, document, navigator*/

/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */
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