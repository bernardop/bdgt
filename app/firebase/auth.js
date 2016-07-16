import firebaseApp from '.'

export function userIsLoggedIn () {
  return firebaseApp.auth().currentUser
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

export function requireAuth (nextState, replace) {
  if (!userIsLoggedIn()) {
    replace('/login')
  }
}
