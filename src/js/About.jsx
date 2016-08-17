'use strict'

const React = require('react'),
      ReactDOM = require('react-dom'),
      Portfolio = require('./Portfolio.jsx');

const aboutIm = require('../img/about_image.png');

const About = React.createClass({
  render: function() {
    return (
      <div id="about" className='container-fluid text-center content-wrapper about'>
        <img className='about-image' src={aboutIm}/>
        <h1 className="about-text">JOAKIM LILJA</h1>
        <div className="about-view">
          <h3 className="about-text">Engineering Physics, MSc System, Control and Robotics.</h3>
        </div>
      </div>
        );
  }
});


module.exports = About;
