import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { useStrict as mobxStrictMode } from 'mobx'

import routes from './routes'

import './styles/index.scss'

mobxStrictMode(true)

render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('app')
)
