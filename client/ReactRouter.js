import ReactDom from 'react-dom'
import {Component} from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route, browserHistory } from 'react-router'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LandingPage from './LandingPage'

export default class ReactRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const landingPageComponent = (props, state, params) =>
      <LandingPage />

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={browserHistory}>
          <Route path="*" component={landingPageComponent} />
        </Router>
      </MuiThemeProvider>
    )
  }
}
