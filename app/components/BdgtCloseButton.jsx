import React, { PropTypes } from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/index'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

const BdgtCloseButton = (props) => {
  let buttonPosition = { end: 'xs' }
  switch (props.position) {
    case 'start':
      buttonPosition = { start: 'xs' }
      break
    case 'center':
      buttonPosition = { center: 'xs' }
      break
    case 'end':
      buttonPosition = { end: 'xs' }
      break
  }

  return (
    <Row {...buttonPosition}>
      <Col xsOffset={1} xs={10}>
        <FloatingActionButton onClick={props.handleClick}>
          <NavigationClose />
        </FloatingActionButton>
      </Col>
    </Row>
  )
}

BdgtCloseButton.propTypes = {
  position: PropTypes.string,
  handleClick: PropTypes.func.isRequired
}

export default BdgtCloseButton
