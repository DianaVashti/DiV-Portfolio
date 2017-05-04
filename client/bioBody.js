import React, {Component}  from 'react'
import PropTypes from 'prop-types'

export default class BioBody extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="bio-body-container container">
        <div className="bio-body-title">
          <h1> Hi, I'm Di! </h1>
          <div>
            <a href="https://github.com/DianaVashti">
              <img src="images/GithubMark.png" height="42" width="42" />
            </a>
            <a href="https://www.linkedin.com/in/diana-vashti-633b48135/">
              <img src="images/linkedin.png" height="42" width="42" />
            </a>
          </div>
        </div>
        <div className="bio-body">
          <div className="bio-body-left">
            <img className="Avatari" src="images/IloveThisPic.jpg" />
            <h2> I am a carbon-based Earth-imprisoned femme-forward lifeform. </h2>
            <h4>
              Lvl. 11 Software Sorceress, Druid of Data Divination, Back-end Node.js Bard, Algorithm Alchemist, React.js Rogue
            </h4>
          </div>
          <div className="bio-body-right">
            <h3>
              With 11 months of 40+ hours a week in an intensive full-stack Node.js JavaScript software engineering program behind me I am looking to begin my career as a developer. I like complicated schemas, algorithms, file structuring, debugging, and making things work. Whether you are looking for someone to help you build a bunch of new things or maintain a massive application, I am the droid you are looking for (especially if it's a Junior-level full-stack position, double-especially if it uses the following technologies/frameworks: React, PostgreSQL, Express)
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
