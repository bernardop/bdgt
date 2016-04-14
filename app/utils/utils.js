import moment from 'moment'

let setPeriodName = function (startDate, endDate) {
  return `${moment.monthsShort(startDate.month())}-${moment.monthsShort(endDate.month())}-${endDate.year()}`
}

export { setPeriodName }
