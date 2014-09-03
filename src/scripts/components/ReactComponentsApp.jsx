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

React.renderComponent(<GridContainer />, document.getElementById('content')); // jshint ignore:line

