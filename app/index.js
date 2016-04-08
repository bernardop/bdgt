import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, combineReducers } from 'redux'
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

const createStoreDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
const store = createStoreDevTools(reducer)

const history = syncHistoryWithStore(browserHistory, store)

store.dispatch({
    type: 'SET_STATE',
    state: {
        periods: [
            {id: 1, name: 'Jan-Feb-2016'},
            {id: 2, name: 'Feb-Mar-2016'},
            {id: 3, name: 'Mar-Apr-2016'}
        ]
    }
});

render (
    <Provider store={store}>
        <div>
            <Router routes={routes} history={browserHistory} />
        </div>
    </Provider>,
    document.getElementById('app')
)
