'use strict'

const React = require('react');

const CvContent = require('./CvContent.jsx');


const Cv = React.createClass({
  render: function() {
    let md = this.props.width > 992,
        sm = this.props.width > 750 && this.props.width <= 992,
        xs = this.props.width > 700 && this.props.width <= 750;

    let colNum = 1,
        colSpan = md ? 8 : (sm ? 10 : (xs ?  12 : 10)),
        colOffset = (12-colSpan*colNum)/2,
        colType = md ? "md" : ( sm ?  "sm" :  (xs ? "xs" : "sm")),
        className='col-' + colType +'-' + colSpan + ' col-' + colType + '-offset-' + colOffset;
    return (
      <div id="cv" className='container-fluid text-center content-wrapper cv'>
        <p className="cv-title">{CvContent.title}</p>
        <div className="row-centered">
          <div className={className + " cv-view"}>
            {CvContent.education}
          </div>
          <div className={className + " cv-view"}>
            {CvContent.experience}
          </div>
          <div className={className + " cv-view"}>
            {CvContent.misc}
          </div>
        </div>
      </div>
      );
  },
});

module.exports = Cv;
