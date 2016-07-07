import { observable, action, computed } from 'mobx'
import uuid from 'uuid'
import moment from 'moment'
import { DateFormats } from '../utils/constants'

class Period {
  store
  id
  @observable startDate
  @observable endDate
  @observable budgetItems

  constructor (store, startDate, endDate) {
    this.id = uuid.v4()
    this.store = store
    this.startDate = moment(startDate, DateFormats.SLASH)
    this.endDate = moment(endDate, DateFormats.SLASH)
    this.budgetItems = []
  }

  @computed get displayName() {
    const startMonth = moment.monthsShort(this.startDate.month())
    const endMonth = moment.monthsShort(this.endDate.month())
    const endYear = this.endDate.year()

    if (startMonth === endMonth) {
      return `${startMonth}-${endYear}`
    }

    return `${startMonth}-${endMonth}-${endYear}`
  }

  @computed get year() {
    return this.endDate.year()
  }
}

export default class PeriodStore {
  @observable periods = []

  @action addPeriod = (startDate, endDate) => {
    const regexp = /[\.-]/g
    return this.periods.push(new Period(this, startDate.replace(regexp, '/'), endDate.replace(regexp, '/')))
  }

  @computed get periodsByYear() {
    if (this.periods.length === 0) {
      return {}
    }

    const years = this.periods.reduce((memo, current) => {
      const year = current.endDate.year()
      if (!memo.hasOwnProperty(year)) {
        memo[year] = []
      }
      memo[year].push(current)
      return memo
    }, {})

    return years
  }
}
