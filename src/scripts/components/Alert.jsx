/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Alert.css');


var Alert = React.createClass({
	getInitialState: function(){
		return{hidden: this.props.hidden}
	},
  componentWillReceiveProps: function(){
    this.setState({hidden: this.props.hidden});
  },
	close: function(e){
		e.preventDefault();
		this.setState({hidden: true});
	},
	render: function () {
		var cx = React.addons.classSet;
		var classes = cx({
			"alert-box": true,
			"hide": this.state.hidden
		})
  	return (
      	<div className={classes}>
       	{this.props.children}
       	<a href="#" onClick={this.close} className="close">&times;</a>
      	</div>
    );
  }
});

module.exports = Alert;
