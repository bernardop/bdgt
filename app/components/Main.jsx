import React, { Component, PropTypes } from 'react'

import { Grid, Row, Col } from 'react-flexbox-grid'

import Drawer from 'material-ui/Drawer'

import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import Header from './Header'
import Sidebar from './Sidebar'

@observer
export default class Main extends Component {
  @observable drawerOpen = false

  constructor (props) {
    super(props)
  }

  @action toggleDrawer = () => {
    this.drawerOpen = !this.drawerOpen
  }

  render () {
    const { history } = this.props
    
    return (
      <div>
        <Drawer open={this.drawerOpen} docked={false} width={300} onRequestChange={action((open) => this.drawerOpen = open)}>
          <Sidebar history={history} />
        </Drawer>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Header showSidebar={this.toggleDrawer} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object
}
