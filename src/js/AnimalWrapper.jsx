'use strict';

  var AnimalImage = require('./AnimalImage.jsx');

  var AnimalWrapper = React.createClass({
    handleClick: function () {
      this.props.onClick(this);
    },

    render: function() {
      var listItemClassList = this.props.active + " block Animal-wrapper p1 col col-12 mt1 mb1";
      var src = "http://www.chloechen.io/images/Animals/thumbnail/" + this.props.data.id + ".jpg";
    }
  });

module.exports = AnimalWrapper;
