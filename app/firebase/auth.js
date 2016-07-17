import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import FIREBASE_CONFIG from '../config/firebaseConfig'

var firebaseApp = firebase.initializeApp(FIREBASE_CONFIG)

export function initializeFirebase () {
  // firebaseApp.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     console.log('user authenticated')
  //   } else {
  //     console.log('user not authenticated')
  //   }
  // })
}

export function login (email, password) {
  return new Promise((resolve, reject) => {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
      resolve()
    }).catch(() => {
      reject()
    })
  })
}

export function logout () {
  return new Promise((resolve, reject) => {
    firebaseApp.auth().signOut().then(() => {
      resolve()
    }).catch(() => {
      reject()
    })
  })
}

export default firebaseApp
