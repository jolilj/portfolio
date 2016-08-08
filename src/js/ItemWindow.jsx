'use strict'
const React = require('react');

/** ItemWindow
 *  Component holding portfolio items
 */
const ItemWindow = React.createClass({
  render: function() {
    return(
      <div className="col-lg-4">
        <div className="thumbnail">
          <div className="caption">
          <h3>Thumbnail label</h3>
          <p>...</p>
          <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = ItemWindow;
