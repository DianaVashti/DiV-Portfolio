import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import Avatari from './avatar'

export default class BioBody extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="bio-body-container">
        <div className="bio-body-left">
          <div className="avatar">
            <Avatari/>
          </div>
          <h3> I am a carbon-based lifeform interested in software engineering, algorithms, wacky mathematics, sports, video games, and problem solving. All yr bugs are belong to Di (I will eradicate them all!) </h3>
          <h3> I like to take broken things and make them work.</h3>
        </div>
        <div className="bio-body-right">
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a magna porttitor, congue urna at, egestas magna. Nullam aliquet ultricies vehicula. Pellentesque molestie sed turpis id malesuada. Sed in pellentesque neque, vel ultricies dolor. Quisque lacinia et orci pellentesque finibus. Aenean bibendum ligula dolor, sed maximus tortor ultricies sit amet. Nam posuere gravida dui non sollicitudin. Cras pulvinar urna viverra, tincidunt mauris at, scelerisque ipsum. In luctus justo sed nibh faucibus laoreet. Vestibulum in tortor magna.
            Proin eget nunc eros. Proin vel scelerisque nisl. Praesent elementum lacus quis purus euismod pellentesque. Mauris eu blandit massa. Integer suscipit blandit augue, vitae finibus ipsum auctor suscipit. Mauris euismod, velit at vulputate sollicitudin, mi tortor ullamcorper eros, eu gravida lorem velit eget arcu. Etiam pharetra felis id felis tincidunt, sed iaculis nunc dictum. Pellentesque sagittis felis non vehicula cursus. Morbi quis dui urna. Etiam quis mi pellentesque, facilisis odio sit amet, imperdiet orci. Sed cursus iaculis turpis, sed porttitor ante. Curabitur quis orci neque. Proin erat dolor, pretium sed dolor vel, mattis sagittis justo. Praesent porta ex justo, nec elementum odio consectetur vel. Curabitur consectetur elementum est laoreet pharetra.
            Nam ultrices dolor at turpis finibus auctor. Sed commodo ligula sit amet elementum accumsan. Phasellus et consequat nunc, a interdum risus. Phasellus vitae lobortis diam, sit amet ultricies lorem. Mauris porta fermentum lorem, eget imperdiet orci. Phasellus quis velit ornare, fringilla sem ut, ultricies justo. Ut a justo nec nunc malesuada hendrerit. Nullam pellentesque justo ante, et imperdiet risus posuere id. Sed semper laoreet.
          </h5>
        </div>
      </div>
    )
  }
}
