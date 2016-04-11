import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import main from './main'
import periods from './periods'

export default combineReducers({
    main,
    //periods,
    routing: routerReducer
})
