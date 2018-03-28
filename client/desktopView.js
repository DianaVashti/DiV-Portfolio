import React, {Component}  from 'react'
import PropTypes from 'prop-types'


export default class DesktopView extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div className="big-container">
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
        <div className="desktop-work container">
          <div className="item boilerplate">
            <a href="http://stjamesbaddatelist.herokuapp.com/"> Bad Date List • Di Vashti </a>
            <p>Node.js, React, MongoDB, Material-UI, Express</p>
            <p> In June 2017 myself and one other person received a grant to build an application for St. James Infirmary, with an MVP delivered in 5 weeks. We handled all aspects of the build from design to deploy and made deadline. This app is currently live with active users. </p>
            <img className="screenshots" src="images/bdl.png" />
            <a href="https://github.com/DianaVashti/BDL-DEV-Client/">Link to Client Repo</a>
            <a href="https://github.com/DianaVashti/sji-bdl-api">Link to API Repo</a>
          </div>
          <div className="item boilerplate">
            <a href="https://github.com/DianaVashti/react-webpack-materialui-boilerplate"> Boilerplate • Di Vashti </a>
            <p>This single page app was built from a boilerplate I made for public use. I built it in part for other new devs to have a pre-configured playground to start learning React as well as a chance to dig deeper in to webpack and React-router. </p>
            <img className="screenshots" src="images/portfolio.png" />
            <a href="https://github.com/DianaVashti/DiV-Portfolio">Link to this.repo</a>
          </div>
          <div className="item boilerplate">
            <a href="https://github.com/DianaVashti/console-strip-blackjack"> Strip BlackJack • Di Vashti </a>
            <p>Node.js, Vanilla JavaScript</p>
            <p>This is a pure JavaScript console blackjack simulation with a twist; When you run out of $ you spend your clothes.</p>
            <img className="screenshots" src="images/blackjack.png" />
          </div>
        </div>
        <div>
          <h3>
            Send me a message: <a href="mailto:Diana.Vashti@gmail.com">Di Vashti</a> / Diana.Vashti@gmail.com
          </h3>
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
