import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { withRouter } from 'react-router'

import Drawer from 'material-ui/Drawer'

import { observable, action } from 'mobx'
import { inject, observer } from 'mobx-react'

import Header from './Header'
import Sidebar from './Sidebar'
import PeriodStore from '../stores/PeriodStore'
import firebaseApp from '../firebase/firebase'
import { logout } from '../firebase/auth'

@inject('stores')
@observer
class Main extends Component {
  @observable drawerOpen

  constructor (props) {
    super(props)

    this.initialize()
  }

  @action initialize = () => {
    this.drawerOpen = false
  }

  @action toggleDrawer = () => {
    this.drawerOpen = !this.drawerOpen
  }

  handleLogout = () => {
    logout().then(() => {
      this.props.router.push('/login')
    })
  }

  componentWillMount () {
    this.authListener();
  }

  componentWillUnMount () {
    this.unsubscribe && this.unsubscribe()
    this.authListener = undefined
  }

  authListener = () => {
    this.unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.router.push('/login')
      }
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
  stores: PropTypes.shape({
    periodStore: PropTypes.instanceOf(PeriodStore)
  }),
  router: PropTypes.object
}

export default withRouter(Main)
