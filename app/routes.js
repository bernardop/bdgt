import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { App, AddPeriod } from './components'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/periods/add" component={AddPeriod} />
        </Route>
    </Router>
)
