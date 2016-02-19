import uuid from 'uuid'
import moment from 'moment'

const dateFormat = 'MM-DD-YYYY'

let store = {
    periods: [
        {
            id: uuid.v4(),
            name: 'Nov-Dec-2015',
            beginDate: moment('11/20/2015', dateFormat),
            endDate: moment('12/19/2015', dateFormat),
            year: 2015
        },
        {
            id: uuid.v4(),
            name: 'Dec-Jan-2016',
            beginDate: moment('12/20/2015', dateFormat),
            endDate: moment('01/19/2016', dateFormat),
            year: 2015
        },
        {
            id: uuid.v4(),
            name: 'Jan-Feb-2016',
            beginDate: moment('01/20/2016', dateFormat),
            endDate: moment('02/19/2016', dateFormat),
            year: 2016
        },
        {
            id: uuid.v4(),
            name: 'Feb-Mar-2016',
            beginDate: moment('02/20/2016', dateFormat),
            endDate: moment('03/19/2016', dateFormat),
            year: 2016
        }
    ]
}
