'use strict'
const React = require('react');

/** NavBar
 *  Component holding the navigation bar
 */
const NavBar = React.createClass({
  render: function() {
    return(
      <div className="nav-bar">
        <div>
          <a className="btn btn-primary" href="#portfolio" role="button"><i className="fa fa-folder-open" aria-hidden="true"></i> &nbsp;PORTFOLIO</a>
        </div>
        <div>
          <a className="btn btn-primary" href="#about" role="button"><i className="fa fa-user" aria-hidden="true"></i> &nbsp;ABOUT</a>
        </div>
      </div>
    );
  },
});

module.exports = NavBar;
