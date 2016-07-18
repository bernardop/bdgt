import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import FIREBASE_CONFIG from './config'

const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG)

export default firebaseApp
