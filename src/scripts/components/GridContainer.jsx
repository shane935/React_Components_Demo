/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/GridContainer.css');

var Grid = require('./Grid.jsx');
var Column = require('./Column.jsx');
var Alert = require('./Alert.jsx');

var GridContainer = React.createClass({
  	render: function () {
		return (
			<div>
				<Grid cols="4">
				  	<div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				  	<div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				  	<div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				  	<div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				  	<div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				  	<div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				  	<div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				  	<div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				  	<div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				  	<div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				</Grid>

				<Grid cols="1">
				  	<Alert hidden={this.props.alertHidden}>This is an alert</Alert>
				  	<Alert hidden={this.props.alertHiddenTwo}>This is another alert</Alert>
				</Grid>


				<Grid>
					<Column width="3">
						<button onClick={this.props.displayAlert}>Show Alert One</button>
					</Column>
					<Column width="3">
						<button onClick={this.props.displayAlertTwo}>Show Alert Two</button>
					</Column>
					<Column width="2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Column>
					<Column width="3">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Column>
				</Grid>
			</div>
		  	
		);
  }
});

module.exports = GridContainer;
