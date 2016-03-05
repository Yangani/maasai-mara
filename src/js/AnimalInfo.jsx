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
   
  });

module.exports = AnimalInfo;
