import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'
import FontIcon from 'material-ui/FontIcon'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors'

const style = {margin: 5};

export default class Avatari extends Component {
  render() {
    return (
      <List>
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
              src="images/Memememe.jpg"
              size={225}
              style={style}
            />
          }
        >
        </ListItem>
      </List>
    )
  }
}
