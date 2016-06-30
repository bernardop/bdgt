import React, { Component, PropTypes } from 'react'
import { Col, Button, Glyphicon } from 'react-bootstrap'
import Header from './Header'
import classNames from 'classnames'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import Sidebar from './Sidebar'

@observer
export default class Main extends Component {
  @observable sidebarActive = true

  constructor (props) {
    super(props)

    this.toggleSidebarStatus()
  }

  @action toggleSidebarStatus = () => {
    this.sidebarActive = !this.sidebarActive
  }

  render () {
    const containerClasses = classNames('row-offcanvas', 'row-offcanvas-left', { 'active': this.sidebarActive })
    return (
      <div className={containerClasses}>
        <div id='sidebar' className='sidebar-offcanvas'>
          <Col md={12}>
            <Sidebar />
          </Col>
        </div>
        <div id='main'>
          <Col md={12}>
            <Header />
            <Col smHidden={true} mdHidden={true} lgHidden={true} md={12}>
              <Button onClick={this.toggleSidebarStatus}><Glyphicon glyph="align-justify" /></Button>
            </Col>
            {this.props.children}
          </Col>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node
}
