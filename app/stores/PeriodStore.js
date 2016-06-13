import { observable, action, computed, autorun } from 'mobx'
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

class PeriodStore {
  @observable periods = []

  @action addPeriod = (startDate, endDate) => {
    console.log('start', startDate, 'end', endDate)
    const regexp = /[\.-]/g
    return this.periods.push(new Period(this, startDate.replace(regexp, '/'), endDate.replace(regexp, '/')))
  }
}

export const periodStore = new PeriodStore()
