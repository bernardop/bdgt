import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { AppContainer, AddPeriod } from './components'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
            <Route path="/periods/add" component={AddPeriod} />
        </Route>
    </Router>
)
