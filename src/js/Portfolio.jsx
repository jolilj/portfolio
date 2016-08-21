'use strict'
const React = require('react'),
      $ = require('jquery'),
      ItemView = require('./ItemView.jsx'),
      ModalView = require('./ModalView.jsx');

const ITEMS = require('./PortfolioItems.jsx').ids;

let colNum = 2,
    colSpan = 4,
    colOffset = (12-colSpan*colNum)/2,
    modalId = "modal";

const Portfolio = React.createClass({
  getInitialState: function() {
    return {
      showModal: false,
    }
  },
  componentDidUpdate: function() {
    if(this.state.showModal) {
      $('#' + modalId).modal();
      this.setState({showModal: false});
    }
  },

  showModal: function(type) {
    // Component has to render first before modal is shown as modal type
    // has to be passed as a prop to ModalView
    this.setState({showModal: true, itemType: type});
  },

  render: function() {
    return(
      <div id="portfolio" className='container-fluid text-center content-wrapper portfolio'>
        <ModalView type={this.state.itemType} id={modalId} />
        <div className='row centered'>
          <ItemView 
            type={ITEMS.MAD_FILTER}
            onClick={this.showModal}
            colSpan={colSpan}
            colOffset={colOffset} 
            floating={'right'}/>
          <ItemView
            type={ITEMS.CNN}
            onClick={this.showModal}
            colSpan={colSpan}
            floating={'left'} />
        </div>
        <div className='row centered'>
          <ItemView
            type={ITEMS.PORTFOLIO}
            onClick={this.showModal}
            colSpan={colSpan}
            colOffset={colOffset}/>
          <ItemView
            type={ITEMS.OTHER}
            onClick={this.showModal}
            colSpan={colSpan} />
        </div>
      </div>
    );
  }
});

module.exports = Portfolio;
