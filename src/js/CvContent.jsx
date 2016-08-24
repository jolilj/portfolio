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
                <b> Engineering Physics </b><br/>
                Aug 2010 - <br/>
                Royal Institute of Technology, Stockholm
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
            <td rowSpan="3">
            <p className="cv-entry-title"><i className="fa fa-briefcase" aria-hidden="true"></i>&nbsp;&nbsp;EXPERIENCE</p>
            </td>
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
              C, C++, Objective-C
                </div>
            </td>
          </tr>
        </tbody>
      </table>
      ),
}
