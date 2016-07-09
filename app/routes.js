import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import AddPeriod from './components/AddPeriod'
import Main from './components/Main'
import BudgetPeriod from './components/BudgetPeriod'
import Login from './components/Login'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Login} />
    <Route path='/periods' component={Main}>
      <IndexRoute component={BudgetPeriod} />
      <Route path='/periods/:periodName' component={BudgetPeriod} />
    </Route>
    <Route path='/new-period' component={AddPeriod} />
  </Route>
)
