import uuid from 'uuid'
import moment from 'moment'

import { DATE_FORMAT } from '../utils/constants'

let initState = {
  periods: [
    {
      id: uuid.v4(),
      name: 'Jan-Feb-2016',
      startDate: moment('01/20/2016', DATE_FORMAT),
      endDate: moment('02/19/2016', DATE_FORMAT),
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
      startDate: moment('02/20/2016', DATE_FORMAT),
      endDate: moment('03/19/2016', DATE_FORMAT),
      year: 2016,
      entries: []
    },
    {
      id: uuid.v4(),
      name: 'Mar-Apr-2016',
      startDate: moment('03/20/2016', DATE_FORMAT),
      endDate: moment('04/19/2016', DATE_FORMAT),
      year: 2016,
      entries: []
    }
  ]
}

export default initState
