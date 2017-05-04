import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import {Tabs, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import injectTapEventPlugin from 'react-tap-event-plugin';
import BioBody from './bioBody'
import WorkBody from './WorkBody'
import ContactBody from './contactBody'

injectTapEventPlugin();

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsSwipeable extends Component {

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
          <Tab label="Di Vashti" value={0} />
          <Tab label="Work" value={1} />
          <Tab label="Contact" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.headline}>
            <BioBody/>
          </div>
          <div style={styles.slide}>
            <WorkBody/>
          </div>
          <div style={styles.slide}>
            <ContactBody/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}