var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var Header = React.createClass({
  render: function() {
    return (
      <div>
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <ProfilePic emblemUrl={ this.props.emblemUrl }/>
            <SpartanPic spartanUrl={ this.props.spartanUrl }/>
            <CharName />
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                        mdl-textfield--floating-label mdl-textfield--align-right">
              <label className="mdl-button mdl-js-button mdl-button--icon"
                     htmlFor="fixed-header-drawer-exp">
                <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" type="text" name="sample"
                       id="fixed-header-drawer-exp"></input>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
});

// Class for profile picture-------------------------------------------
//---------------------------------------------------------------------

var ProfilePic = React.createClass({
  render: function() {
    return (
      <img className="headerImg" src={ this.props.emblemUrl } />
    );
  }
});

// Class for spartan picture-------------------------------------------
//---------------------------------------------------------------------

var SpartanPic = React.createClass({
  render: function() {
    return (
      <img className="headerImg" src={ this.props.spartanUrl } />
    );
  }
});

var CharName = React.createClass({
  getInitialState: function() {
    return {
      character: ''
    };
  },

  componentDidMount: function() {
    $.get('/api/stats/arena', function(data) {
      var name = data.Id;
      if (this.isMounted()) {
        this.setState({
          character: name
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <h1 className="headerProfileName">{this.state.character}</h1>
      </div>
    );
  }
});

module.exports = Header;
