import { observable, action, computed } from 'mobx'

class Category {
  @observable name
  @observable type

  constructor (name, type) {
    this.name = name
    this.type = type
  }
}

export default class CategoryStore {
  @observable categories = []
}
