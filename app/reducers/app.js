import { Map, List } from 'immutable'
import uuid from 'uuid'
import { setPeriodName, dateToMoment } from '../utils/periodUtils'

const period = (state, action) => {
  switch (action.type) {
    case 'ADD_PERIOD':
      const startDate = dateToMoment(action.period.periodStartDate)
      const endDate = dateToMoment(action.period.periodEndDate)
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
