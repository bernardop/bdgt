import firebaseApp from './firebase'

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
