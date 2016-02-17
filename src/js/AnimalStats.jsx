'use strict';
  var c = null;
  var AnimalStats = React.createClass({    
    render: function(){
      return (<div className ='stats clearfix'>
             <label className="meta block">Population in {this.props.statsFor}</label>
             <div className="number">{this.props.stats}</div>
             </div>
        );
    }
  });

module.exports = AnimalStats;
