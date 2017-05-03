import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import TabsExampleSwipeable from './headerBar'

export default class LandingPage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <TabsExampleSwipeable/>
      </div>
    )
  }
}
