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
          <div className='p2 animal-info'>
          <div className="container">
          <div className="close-btn-wrapper block clearfix">
          <a className ="p2 inline-block right btn btn-close icon-cross" onClick = {this.handleClose}></a>
          </div>
          <div className="clearfix">
          <AnimalTitle comName={this.props.data.commonName} sciName={this.props.data.scientificName}/>
          <AnimalStatus cmStatus={this.props.data.commonwealthStatus} nswStatus ={this.props.data.nswStatus} />
          </div>
          <AnimalStats stats={this.props.data.stats} statsFor={this.props.data.statsFor}/>
          <AnimalThreats threats={this.props.data.threats}/>
          <div className='profile center clearfix py4 px0'><a href={this.props.data.profile}>view animal profile on environment.gov.au<span className="icon icon-link-external"></span></a></div>
          <AnimalAttribute attribute={this.props.data.attributes}/>
          </div>
          </div>
          </div>
        );
      } 
  });

module.exports = AnimalInfo;
