import React from 'react'
import { PageHeader, Row, Col } from 'react-bootstrap'

const Header = () => {
  return (
    <Row>
      <Col md={12}>
        <PageHeader>BDGT <small>Never go out of budget again</small></PageHeader>
      </Col>
    </Row>
  )
}

export default Header
