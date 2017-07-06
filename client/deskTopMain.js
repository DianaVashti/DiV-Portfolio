import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import DeskTopHeader from './deskTopHeader'

export default class DeskTopMain extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="desktop">
        <DeskTopHeader />
      </div>
    )
  }
}
