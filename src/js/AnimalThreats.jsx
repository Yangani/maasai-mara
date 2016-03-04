'use strict';
var Chart = require("chart.js");
var RadarChart = require("react-chartjs").Radar;
// To change other default settings, refer to : http://www.chartjs.org/docs/#getting-started-global-chart-configuration

Chart.defaults.global.scaleOverride=true;
Chart.defaults.global.scaleSteps=1;
Chart.defaults.global.scaleStepWidth=10;
Chart.defaults.global.scaleStartValue=0;
