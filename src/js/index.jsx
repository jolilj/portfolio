'use strict'

require('../less/styles.less');
require('bootstrap');

const React = require('react'),
      ReactDOM = require('react-dom'),
      NavBar = require('./NavBar.jsx'),
      Portfolio = require('./Portfolio.jsx');

ReactDOM.render(
    <div>
      <NavBar />
      <div className="container-fluid portfolio-wrapper">
        <Portfolio />
      </div>
    </div>,
    document.getElementById('main')
);
