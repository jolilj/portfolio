'use strict'

const React = require('react'),
      AboutContent = require('./AboutContent.jsx');

const aboutIm = require('../img/about_image.png');

const About = React.createClass({
  render: function() {
    return (
      <div id="about" className='container-fluid text-center content-wrapper about'>
        <div>
          <img className='about-image' src={aboutIm}/>
        </div>
        <h1 className="about-title">{AboutContent.title}</h1>
        <div className="about-view">
            {AboutContent.text}
            {AboutContent.footer}
        </div>
      </div>
        );
  }
});


module.exports = About;
