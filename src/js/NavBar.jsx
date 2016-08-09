'use strict'
const React = require('react');

/** NavBar
 *  Component holding the navigation bar
 */
const NavBar = React.createClass({
  render: function() {
    return(
      <div className="container fluid text-center">
        <ul className="nav nav-pills">
          <li role="presentation" className="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages</a></li>
        </ul>
      </div>
    );
  },
});

module.exports = NavBar;
