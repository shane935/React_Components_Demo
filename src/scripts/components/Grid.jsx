/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Grid.css');

var Column = require('./Column');


var Grid = React.createClass({
  	render: function () {
  		var cols = this.props.cols,
  			colsWidth;
  		switch(cols){
  			case "1":
  			case "2":
  			case "3":
  			case "4":
  			case "6":
  			case "12":
  				colsWidth = 12/cols;
  				break;
  			case undefined:
  				break;
  			default:
  				console.error("Cols needs to be a factor of 12");
  		}
  		var columns = this.props.children.map(function(colContent, index, array){
  			var lastCol = array.length - 1 === index ? true : false;

  			if (colsWidth) {
  				return (
  					<Column width={colsWidth} key={index} last={lastCol}>
  						{colContent}
  					</Column>
  				);
  			} else {
  				colContent.props.last = lastCol;
  				return colContent;
  			}
  			
  		});
		return (
		  	<div className="row spacing1">
		    	{columns}
		  	</div>
		);
  }
});

module.exports = Grid;
