'use strict'
const React = require('react');
const SMALL_SCREEN_WIDTH = 768;

/** NavBar
 *  Component holding the navigation bar
 */
const NavBar = React.createClass({

  render: function() {
    let className="nav-bar",
        itemClassName="nav-bar-item",
        btnClassName="btn btn-primary";

    if(this.props.width <= 1140 || this.props.isMobile) {
      className = "nav-bar-mobile";
      itemClassName = "nav-bar-item-mobile";
      btnClassName = "btn btn-primary mobile";
    }

    return(
      <div className={className}>
        <div className={itemClassName}>
          <a className={btnClassName} href="#portfolio" role="button"><i className="fa fa-folder-open" aria-hidden="true"></i> &nbsp;PORTFOLIO</a>
        </div>
        <div className={itemClassName}>
          <a className={btnClassName} href="#about" role="button"><i className="fa fa-user" aria-hidden="true"></i> &nbsp;ABOUT</a>
        </div>
      </div>
    );
  },
});

module.exports = NavBar;
