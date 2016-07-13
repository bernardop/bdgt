import React, { Component, PropTypes } from 'react'

import { Grid, Row, Col } from 'react-flexbox-grid'

import Drawer from 'material-ui/Drawer'

import { observable, action } from 'mobx'
import { inject, observer } from 'mobx-react'

import Header from './Header'
import Sidebar from './Sidebar'
import PeriodStore from '../stores/PeriodStore'

@inject('stores')
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
        <Drawer open={this.drawerOpen} docked={false} width={275} onRequestChange={action((open) => this.drawerOpen = open)}>
          <Sidebar history={history} hideSidebar={this.toggleDrawer} />
        </Drawer>
        <Header showSidebar={this.toggleDrawer} />
        <Grid fluid>
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
  history: PropTypes.object,
  stores: PropTypes.shape({
    periodStore: PropTypes.instanceOf(PeriodStore)
  })
}
