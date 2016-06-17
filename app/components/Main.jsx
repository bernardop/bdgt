import React, { Component, PropTypes } from 'react'
import Header from './Header'

export default class Main extends Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node
}
