import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

@observer
export default class App extends Component {
  render () {
    return (
      <div>
        {this.props.children}
        <DevTools />
      </div>
    )
  }
}
