import { setPeriodName } from '../utils'
import { Map, List } from 'immutable'
import uuid from 'uuid'

const periods = (state = Map({ 'periods': List() }), action) => {
    switch (action.type) {
        case 'SET_STATE':
            return state.get('periods').merge(action.state.periods)
        case 'ADD_PERIOD':
            const newPeriod = Map({
                id: uuid.v4(),
                name: 'New Period',
                beginDate: action.period.periodStartDate,
                endDate: action.period.periodEndDate,
                year: 2016,
                entries: List()
            })
            return state.push(newPeriod)
        default:
            return state
    }
}

export default periods
