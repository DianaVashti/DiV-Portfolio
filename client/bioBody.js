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
          <p> Hi, I'm Di. </p>
        </div>
        <div className="bio-body">
          <div className="bio-body-left">
            <div className="Avatar">
              <img className="Avatari" src="images/IloveThisPic.jpg" />
            </div>
            <div className="lefty">
              <p>Multi-Class Human; Software Engineer</p>
              <p>
                Lvl. 11: Software Sorceress, Druid of Data Divination, Back-end Node.js Bard, Algorithm Alchemist, React.js Rogue.
              </p>
            </div>
          </div>
          <div className="bio-body-right">
            <p>
              Hi, I'm Di, and I like to build, create, upgrade, and debug. This applies to both my code and my life. I have a lot of interests: Playing music (guitar mostly), writing, reading, playing with legos, solving algorithms, exploring beautiful California, playing games of all sorts, and for the last couple years, designing and building software.
            </p>
            <p>
              I have ~4 years of experience working with Node.js and many of it's hottest new technologies. A few I have particularly significant experience working with are:<br/>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Webpack</li>
                <li>Mocha / Chai</li>
                <li>Knex / Sequelize</li>
              </ul>
            </p>
            <p>
              Majority of the applications I have contributed too have been built on the MERN stack (MongoDB, Express, React, Node) and I especially love building with React.
            </p>
            <p>
              I currently teach Full-Stack Node.js Web-Development at Learners Guild, a 10-month un-bootcamp but am interested in new and challenging opportunities to build tech with other smart and diligent awesome humans.
            </p>
            <p>
              Please reach out to me if you are interested in working with me.
            </p>
            <p>
              Let's ship some awesome code that makes users love us!
            </p>
          </div>
        </div>
        <div className="link-icons">
          <a href="https://github.com/DianaVashti">
            <img src="images/octocat.png" height="75" width="75"/>
          </a>
          <a href="https://www.linkedin.com/in/diana-vashti-633b48135/">
            <img src="images/linkedin.png" height="80" width="80"/>
          </a>
        </div>
      </div>
    )
  }
}
