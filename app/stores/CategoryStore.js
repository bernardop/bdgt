import { observable, action } from 'mobx'
import firebaseApp from '../firebase/firebase'

class Category {
    id
    store
    @observable name
    @observable type

    constructor (store, id, name, type) {
        this.store = store
        this.id = id
        this.name = name
        this.type = type
    }
}

export default class CategoryStore {
    @observable categories = []
    @observable storeTriedToSync = false

    constructor () {
        this.fetchCategories()
    }

    @action('CategoryStore_fetchCategories') fetchCategories = () => {
        firebaseApp.database().ref('/categories').once('value').then(action('Firebase_fetch-categories-success', (categories) => {
            this.storeTriedToSync = true
            const categoriesVal = categories.val()
            if (categoriesVal) {
                this.categories = Object.keys(categoriesVal).map((key) => {
                    return new Category(this, key, categoriesVal[key].name, categoriesVal[key].type)
                })
            }
        })).catch(action('Firebase_fetch-categories-error', () => {
            this.storeTriedToSync = true
        }))
    }

    @action('CategoryStore_addCategory') addCategory = ({name, type}) => {
        const categoriesRef = firebaseApp.database().ref().child('categories').push()
        const newCategory = new Category(this, categoriesRef.key, name, type)
        const promise = new Promise((resolve, reject) => {
            categoriesRef.update({
                name: newCategory.name,
                type: newCategory.type
            }).then(action('Firebase_update-categories-success', () => {
                this.categories.push(newCategory)
                resolve()
            })).catch(() => {
                reject()
            })
        })

        return promise
    }
}
