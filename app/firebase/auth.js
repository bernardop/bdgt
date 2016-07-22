import firebaseApp from './firebase'

export function login (email, password) {
  return new Promise((resolve, reject) => {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
      resolve()
    }).catch((e) => {
      let error = {}
      switch (e.code) {
        case 'auth/invalid-email':
          error = { email: 'Please provide a valid email' }
          break
        case 'auth/wrong-password':
          error = { password: 'Please make sure your password is correct' }
          break
        case 'auth/user-disabled':
        case 'auth/user-not-found':
          error = { all: 'A user with the credentials provided does not exist' }
          break
      }
      reject(error)
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
