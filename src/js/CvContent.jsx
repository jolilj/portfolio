'use strict'
const React = require('react');

module.exports = {
  title: "CURRICULUM VITAE",
  education: (
      <table className="table">
        <tbody>
          <tr>
            <td rowSpan="3">
            <p className="cv-entry-title"><i className="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;&nbsp;EDUCATION</p>
            </td>
            <td className="table-entry">
              <div>
                <b> Engineering Physics </b><br/>
                Aug 2010 - <br/>
                Royal Institute of Technology, Stockholm
              </div>
              <div className="table-entry-info">
                Parental leave during Jan 2010 - Jan 2011 and Jan 2012 - Jan 2013.
              </div>
            </td>
          </tr>
          <tr>
            <td className="table-entry">
                <b> Systems, Control and Robotics</b><br/>
                Aug 2015 - <br/>
                Royal Institute of Technology, Stockholm
            </td>
          </tr>
          <tr>
            <td className="table-entry">
                <b> Natural Science with Specialization Rescue</b><br/>
                Aug 2004 - Jun 2007 <br/>
                Värmdö High Scool, Stockholm
            </td>
          </tr>
        </tbody>
      </table>
  ),
  experience: (
      <table className="table">
        <tbody>
          <tr>
            <td rowSpan="6">
            <p className="cv-entry-title"><i className="fa fa-briefcase" aria-hidden="true"></i>&nbsp;&nbsp;EXPERIENCE</p>
            </td>
            <td className="table-entry">
              <div>
                <b>Master Thesis </b><br/>
                Jan 2017 - <br/>
                <a href="http://www.ohb-sweden.se" target="_blank">OHB Sweden</a>
              </div>
              <div className="table-entry-info">
                Investigating combined attitude and orbital control using Model Predictive Control (MPC) for spacecrafts without reaction wheels (spinning wheels traditionally used in satellites to provide attitude control).
              </div>
            </td>
          </tr>
          <tr>
            <td className="table-entry">
              <div>
                <b> Software Development </b><br/>
                Nov 2016 - Feb 2017<br/>
                <a href="https://www.kth.se/ees/omskolan/organisation/avdelningar/ac" target="_blank">Royal Institute of Technology</a>
              </div>
              <div className="table-entry-info">
              Involved part time in developing a Model Predictive Control (MPC) Toolbox in <a href="http://julialang.org" target="_blank">Julia</a>. <a href="https://en.wikipedia.org/wiki/Model_predictive_control" target="_blank">MPC</a> is a model based optimal control strategy. Developed the frontend and backend for linear time-invariant systems in collaboration with one colleague.
              </div>
            </td>
          </tr>
          <tr>
            <td className="table-entry">
              <div>
                <b> Web Developer </b><br/>
                Jun 2016 - Jul 2016<br/>
                <a href="http://a3j.se/" target="_blank">A3J Consulting</a>
              </div>
              <div className="table-entry-info">
                Summer job developing chat bots for <a href="https://www.messenger.com/" target="_blank">Facebook Messenger</a> and <a href="https://www.kik.com/" target="_blank">Kik</a>, visualizing a conversation graph within a CMS-tool and implementing <a href="https://wit.ai/" target="_blank">WIT.ai</a> for natural language processing.
              </div>
            </td>
          </tr>
          <tr>
            <td className="table-entry">
              <div>
                <b> Web Developer </b><br/>
                Jun 2015 - Jul 2015<br/>
                <a href="http://a3j.se/" target="_blank">A3J Consulting</a>
              </div>
              <div className="table-entry-info">
                Summer job developing web view application for iOS utilising open-source frameworks such as <a href="https://facebook.github.io/react/" target="_blank">ReactJS</a>, <a href="https://d3js.org/" target="_blank">D3</a>, <a href="https://cordova.apache.org/" target="_blank">Cordova</a> amongst other.
              </div>
            </td>
          </tr>
          <tr>
            <td className="table-entry">
              <div>
                <b> Bachelor Thesis </b><br/>
                Jan 2015 - June 2015<br/>
                <a href="https://klevgrand.se" target="_blank">Klevgränd Produktion</a>
              </div>
             <div className="table-entry-info">
             Developed a digital dynamic range compression algorithm on behalf of Klevgränd Produktion. The thesis focused on a thorough review, implementaton and comparison of known algorithms.
              </div>
            </td>
          </tr>
          <tr>
            <td className="table-entry">
              <div>
                <b> App Developer </b><br/>
                Jan 2013 - Feb 2014<br/>
                Own project
              </div>
              <div className="table-entry-info">
                Plan, develop and release, beside my studies, the game MEM’EM where the user competes against friends by memorizing sequences. Available at <a href="https://play.google.com/store/apps/details?id=com.memem">Google Play</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  ),
  misc: (
      <table className="table">
        <tbody>
          <tr>
            <td rowSpan="3">
            <p className="cv-entry-title"><i className="fa fa-wrench" aria-hidden="true"></i>&nbsp;&nbsp;SKILLS</p>
            </td>
            <td className="table-entry">
              <div>
                <b> Languages</b><br/>
              </div>
              <div className="table-entry-info">
              Swedish - Fluent<br/> 
              English - Fluent 
                </div>
            </td>
          </tr>
          <tr>
            <td className="table-entry">
              <div>
                <b> Programming Languages: Experienced in</b><br/>
              </div>
              <div className="table-entry-info">
              Java, Javascript, Python, Matlab
                </div>
            </td>
          </tr>
          <tr>
            <td className="table-entry">
              <div>
                <b> Programming Languages: Familiar with</b><br/>
              </div>
              <div className="table-entry-info">
              C, C++, Objective-C, Julia
                </div>
            </td>
          </tr>
        </tbody>
      </table>
      ),
}
