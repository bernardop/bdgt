import React from 'react'
import { render } from 'react-dom'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import initState from './store/store'
import reducer from './reducers/index'
import routes from './routes'

import './styles/index.scss'

const createStoreDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
const store = createStoreDevTools(reducer)

const history = syncHistoryWithStore(browserHistory, store)

store.dispatch({
    type: 'SET_STATE',
    state: initState
});

render (
    <Provider store={store}>
        <div>
            <Router routes={routes} history={browserHistory} />
        </div>
    </Provider>,
    document.getElementById('app')
)