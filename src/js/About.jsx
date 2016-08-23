'use strict'

const React = require('react'),
      AboutContent = require('./AboutContent.jsx');

const aboutIm = require('../img/about_image.png');

const About = React.createClass({
  render: function() {
    let md = this.props.width > 992,
        sm = this.props.width > 750 && this.props.width <= 992,
        xs = this.props.width > 700 && this.props.width <= 750;

    let colNum = 1,
        colSpan = md ? 8 : (sm ? 10 : (xs ?  12 : 10)),
        colOffset = (12-colSpan*colNum)/2,
        colType = md ? "md" : ( sm ?  "sm" :  (xs ? "xs" : "sm")),
        className='col-' + colType +'-' + colSpan + ' col-' + colType + '-offset-' + colOffset,
        divClass = "container-fluid text-center content-wrapper about" + ((this.props.width < 1140 || this.props.isMobile) ? " top-mobile" : "");

    return (
      <div id="about" className={divClass}>
        <div>
          <img className='about-image' src={aboutIm}/>
        </div>
        <h1 className="about-title">{AboutContent.title}</h1>
        <div className="row-centered">
          <div className={className}>
            <div className="about-view">
                {AboutContent.text}
                {AboutContent.footer}
            </div>
          </div>
        </div>
      </div>
        );
  }
});


module.exports = About;
