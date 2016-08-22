'use strict'
const React = require('react'),
      $ = require('jquery'),
      ItemView = require('./ItemView.jsx'),
      ModalView = require('./ModalView.jsx');

const ITEMS = require('./PortfolioItems.jsx').ids,
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
    let md = this.props.width > 992,
        sm = this.props.width > 750 && this.props.width <= 992,
        xs = this.props.width > 700 && this.props.width <= 750;

    let colNum = 2,
        colSpan = md ? 4 : (sm ? 5 : (xs ?  6 : 5)),
        colOffset = (12-colSpan*colNum)/2,
        colType = md ? "md" : ( sm ?  "sm" :  (xs ? "xs" : "sm"));

    return(
      <div id="portfolio" className='container-fluid text-center content-wrapper portfolio'>
        <ModalView type={this.state.itemType} id={modalId} />
        <div className='row centered'>
          <ItemView 
            type={ITEMS.MAD_FILTER}
            onClick={this.showModal}
            colSpan={colSpan}
            colOffset={colOffset}
            colType={colType}
            floating={'right'}
            isMobile={this.props.isMobile}/>
          <ItemView
            type={ITEMS.CNN}
            onClick={this.showModal}
            colSpan={colSpan}
            colType={colType}
            floating={'left'}
            isMobile={this.props.isMobile}/>
        </div>
        <div className='row centered'>
          <ItemView
            type={ITEMS.PORTFOLIO}
            onClick={this.showModal}
            colSpan={colSpan}
            colOffset={colOffset}
            colType={colType}
            isMobile={this.props.isMobile}/>
          <ItemView
            type={ITEMS.OTHER}
            onClick={this.showModal}
            colSpan={colSpan}
            colType={colType}
            isMobile={this.props.isMobile}/>
        </div>
      </div>
    );
  }
});

module.exports = Portfolio;
