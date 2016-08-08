'use strict'

require('../less/styles.less');

const React = require('react'),
      ReactDOM = require('react-dom'),
      ItemWindow = require('./ItemWindow.jsx');

ReactDOM.render(
  <div className="jumbotron">
    <div className='container fluid'>
      <ul className="nav nav-pills">
        <li role="presentation" className="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
      </ul>
      <h1>Howdie, world!</h1>
      <div className="row">
        <ItemWindow />
        <ItemWindow />
      </div>
    </div>
  </div>,
  document.getElementById('main')
);
