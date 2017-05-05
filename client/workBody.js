import React, {Component}  from 'react'
import PropTypes from 'prop-types'

export default class WorkBody extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="work-body-container container">
        <div className="work-body">
          <div>
            <h2>Here are a few examples of what I have learned the last 30 weeks.</h2>
          </div>
        </div>
        <div className="work-items">
          <div className="item">
            <a href="https://github.com/DianaVashti/coach-que"> Coach-Queue • Learners's Guild </a>
            <p>Coach-Queue is an open-source application used at Learner's Guild to assist learners in requested help from the coaches. I spent 4 weeks taking issues/tickets deploying features and bug-fixes that were lauched to production. </p>
            <a href="https://github.com/GuildCrafts/coach-queue/pull/202">
              Click here for a link to an example PR
            </a>
            <p> Node.js, React, Knex, PostgreSQL, Socket.io </p>
          </div>
          <div className="item">
            <a href="https://github.com/DianaVashti/blackjack-console-game"> Terminal BlackJack • Di Vashti </a>
            <p>In my second week at Learner's Guild I built this BlackJack game that runs in the terminal/shell. I also created a rubric and specs so that other learners could take on this project as a goal to focus on their vanilla JavaScript.</p>
            <p>Node.js, Vanilla JavaScript</p>
            <img className="screenshots" src="images/blackjack.png" />
          </div>
        </div>
      </div>
    )
  }
}
