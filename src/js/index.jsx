'use strict'

require('../less/styles.less');
require('bootstrap');

const React = require('react'),
      ReactDOM = require('react-dom'),
      NavBar = require('./NavBar.jsx'),
      Portfolio = require('./Portfolio.jsx');

ReactDOM.render(
    <div className="jumbotron">
      <NavBar />
      <Portfolio />
    </div>,
    document.getElementById('main')
);
