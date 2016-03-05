'use strict';
  var AnimalStatus = React.createClass({
    render: function(){
      function transform(str){
        var strNew = str.replace(/\s/g, "-").toLowerCase();
        return strNew;
      }
      return (
        <div className ='status sm-col sm-col-6'>
        <div className='cmStatus'>
          <label>National </label> 
          <span className={transform(this.props.cmStatus)}>{this.props.cmStatus}</span>
        </div>
      );
    }
  });

module.exports = AnimalStatus;
