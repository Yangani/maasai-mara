'use strict';
  var AnimalStatus = React.createClass({
    render: function(){
      function transform(str){
        var strNew = str.replace(/\s/g, "-").toLowerCase();
        return strNew;
      }
    }
  });

module.exports = AnimalStatus;
