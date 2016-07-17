import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

const Header = (props) => {
  return (
    <AppBar title="BDGT" iconElementLeft={<IconButton onClick={props.showSidebar}><NavigationMenu /></IconButton>}
      iconElementRight={<FlatButton onClick={props.logoutUser} label="Logout" />} />
  )
}

Header.propTypes = {
  showSidebar: PropTypes.func,
  logoutUser: PropTypes.func
}

export default Header
