import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AppContainer from './components/App'
import AddPeriod from './components/AddPeriod'
import Main from './components/Main'

export default (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={Main} />
    <Route path='/periods/add' component={AddPeriod} />
  </Route>
)
