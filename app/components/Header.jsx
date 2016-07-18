import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

const Header = (props) => {
  return (
    <AppBar title="BDGT" onLeftIconButtonTouchTap={props.showSidebar}
      iconElementRight={<FlatButton onClick={props.logoutUser} label="Logout" />} />
  )
}

Header.propTypes = {
  showSidebar: PropTypes.func,
  logoutUser: PropTypes.func
}

export default Header
