  var AnimalAttribute = React.createClass({
    render: function(){
        }
  });

  var AnimalAttributeItem = React.createClass({
  render: function() {
    return (<li><a href={this.props.link}>Image {this.props.index}</a> &copy; <a href={this.props.bio}>{this.props.author}</a></li>);
  }
});

module.exports = AnimalAttribute;
