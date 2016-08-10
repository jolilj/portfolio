'use strict'
const React = require('react');

/** PdfModalView
 *  Modal view holding portfolio items of type pdf
 */
const ModalView = React.createClass({
  render: function() {
    return(
      <div id={this.props.id} className="modal fade">
        <div className="modal-dialog  modal-lg">
          <div className="modal-content">
            <h1>Modal test</h1>
          </div>
        </div>
      </div>
      );
  },
});

module.exports = ModalView;
