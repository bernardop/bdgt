
import { setPeriodName } from '../utils'

const periods = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PERIOD':
            return [
                ...state,
                {
                    id: uuid.v4(),
                    name: setPeriodName(action.beginDate, action.endDate),
                    beginDate: action.beginDate,
                    endDate: action.endDate,
                    year: action.endDate.year()
                }
            ]
        default:
            return state
    }
}

export default periods
