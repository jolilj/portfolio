'use strict'
const React = require('react');
const items = require('./PortfolioItems.jsx');

/** PdfModalView
 *  Modal view holding portfolio items of type pdf
 */
const ModalView = React.createClass({
  render: function() {
    // Get item content
    let type = this.props.type,
        title = type ? items[this.props.type].title : "",
        text = type ? items[this.props.type].text : "",
        footer = type ? items[this.props.type].footer : "";

    console.log(type);
    if(!footer) footer = (<div className="modal-footer"></div>);

    return(
      <div id={this.props.id} className="modal fade">
        <div className="modal-dialog  modal-lg">
          <div className="modal-content">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div>
              <h1>{title}</h1>
            </div>
            {text}
            {footer}
          </div>
        </div>
      </div>
      );
  },
});

module.exports = ModalView;
