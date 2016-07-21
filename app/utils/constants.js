import { Enum } from 'enumify'

export const DateFormats = {
  SLASH: 'MM/DD/YYYY',
  DASH: 'MM-DD-YYYY',
  PERIOD: 'MM.DD.YYYY'
}

class UserAuthStatus extends Enum {}
UserAuthStatus.initEnum(['SHOULD_BE_AUTHENTICATED', 'IS_AUTHENTICATED'])

class CategoryType extends Enum {}
CategoryType.initEnum(['EXPENSE', 'INCOME'])

export { UserAuthStatus, CategoryType }
