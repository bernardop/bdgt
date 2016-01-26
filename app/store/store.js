import _ from 'lodash';
import uuid from 'uuid';
import moment from 'moment';
import { createStore, combineReducers } from 'redux';

const dateFormat = 'MM-DD-YYYY';

let store = {
    sidebarToggled: false,
    periods: [
        {
            id: uuid.v4(),
            name: 'Nov-Dec',
            beginDate: moment('11/20/2015', dateFormat),
            endDate: moment('12/19/2015', dateFormat),
            year: 2015
        },
        {
            id: uuid.v4(),
            name: 'Dec-Jan',
            beginDate: moment('12/20/2015', dateFormat),
            endDate: moment('01/19/2016', dateFormat),
            year: 2015
        },
        {
            id: uuid.v4(),
            name: 'Jan-Feb',
            beginDate: moment('01/20/2016', dateFormat),
            endDate: moment('02/19/2016', dateFormat),
            year: 2016
        },
        {
            id: uuid.v4(),
            name: 'Feb-Mar',
            beginDate: moment('02/20/2016', dateFormat),
            endDate: moment('03/19/2016', dateFormat),
            year: 2016
        }
    ]
};

const periods = (state = store.periods, action) => {
    switch (action.type) {
        case 'ADD_PERIOD':
            return [
                ...state,
                {
                    name: action.name,
                    beginDate: action.beginDate,
                    endDate: action.endDate,
                    year: action.endDate.year()
                }
            ];
        default:
            return state;
    }
}

const sidebarToggle = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return !state;
        default:
            return state;
    }

}

const bdgtApp = combineReducers({
    periods,
    sidebarToggle
});

export default createStore(bdgtApp);