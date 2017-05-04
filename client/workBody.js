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
            <h3>In the last 30 weeks I have had the opportunity to do stuff. Some of it was pretty cool. Here are a few of the things I really had a lot of fun working on</h3>
          </div>
          <div>
            <h4>Stuff and more Stuff</h4>
          </div>
        </div>
        <div className="work-items">
          <div className="item">
            <p>Title • Link</p>
            <p>Description of the pproject</p>
            <p>Tags</p>
          </div>
          <div className="item">
            <p>Title • Link</p>
            <p>Description of the pproject</p>
            <p>Tags</p>
          </div>
          <div className="item">
            <p>Title • Link</p>
            <p>Description of the pproject</p>
            <p>Tags</p>
          </div>
          <div className="item">
            <p>Title • Link</p>
            <p>Description of the pproject</p>
            <p>Tags</p>
          </div>
          <div className="item">
            <p>Title • Link</p>
            <p>Description of the pproject</p>
            <p>Tags</p>
          </div>
        </div>
      </div>
    )
  }
}
