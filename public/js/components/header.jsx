var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <ProfilePic />
        <SpartanPic />
        <h1>{this.props.characterName}</h1>
      </div>
    );
  }
});

// Class for profile picture-------------------------------------------
//---------------------------------------------------------------------

var ProfilePic = React.createClass({
  getInitialState: function() {
    return {
      profilePicUrl: ''
    };
  },

  componentDidMount: function() {
    $.get('/api/profile/emblem-image', function(data) {
      var lastGist = data.url;
      if (this.isMounted()) {
        this.setState({
          profilePicUrl: lastGist
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <img className="headerImg" src={ this.state.profilePicUrl } />
    );
  }
});

// Class for spartan picture-------------------------------------------
//---------------------------------------------------------------------

var SpartanPic = React.createClass({
  getInitialState: function() {
    return {
      spartanPicUrl: ''
    };
  },

  componentDidMount: function() {
    $.get('/api/profile/spartan-image', function(data) {
      var lastGist = data.url;
      if (this.isMounted()) {
        this.setState({
          spartanPicUrl: lastGist
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <img className="headerImg" src={ this.state.spartanPicUrl } />
    );
  }
});


module.exports = Header;
