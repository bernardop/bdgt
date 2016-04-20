import moment from 'moment'

// m prefix means the date is wrapped by moment
let setPeriodName = function (mStartDate, mEndDate) {
  return `${moment.monthsShort(mStartDate.month())}-${moment.monthsShort(mEndDate.month())}-${mEndDate.year()}`
}

export { setPeriodName }
