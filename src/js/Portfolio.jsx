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
    console.log($('#' + modalId));
    $('#' + modalId).modal();
  },

  render: function() {
    return(
      <div className='container fluid text-center'>
        <h1>Howdie, world!</h1>
        <div className='row centered'>
          <ItemView onClick={this.showModal} colSpan={colSpan} colOffset={colOffset}/>
          <ItemView colSpan={colSpan} />
          <div className='row centered'>
            <ItemView colSpan={colSpan} colOffset={colOffset}/>
            <ItemView colSpan={colSpan} />
          </div>
          <ModalView id={modalId} />
        </div>
      </div>
    );
  }
});

module.exports = Portfolio;
