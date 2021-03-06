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

    componentWillMount: function() {
      //prepare data
      this.firebaseRef = new Firebase("https://endangered-animals-nsw.firebaseio.com/");
      this.firebaseRef.on("child_added", function(dataSnapshot) {
        this.setState({
          data: this.state.data.concat(dataSnapshot.val())
        });
      }.bind(this));
    },

    componentDidMount:function(){
      animals = this.refs.animals;
      this.el = React.findDOMNode(animals);
    },

    componentDidUpdate: function(){
      if(!body.classList.contains("ready")){
        animalImg = this.el.getElementsByTagName("img");
        //check data loaded
          if(animalImg.length === 16){
            body.classList.add("ready");
            buttonStart.disabled = false;
          }
      }
    },

    handleClose: function(){
      this.setState({
        wrapperClass:'closing'
      });

      activeEl = this.el.querySelector('.active');
      transitionEvent = this.whichTransitionEvent(activeEl);
      if(transitionEvent){
        activeEl.addEventListener(transitionEvent, this.listenerClose);
      } 
    },

    handleClick: function (i) {
      this.setState({
        activeAnimalId: i,
        wrapperClass:'opening',
      });
      body.classList.add("fix");
      activeEl = this.el.getElementsByTagName('li')[i];
      transitionEvent = this.whichTransitionEvent(activeEl);
      if(transitionEvent){
        activeEl.addEventListener(transitionEvent, this.listenerOpen);
      }
    },

    //seperate for better readability 
    listenerOpen: function (event){
      if((event.propertyName === "transform") || (event.propertyName === "-ms-transform" )||(event.propertyName === "-webkit-transform")){
              this.setState({
              wrapperClass: "open"
            });
        event.target.removeEventListener(event.type, this.listenerOpen);
          }
    },

    listenerClose: function (event){
      if((event.propertyName === "transform") || (event.propertyName === "-ms-transform" )||(event.propertyName === "-webkit-transform")){
          body.classList.remove("fix");
          this.setState({
            wrapperClass: "closed",
            activeAnimalId: null
          });
        event.target.removeEventListener(event.type, this.listenerClose);
        }
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
