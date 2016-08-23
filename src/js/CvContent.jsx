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
                A3J Consulting
              </div>
              <div className="table-entry-info">
                Summer job developing chat bots for Facebook Messenger and Kik, visualizing a conversation graph within a CMS-tool and implementing WIT.ai for natural language processing.
                </div>
            </td>
          </tr>
          <tr>
            <td className="table-entry">
              <div>
                <b> Web Developer </b><br/>
                Jun 2015 - Jul 2015<br/>
                A3J Consulting
              </div>
              <div className="table-entry-info">
                Summer job developing web view application for iOS utilising open-source frameworks such as ReactJS, D3JS, Cordova amongst other.
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
