import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import {Tabs, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 800,
    height: 200,
  },
  slide: {
    padding: 10,
  },
};

export default class WorkBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="bdl app" value={0} />
          <Tab label="this.app" value={1} />
          <Tab label="blackjack" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
        <div style={styles.slide}>
          <div className="item">
            <a href="http://stjamesbaddatelist.herokuapp.com/"> Bad Date List • Di Vashti </a>
            <p>Node.js, React, MongoDB, Material-UI, Express</p>
            <p> In June 2016 myself and one other person received a grant to build an application for St. James Infirmary, with an MVP delivered in 5 weeks. We handled all aspects of the build from design to deploy and made deadline. This app is currently live with active users. </p>
            <img className="screenshots" src="images/bdl.png" />
            <a href="https://github.com/DianaVashti/BDL-DEV-Client/">Link to Client Repo</a>
            <a href="https://github.com/DianaVashti/sji-bdl-api">Link to API Repo</a>
          </div>
        </div>
          <div style={styles.slide}>
            <div className="item">
              <a href="https://github.com/DianaVashti/react-webpack-materialui-boilerplate"> Boilerplate • Di Vashti </a>
              <p>This single page app was built from a boilerplate I made for public use. I built it in part for other new devs to have a pre-configured playground to start learning React as well as a chance to dig deeper in to webpack and React-router. </p>
              <img className="screenshots" src="images/portfolio.png" />
              <a href="https://github.com/DianaVashti/DiV-Portfolio">Link to this.repo</a>
            </div>
          </div>
          <div style={styles.slide}>
            <div className="item">
              <a href="https://github.com/DianaVashti/console-strip-blackjack"> Strip BlackJack • Di Vashti </a>
              <p>Node.js, Vanilla JavaScript</p>
              <p>This is a pre JavaScript console blackjack simulation with a twist; When you run out of $ you spend your clothes.</p>
              <img className="screenshots" src="images/blackjack.png" />
            </div>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
