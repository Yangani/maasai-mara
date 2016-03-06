'use strict';
var AnimalImage = React.createClass({
  getInitialState: function() {
    return {
      loaded: false
    };
  },

  componentDidMount: function(){
    var self = this;
    var img = document.createElement('img');
    img.onload = function(){
      self.setState({ loaded: true});
    };
    img.src = this.props.src;
  },
});

module.exports = AnimalImage;
