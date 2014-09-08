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

var ParentControler = require('./ParentControler.jsx');
var imageURL = require('../../images/yeoman.png');

React.renderComponent(<ParentControler />, document.getElementById('content')); // jshint ignore:line

