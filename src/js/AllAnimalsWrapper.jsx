 'use strict';
  var AnimalWrapper = require('./AnimalWrapper.jsx');
  var AnimalInfo = require('./AnimalInfo.jsx');
  var buttonStart = document.getElementById('start');
  var activeEl, transitionEvent, animals, animalImg;

  var AllAnimalsWrapper = React.createClass({
    getInitialState: function() {
    return {
      data: [],
      activeAnimalId: '',
      wrapperClass: 'closed' 
      };
    },
  });

module.exports = AllAnimalsWrapper;
