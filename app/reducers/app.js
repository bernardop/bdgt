import { Map, List } from 'immutable'
import uuid from 'uuid'
import { setPeriodName } from '../utils/periodUtils'
import moment from 'moment'
import { DATE_FORMAT } from '../utils/constants'

const period = (state, action) => {
  switch (action.type) {
    case 'ADD_PERIOD':
      const startDate = moment(action.period.periodStartDate, DATE_FORMAT)
      const endDate = moment(action.period.periodEndDate, DATE_FORMAT)
      return Map({
        id: uuid.v4(),
        name: setPeriodName(startDate, endDate),
        startDate: startDate,
        endDate: endDate,
        year: endDate.year(),
        entries: List()
      })
    default:
      return state
  }
}

const app = (state = Map({ 'periods': List() }), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.get('periods').merge(action.state.periods)
    case 'ADD_PERIOD':
      return state.push(period(undefined, action))
    default:
      return state
  }
}

export default app
