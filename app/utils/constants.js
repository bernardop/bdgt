import { Enum } from 'enumify'
import { PropTypes } from 'react'
import PeriodStore from '../stores/PeriodStore'
import CategoryStore from '../stores/CategoryStore'

export const DateFormats = {
  SLASH: 'MM/DD/YYYY',
  DASH: 'MM-DD-YYYY',
  PERIOD: 'MM.DD.YYYY'
}

class UserAuthStatus extends Enum {}
UserAuthStatus.initEnum(['SHOULD_BE_AUTHENTICATED', 'IS_AUTHENTICATED'])

class CategoryType extends Enum {}
CategoryType.initEnum(['EXPENSE', 'INCOME'])

const StoresPropTypesShape = {
  periodStore: PropTypes.instanceOf(PeriodStore),
  categoryStore: PropTypes.instanceOf(CategoryStore)
}

export { UserAuthStatus, CategoryType, StoresPropTypesShape }
