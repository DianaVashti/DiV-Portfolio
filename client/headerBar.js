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

export default class HeaderBar extends Component {

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
          <Tab label="BDL App" value={0} />
          <Tab label="React Boilerplate" value={1} />
          <Tab label="Black Jack" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide}>
            <h1>BDL App</h1>
          </div>
          <div style={styles.slide}>
            <h1>React Boilerplate</h1>
          </div>
          <div style={styles.slide}>
            <h1>Blackjack</h1>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
