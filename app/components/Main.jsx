import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { withRouter } from 'react-router'

import Drawer from 'material-ui/Drawer'

import { observable, action } from 'mobx'
import { inject, observer } from 'mobx-react'

import Header from './Header'
import Sidebar from './Sidebar'
import { StoresPropTypesShape } from '../utils/constants'
import checkAuth from './checkAuth'
import { logout } from '../firebase/auth'
import { UserAuthStatus } from '../utils/constants'

@inject('stores')
@observer
class Main extends Component {
  @observable drawerOpen

  constructor (props) {
    super(props)

    this.setInitialValues()
  }

  @action('Main_setInitialValues') setInitialValues = () => {
    this.drawerOpen = false
  }

  @action('Main_toggleDrawer') toggleDrawer = () => {
    this.drawerOpen = !this.drawerOpen
  }

  handleLogout = () => {
    logout().then(() => {
      this.props.router.push('/')
    })
  }

  render () {
    const { history } = this.props

    return (
      <div>
        <Drawer open={this.drawerOpen} docked={false} width={275} onRequestChange={action((open) => this.drawerOpen = open)}>
          <Sidebar history={history} hideSidebar={this.toggleDrawer} />
        </Drawer>
        <Header showSidebar={this.toggleDrawer} logoutUser={this.handleLogout} />
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
  stores: PropTypes.shape(StoresPropTypesShape),
  router: PropTypes.object
}

export default withRouter(checkAuth(Main, UserAuthStatus.SHOULD_BE_AUTHENTICATED))
