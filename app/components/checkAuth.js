import React, { Component, PropTypes } from 'react'
import firebaseApp from '../firebase/firebase'
import { UserAuthStatus } from '../utils/constants'

export default function checkAuth(WrappedComponent, type) {
  class RequireAuth extends Component {
    componentWillMount () {
      if (type === UserAuthStatus.SHOULD_BE_AUTHENTICATED) {
        this.redirectToLoginAuthListener()
      } else if (type === UserAuthStatus.IS_AUTHENTICATED) {
        this.redirectToPeriodsAuthListener()
      }
    }

    componentWillUnMount () {
      this.unsubscribe && this.unsubscribe()
      this.redirectToLoginAuthListener = undefined
      this.redirectToPeriodsAuthListener = undefined
    }

    redirectToLoginAuthListener = () => {
      this.unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.props.router.push('/login')
        }
      })
    }

    redirectToPeriodsAuthListener = () => {
      this.unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
          this.props.router.push('/periods')
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
