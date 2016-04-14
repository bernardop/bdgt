import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/action_creators'

class App extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // todos: state.get('todos'),
    // filter: state.get('filter')
  }
}

const AppContainer = connect(mapStateToProps, actionCreators)(App)

export default AppContainer
