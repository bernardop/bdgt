import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'

const Header = (props) => {
  return (
    <AppBar title="BDGT" onLeftIconButtonTouchTap={props.showSidebar} />
  )
}

Header.propTypes = {
  showSidebar: PropTypes.function
}

export default Header
