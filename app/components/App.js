import React from 'react'
import { PageHeader } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/action_creators'

const App = (props) => {
    return (
        <div>
            <PageHeader>BDGT <small>Never go out of budget again</small></PageHeader>
            {props.children}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // todos: state.get('todos'),
        // filter: state.get('filter')
    }
}

const AppContainer = connect(mapStateToProps, actionCreators)(App);

export { App, AppContainer }
