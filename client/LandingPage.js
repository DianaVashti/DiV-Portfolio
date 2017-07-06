import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import HeaderBar from './headerBar'
import DeskTopMain from './deskTopMain'

export default class LandingPage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="grad">
        <HeaderBar/>
        <DeskTopMain/>
      </div>
    )
  }
}
