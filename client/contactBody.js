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
            Send me a message: <a href="mailto:Diana.Vashti@gmail.com">Di Vashti</a>
          </h3>
          <h3>
            LinkedIn:  <a href="https://www.linkedin.com/in/diana-vashti-633b48135/">lol</a>
          </h3>
        </div>
      </div>
    )
  }
}
