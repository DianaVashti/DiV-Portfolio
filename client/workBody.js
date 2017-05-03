import React, {Component}  from 'react'
import PropTypes from 'prop-types'

export default class WorkBody extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="work-body-container">
        <div className="work-body">
          <div>
            blurb
          </div>
          <div>
            Short paragraph
          </div>
        </div>
        <div className="work-items">
          <div>
            Item 1
          </div>
          <div>
            Item 2
          </div>
          <div>
            Item 3
          </div>
          <div>
            Item 4
          </div>
          <div>
            Item 5
          </div>
        </div>
      </div>
    )
  }
}
