import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { useStrict as mobxStrictMode } from 'mobx'
import { Provider } from 'mobx-react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './utils/muiConfig'

import routes from './routes'

import PeriodStore from './stores/PeriodStore'

import './styles/index.scss'

injectTapEventPlugin()

mobxStrictMode(true)

const stores = {
  periodStore: new PeriodStore()
}

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider stores={stores}>
      <Router routes={routes} history={browserHistory} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
