'use strict'
const React = require('react'),
      ReactDOM = require('react-dom'),
      $ = require('jquery'),
      ItemView = require('./ItemView.jsx'),
      ModalView = require('./ModalView.jsx');

const ITEMS = require('./PortfolioItems').ids;

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
      <div id="portfolio" className='container-fluid text-center content-wrapper portfolio'>
        <ModalView id={modalId} />
        <div className='row centered'>
          <ItemView 
            type={ITEMS.MAD_FILTER}
            onClick={this.showModal}
            colSpan={colSpan}
            colOffset={colOffset} 
            floating={'right'}/>
          <ItemView
            type={ITEMS.CNN}
            colSpan={colSpan}
            floating={'left'} />
        </div>
        <div className='row centered'>
          <ItemView type={ITEMS.PORTFOLIO} colSpan={colSpan} colOffset={colOffset}/>
          <ItemView type={ITEMS.CARPENTRY} colSpan={colSpan} />
        </div>
      </div>
    );
  }
});

module.exports = Portfolio;
