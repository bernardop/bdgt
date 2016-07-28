import { observable, action } from 'mobx'
import firebaseApp from '../firebase/firebase'

class BudgetItem {
  id
  store
  @observable itemText
  @observable categoryId
  @observable periodId

  constructor (store, id, { itemText, categoryId, periodId }) {
    this.store = store
    this.id = id
    this.itemText = itemText
    this.categoryId = categoryId
    this.periodId = periodId
  }
}

export default class BudgetItemStore {
  @observable budgetItems = []
  @observable storeTriedToSync = false

  @action('BudgetItemStore_fetchBudgetItems') fetchBudgetItems = () => {
    firebaseApp.database().ref('/budgetItems').once('value').then(action('Firebase_fetch-bugetItems-success', (budgetItems) => {
      this.storeTriedToSync = true
      const budgetItemsVal = budgetItems.val()
      if (budgetItemsVal) {
        this.budgetItems = Object.keys(budgetItemsVal).map((key) => {
          return new BudgetItem(this, key, budgetItemsVal[key])
        })
      }
    })).catch(action('Firebase_fetch-budgetItems-error', () => {
      this.storeTriedToSync = true
    }))
  }
}
