'use strict'
const React = require('react');
const SMALL_SCREEN_WIDTH = 768;

/** NavBar
 *  Component holding the navigation bar
 */
const NavBar = React.createClass({
  updateWindowDim: function() {
    let w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    this.setState({width: width, height: height});
  },

  componentWillMount: function() {
    this.updateWindowDim();
  },

  componentDidMount: function() {
    window.addEventListener("resize", this.updateWindowDim);
  },

  componentWillUnmount: function() {
    window.removeEventListener("resize", this.updateWindowDim);
  },

  render: function() {
    let className="nav-bar",
        itemClassName="nav-bar-item";
    if(this.state.width <= 768) {
      className = "nav-bar-mobile";
      itemClassName = "nav-bar-item-mobile";
    }

    return(
      <div className={className}>
        <div className={itemClassName}>
          <a className="btn btn-primary" href="#portfolio" role="button"><i className="fa fa-folder-open" aria-hidden="true"></i> &nbsp;PORTFOLIO</a>
        </div>
        <div className={itemClassName}>
          <a className="btn btn-primary" href="#about" role="button"><i className="fa fa-user" aria-hidden="true"></i> &nbsp;ABOUT</a>
        </div>
      </div>
    );
  },
});

module.exports = NavBar;
