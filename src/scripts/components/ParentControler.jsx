/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/ParentControler.css');
var GridContainer  = require('./GridContainer.jsx');


var ParentControler = React.createClass({
	getInitialState: function(){
		return{
			alertHidden: false,
			alertTwoHidden: false
		}
	},
	openAlertOne: function(){
		this.setState({alertHidden: false});
	},
	openAlertTwo: function(){
		this.setState({alertTwoHidden: false});
	},
  	render: function () {
    	return (
        	<div>
          	<GridContainer 
          		displayAlert={this.openAlertOne} 
          		displayAlertTwo={this.openAlertTwo} 
          		alertHidden={this.state.alertHidden}
          		alertTwoHidden={this.state.alertTwoHidden}/>
        	</div>
      );
  	}
});

module.exports = ParentControler;
