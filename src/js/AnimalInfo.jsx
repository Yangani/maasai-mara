'use strict';
var AnimalTitle = require('./AnimalTitle.jsx');
var AnimalStats = require('./AnimalStats.jsx');
var AnimalThreats = require('./AnimalThreats.jsx');
var AnimalStatus = require('./AnimalStatus.jsx');
var AnimalImage = require('./AnimalImage.jsx');
var AnimalAttribute = require('./AnimalAttribute.jsx');


var AnimalInfo = React.createClass({
    handleClose: function(){
      this.props.onClick(this);
    },
    render: function(){
      var src = "image-url" + this.props.data.id + ".jpg";
      return(
          <div className="animal-card">
          <div className="animal-hero">
          <AnimalImage src={src} alt = {this.props.data.commonName} />
          </div>
          
        );
      } 
  });

module.exports = AnimalInfo;
