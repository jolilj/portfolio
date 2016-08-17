'use strict'
const React = require('react');

/** Portfolio items */
const items = require('./PortfolioItems');

/** ItemView
 *  Component holding portfolio items
 */
const ItemView = React.createClass({
  render: function() {
    // Determine bootstrap grid class
    let colSpan = this.props.colSpan ? this.props.colSpan : 4,
        colOffset = this.props.colOffset ? this.props.colOffset : 0,
        className='col-md-' + colSpan + ' col-md-offset-' + colOffset;

    // Get item content
    let itemIm = items[this.props.type].im,
        title = items[this.props.type].title,
        titleClass = items[this.props.type].titleClass;

    return(
      <div className={className} >
        <div className={"portfolio-view"} >
          <img onClick={this.props.onClick} src={itemIm}/>
          <div className={"portfolio-view-title " + titleClass}>
            <p>{title}</p>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = ItemView;
