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

      return( 
        <div className={this.state.wrapperClass}>
        <div className="container animal-list-wrapper">
        <ul className="p1 clearfix list-reset all-animals-wrapper" ref='animals'>
           {this.state.data.map(function(animal, i) {
            return (<AnimalWrapper onClick={this.handleClick.bind(this, i)} key={i} active={i === this.state.activeAnimalId ? 'active' : null } data={animal}/>);
           }, this)}
        </ul>
        </div>
        <div className ="animal-card-wrapper">
        {outputInfo}
        </div>
        </div>
        );
      }
  });

module.exports = AllAnimalsWrapper;
