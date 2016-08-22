'use strict'
const React = require('react');

/** Portfolio items */
const items = require('./PortfolioItems.jsx');

/** ItemView
 *  Component holding portfolio items
 */
const ItemView = React.createClass({
  onItemClick: function() {
    this.props.onClick(this.props.type);
  },

  render: function() {
    // Determine bootstrap grid class
    let colSpan = this.props.colSpan ? this.props.colSpan : 2,
        colOffset = this.props.colOffset ? this.props.colOffset : 0,
        colType = this.props.colType ? this.props.colType : "md",
        className='col-' + colType +'-' + colSpan + ' col-' + colType + '-offset-' + colOffset;

    // Get item content
    let itemIm = items[this.props.type].im,
        title = items[this.props.type].title,
        viewClass = "portfolio-view" + (this.props.isMobile ? " mobile" : ""),
        titleClass = "portfolio-view-title" + (this.props.isMobile ? " mobile" : ""),
        overlayClass = "portfolio-view-image-overlay" + (this.props.isMobile ? " mobile" : "");
        

    return(
      <div className={className} >
        <div className={viewClass} >
          <div>
            <img src={itemIm}/>
            <div className={overlayClass} onClick={this.onItemClick} data-toggle="modal">
              <span className="glyphicon glyphicon-circle-arrow-up" aria-hidden="true"/>
            </div>
          </div>
          <div className={titleClass}>
            <p>{title}</p>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = ItemView;
