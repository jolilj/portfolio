'use strict'

require('../less/styles.less');
require('bootstrap');

const React = require('react'),
      ReactDOM = require('react-dom'),
      NavBar = require('./NavBar.jsx'),
      Portfolio = require('./Portfolio.jsx'),
      About = require('./About.jsx');

ReactDOM.render(
    <div>
      <NavBar />
      <Portfolio />
      <About />
    </div>,
    document.getElementById('main')
);
