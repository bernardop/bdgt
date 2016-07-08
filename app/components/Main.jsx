import React, { Component, PropTypes } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import Drawer from 'material-ui/Drawer'
import Header from './Header'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
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
    return (
      <div>
        <Drawer open={this.drawerOpen} docked={false} width={300} onRequestChange={action((open) => this.drawerOpen = open)}>
          <Sidebar />
        </Drawer>
        <div id='main'>
          <Header />
          <FloatingActionButton onMouseUp={this.toggleDrawer}>
            <NavigationMenu />
          </FloatingActionButton>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node
}
