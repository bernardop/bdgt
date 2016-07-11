import moment from 'moment'
import { DateFormats } from './constants'

// m prefix means the date is wrapped by moment
const setPeriodName = (mStartDate, mEndDate) => {
  return `${moment.monthsShort(mStartDate.month())}-${moment.monthsShort(mEndDate.month())}-${mEndDate.year()}`
}

const dateToMoment = (dateStr) => {
  let formatToUse = DateFormats.SLASH
  if (dateStr.indexOf('-') > -1) {
    formatToUse = DateFormats.DASH
  } else if (dateStr.indexOf('.') > -1) {
    formatToUse = DateFormats.PERIOD
  }

  return moment(dateStr, formatToUse)
}

const compareDesc = (a, b) => {
  return b - a
}

export { setPeriodName, dateToMoment, compareDesc }
