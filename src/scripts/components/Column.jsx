/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Column.css');

var Column = React.createClass({
	render: function(){
		var classes = "small-" + this.props.width + " columns test";
		if (this.props.last) {
			classes += " end";
		};
		return (
			<div className={classes}>
				{this.props.children}
			</div>
		);
	}
})

module.exports = Column;
