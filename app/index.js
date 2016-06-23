import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { useStrict as mobxStrictMode } from 'mobx'
import { Provider } from 'mobx-react'

import routes from './routes'

import PeriodStore from './stores/PeriodStore'

import './styles/index.scss'

mobxStrictMode(true)

const stores = {
  periodStore: new PeriodStore()
}

render(
  <Provider stores={stores}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
)
