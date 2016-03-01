'use strict';

  var AnimalImage = require('./AnimalImage.jsx');

  var AnimalWrapper = React.createClass({
    handleClick: function () {
      this.props.onClick(this);
    },
  });

module.exports = AnimalWrapper;
