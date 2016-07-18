import React, { Component, PropTypes } from 'react'
import firebaseApp from '../firebase/firebase'

export default function requireAuth(WrappedComponent) {
  class RequireAuth extends Component {
    componentWillMount () {
      this.authListener();
    }

    componentWillUnMount () {
      this.unsubscribe && this.unsubscribe()
      this.authListener = undefined
    }

    authListener = () => {
      this.unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.props.router.push('/login')
        }
      })
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  RequireAuth.propTypes = {
    router: PropTypes.object
  }

  return RequireAuth
}
