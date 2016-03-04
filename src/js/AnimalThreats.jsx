'use strict';
var Chart = require("chart.js");
var RadarChart = require("react-chartjs").Radar;
// To change other default settings, refer to : http://www.chartjs.org/docs/#getting-started-global-chart-configuration

Chart.defaults.global.scaleOverride=true;
Chart.defaults.global.scaleSteps=1;
Chart.defaults.global.scaleStepWidth=10;
Chart.defaults.global.scaleStartValue=0;


var chartOptions ={
    scaleShowLine : true,
    angleShowLineOut : false,
    scaleShowLabels : false,
    scaleBeginAtZero : true,
    angleLineColor : "rgba(255,255,255,.3)",
    scaleLineColor: "rgba(255,255,255,.4)",
    angleLineWidth : 1,
    responsive: true,
    pointLabelFontFamily : "'Viga', sans-serif",
    pointLabelFontStyle : "normal",
    pointLabelFontSize : 10,
    pointLabelFontColor : "#bdc3c7",
    pointDot : true,
    pointDotRadius : 3,
    pointDotStrokeWidth : 1,
    pointHitDetectionRadius : 20,
    datasetStroke : true,
    datasetStrokeWidth : 2,
    datasetFill : true,
    tooltipTemplate:"<%=label%>",
    tooltipFillColor: "rgba(0,0,0,0.8)",
    tooltipFontFamily: "'Viga', sans-serif",
    legendTemplate : ""
};

var AnimalThreats = React.createClass({

});

module.exports = AnimalThreats;
