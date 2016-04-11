import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { AppContainer, AddPeriod, Main } from './components'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={Main} />
            <Route path="/periods/add" component={AddPeriod} />
        </Route>
    </Router>
)
