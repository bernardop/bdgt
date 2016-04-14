import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import periods from './periods'

export default combineReducers({
  periods,
  routing: routerReducer,
  form: formReducer
})
