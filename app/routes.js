import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import AddPeriod from './components/AddPeriod'
import Main from './components/Main'
import BudgetPeriod from './components/BudgetPeriod'
import Login from './components/Login'
import { requireAuth } from './firebase/auth'

export default (
  <Route path='/' component={App}>
    <Route path='/login' component={Login} />
    <Route path='/periods' component={Main} onEnter={requireAuth}>
      <IndexRoute component={BudgetPeriod} />
      <Route path='/periods/:periodYear/:periodName' component={BudgetPeriod} />
    </Route>
    <Route path='/periods/new' component={AddPeriod} onEnter={requireAuth} />
  </Route>
)
