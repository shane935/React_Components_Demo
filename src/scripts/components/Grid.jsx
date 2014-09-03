/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Grid.css');

var Column = require('./Column');


var Grid = React.createClass({
  	render: function () {
  		switch(this.props.cols){
  			case "1":
  			case "2":
  			case "3":
  			case "4":
  			case "6":
  			case "12":
  				break;
  			default:
  				console.error("Cols needs to be a factor of 12");
  		}
  		var noCols = 12/this.props.cols;
  		var columns = this.props.children.map(function(colContent, index, array){
  			return (
  				<Column col={noCols} key={index} last={array.length - 1 === index ? true : false}>
  					{colContent}
  				</Column>
  			);
  		});
		return (
		  	<div className="row">
		    	{columns}
		  	</div>
		);
  }
});

module.exports = Grid;
