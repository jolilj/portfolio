'use strict'
const React = require('react');

const im = require('../img/tilt_est_im.png');

/** ItemView
 *  Component holding portfolio items
 */
const ItemView = React.createClass({
  render: function() {
    let colSpan = (this.props.colSpan ? this.props.colSpan : 4),
        colOffset = (this.props.colOffset ? this.props.colOffset : 0),
        className='col-md-' + colSpan + ' col-md-offset-' + colOffset;
    return(
      <div className={className} >
        <div className="thumbnail">
          <img onClick={this.props.onClick} src={im}/>
          <div className="caption">
          <h3>Thumbnail label</h3>
          <p>...</p>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = ItemView;
