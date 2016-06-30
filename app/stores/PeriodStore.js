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
    return `${moment.monthsShort(this.startDate.month())}-${moment.monthsShort(this.endDate.month())}-${this.endDate.year()}`
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

  @computed get periodsYears() {
    if (this.periods.length === 0) {
      return []
    }
    
    const years = this.periods.reduce((memo, current) => {
      const year = current.endDate.year()
      if (memo.indexOf(year) === -1) {
        memo.push(year)
      }
      return memo
    }, [])

    return years.sort((a, b) => b - a)
  }
}
