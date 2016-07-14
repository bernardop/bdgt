import { observable, action, computed } from 'mobx'
import moment from 'moment'
import { DateFormats } from '../utils/constants'
import firebaseApp from '../data/firebase'

class Period {
  store
  id
  @observable startDate
  @observable endDate
  @observable budgetItems

  constructor (store, id, startDate, endDate, dateFormat) {
    this.id = id
    this.store = store
    this.startDate = moment(startDate, dateFormat || DateFormats.SLASH)
    this.endDate = moment(endDate, dateFormat || DateFormats.SLASH)
    this.budgetItems = []
  }

  @computed get displayName() {
    const startMonth = moment.monthsShort(this.startDate.month())
    const endMonth = moment.monthsShort(this.endDate.month())

    if (startMonth === endMonth) {
      return `${startMonth}`
    }

    return `${startMonth}-${endMonth}`
  }

  @computed get year() {
    return this.endDate.year()
  }
}

export default class PeriodStore {
  @observable periods = []

  constructor () {
    this.initializeStore()
  }

  @action initializeStore = () => {
    firebaseApp.database().ref('/periods').once('value').then(action((periods) => {
      const periodsVal = periods.val()
      this.periods = Object.keys(periodsVal).map((key) => {
        return new Period(this, key, periodsVal[key].startDate, periodsVal[key].endDate, moment.ISO_8601)
      })
    }))
  }

  @action addPeriod = (startDate, endDate) => {
    const regexp = /[\.-]/g
    const periodsRef = firebaseApp.database().ref().child('periods').push()
    const newPeriod = new Period(this, periodsRef.key, startDate.replace(regexp, '/'), endDate.replace(regexp, '/'))
    const promise = new Promise((resolve, reject) => {
      periodsRef.update({
        startDate: newPeriod.startDate.toDate(),
        endDate: newPeriod.endDate.toDate(),
        budgetItems: []
      }).then(action(() => {
        this.periods.push(newPeriod)
        resolve()
      })).catch(() => {
        reject()
      })
    })

    return promise
  }

  @computed get mostRecentPeriod() {
    if (this.periods.length === 0) {
      return {}
    }

    return this.periods.reduce((mostRecent, current) => {
      if (!mostRecent.endDate) {
        return current
      }

      return (current.endDate.isSameOrAfter(mostRecent.endDate)) ? current : mostRecent
    }, {})
  }

  @computed get periodsByYear() {
    if (this.periods.length === 0) {
      return {}
    }

    const years = this.periods.sort((p1, p2) => {
        return p2.endDate - p1.endDate
      }).reduce((memo, current) => {
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
