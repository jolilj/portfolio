'use strict'
const React = require('react');

const title = 'JOAKIM LILJA',
      text = (
          <div className="about-text">
            <p>Joakim Lilja is a programmer/web developer based in Stockholm, Sweden. He is currently working with sensor fusion at Scania's predevelopment department. He has a civil engineering degree in engineering physics with a masters degree in Systems, Control and Robotics from Royal Institute of Technology. Loves friends and family gatherings, math and <b>Sci</b>-fi and when not delving into control theory or building lego he wouldn’t mind a game of Catan. He lives with his partner and two kids in Skarpnäck, south of Stockholm.</p>
          </div>),
      footer = (
          <div className="about-footer">
            <p>
            <a href="mailto:lilja.joakim@gmail.com">&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-envelope fa-lg" aria-hidden="true"/> &nbsp;lilja.joakim@gmail.com</a>
            <a href="tel:+46737543450">&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-mobile fa-lg" aria-hidden="true"/> &nbsp;+46 737 54 34 50</a>
            <a href="http://www.github.com/jolilj" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-github-square fa-lg" aria-hidden="true"/> &nbsp;jolilj</a>
            </p>
          </div>
          );

module.exports = {
  title: title,
  text: text,
  footer: footer,
}
