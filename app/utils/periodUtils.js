import moment from 'moment'
import { DateFormats } from './constants'

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

export { dateToMoment, compareDesc }
