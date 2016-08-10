'use strict'
const React = require('react'),
      ReactDOM = require('react-dom'),
      $ = require('jquery'),
      ItemView = require('./ItemView.jsx'),
      ModalView = require('./ModalView.jsx');

let colNum = 2,
    colSpan = 4,
    colOffset = (12-colSpan*colNum)/2,
    modalId = "modal";

const Portfolio = React.createClass({

  showModal: function() {
    $('#' + modalId).modal();
  },

  render: function() {
    return(
      <div className='container fluid text-center'>
        <ModalView id={modalId} />
        <h1>Howdie, world!</h1>
        <div className='row centered'>
          <ItemView onClick={this.showModal} colSpan={colSpan} colOffset={colOffset}/>
          <ItemView colSpan={colSpan} />
        </div>
        <div className='row centered'>
          <ItemView colSpan={colSpan} colOffset={colOffset}/>
          <ItemView colSpan={colSpan} />
        </div>
      </div>
    );
  }
});

module.exports = Portfolio;
