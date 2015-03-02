/**
 * Interactive Visualisation Charts (c) 2015 Ajain Vivek
 *
 * Licensed under MIT
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $ */

var dataset = new sap.viz.ui5.data.FlattenedDataset({

              dimensions : [ {
                axis : 1,
                name : 'Country',
                value : "{Country}"
              } ],

              measures : [ {
                name : 'Profit',
                value : '{profit}'
              }, {
                name : 'Revenue',
                value : '{revenue}'
              } ],

              data : {
                path : "/businessData"
              }

            });

            var line = new sap.viz.ui5.Line({
              id : "line",
              width : "80%",
              height : "400px",
              plotArea : {
              //'colorPalette' : d3.scale.category20().range()
              },
              title : {
                visible : true,
                text : 'Profit and Revenue By Country'
              },
              xAxis : {
                title : {
                  visible : true
                }
              },
              dataset : dataset
            });

            mContent[key] = line;