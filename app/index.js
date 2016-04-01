import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'
import routes from './routes'

import './styles/index.scss'

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
)

const store = createStore(
    reducer,
    DevTools.instrument()
)
const history = syncHistoryWithStore(browserHistory, store)

render (
    <Provider store={store}>
        <div>
            <Router routes={routes} history={browserHistory} />
            {/*<DevTools />*/}
        </div>
    </Provider>,
    document.getElementById('app')
)
