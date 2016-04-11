import uuid from 'uuid'
import moment from 'moment'

const dateFormat = 'MM-DD-YYYY'

let initState = {
    periods: [
        {
            id: uuid.v4(),
            name: 'Jan-Feb-2016',
            beginDate: moment('01/20/2016', dateFormat),
            endDate: moment('02/19/2016', dateFormat),
            year: 2016,
            entries: [
                {
                    id: uuid.v4(),
                    type: 'income',
                    category: 'Fixed Income',
                    text: 'Job income',
                    amount: 10000
                },
                {
                    id: uuid.v4(),
                    type: 'expense',
                    category: 'Eating Out',
                    text: 'Lunch at Taco Bell',
                    amount: 9.45
                }
            ]
        },
        {
            id: uuid.v4(),
            name: 'Feb-Mar-2016',
            beginDate: moment('02/20/2016', dateFormat),
            endDate: moment('03/19/2016', dateFormat),
            year: 2016,
            entries: []
        },
        {
            id: uuid.v4(),
            name: 'Mar-Apr-2016',
            beginDate: moment('03/20/2016', dateFormat),
            endDate: moment('04/19/2016', dateFormat),
            year: 2016,
            entries: []
        }
    ]
}

export default initState
