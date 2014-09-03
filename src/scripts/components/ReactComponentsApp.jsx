/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../../bower_components/foundation/css/foundation.css');

var GridContainer = require('./GridContainer.jsx');
var imageURL = require('../../images/yeoman.png');

var ReactComponentsApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

React.renderComponent(<GridContainer />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactComponentsApp;
