import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { Grid, Col, Row } from 'react-flexbox-grid'
import Textfield from 'material-ui/Textfield'
import { Card } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import firebaseApp from '../firebase/firebase'
import { login } from '../firebase/auth'

@observer
class Login extends Component {
  @observable email = ''
  @observable password = ''

  constructor (props) {
    super(props)
  }

  @action handleEmailChange = (event) => {
    this.email = event.target.value
  }

  @action handlePasswordChange = (event) => {
    this.password = event.target.value
  }

  @action handleLogin = () => {
    login(this.email, this.password).then(() => {
      this.props.router.push('/periods')
    })
  }

  componentWillMount () {
    this.authListener();
  }

  componentWillUnMount () {
    this.unsubscribe && this.unsubscribe()
    this.authListener = undefined
  }

  authListener = () => {
    this.unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.router.push('/periods')
      }
    })
  }

  render () {
    return (
      <Grid className='login-container'>
        <Row center='xs' middle='xs' className='login-row'>
          <Col xs={10} md={6}>
            <Card containerStyle={{padding: 30}}>
              <Textfield floatingLabelText='Email' value={this.email}
                onChange={this.handleEmailChange} />
              <br />
              <Textfield floatingLabelText='Password' type='password'
                value={this.password} onChange={this.handlePasswordChange}/>
              <br />
              <br />
              <RaisedButton label='Login' primary={true} onClick={this.handleLogin}/>
            </Card>
          </Col>
        </Row>
      </Grid>
    )
  }
}

Login.propTypes = {
  router: PropTypes.object
}

export default withRouter(Login)
