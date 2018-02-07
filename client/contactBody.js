import React, {Component}  from 'react'
import PropTypes from 'prop-types'

export default class ContactBody extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="contact-body-container container">
        <div className="contact-body">
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
