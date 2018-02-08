import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import BioBody from './bioBody';
import WorkBody from './workBody';
import ContactBody from './contactBody'
import DesktopView from './desktopView'
const recentsIcon = <FontIcon className="material-icons">gamepad</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">brush</FontIcon>;
const nearbyIcon = <FontIcon className="material-icons">chat</FontIcon>;


class BottomNavigationExampleSimple extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedIndex: 0,
    };
  }

  select = (index) => this.setState({selectedIndex: index});


  render() {
    const comp = () => {
      if(this.state.selectedIndex === 0){
        return <BioBody/>
      } else if(this.state.selectedIndex === 1){
        return <WorkBody/>
      } else if(this.state.selectedIndex === 2){
        return <ContactBody/>
      }
    }

    return (
      <div>
        <div className="mobile-version">
          <div className="main-body">
            {comp()}
          </div>
          <div>
            <Paper zDepth={1} className="footer">
              <BottomNavigation selectedIndex={this.state.selectedIndex} >
                <BottomNavigationItem
                  label="Bio"
                  icon={recentsIcon}
                  onClick={() => this.select(0)}
                />
                <BottomNavigationItem
                  label="Work"
                  icon={favoritesIcon}
                  onClick={() => this.select(1)}
                />
                <BottomNavigationItem
                  label="Contact"
                  icon={nearbyIcon}
                  onClick={() => this.select(2)}
                />
              </BottomNavigation>
            </Paper>
          </div>
        </div>
        <div className="desktop-version">
          <DesktopView />
        </div>
      </div>
    );
  }
}

export default BottomNavigationExampleSimple;
