 'use strict';
  var AnimalWrapper = require('./AnimalWrapper.jsx');
  var AnimalInfo = require('./AnimalInfo.jsx');
  var buttonStart = document.getElementById('start');
  var activeEl, transitionEvent, animals, animalImg;

  var AllAnimalsWrapper = React.createClass({
    whichTransitionEvent: function(el){
          var t;
          var transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
          };
          for(t in transitions){
              if( el.style[t] !== undefined ){
                  return transitions[t];
              }
          }
    },

    getInitialState: function() {
    return {
      data: [],
      activeAnimalId: '',
      wrapperClass: 'closed' 
      };
    },

    render: function(){
      //Get Active Animal
      var activeAnimal = this.state.data[this.state.activeAnimalId];
      var outputInfo = null;
      if(activeAnimal){
        outputInfo = <AnimalInfo onClick = {this.handleClose} data={activeAnimal} />;
      };
  });

module.exports = AllAnimalsWrapper;
