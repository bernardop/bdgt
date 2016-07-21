import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { Grid, Col, Row } from 'react-flexbox-grid'
import Textfield from 'material-ui/Textfield'
import { Card } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { login } from '../firebase/auth'
import checkAuth from './checkAuth'
import { UserAuthStatus } from '../utils/constants'

@observer
class Login extends Component {
  @observable credentials = {
    email: '',
    password: ''
  }

  constructor (props) {
    super(props)
  }

  @action('Login_handleChange') handleChange = (event) => {
    this.credentials[event.target.name] = event.target.value
  }

  @action('Login_handleLogin') handleLogin = () => {
    login(this.credentials.email, this.credentials.password).then(() => {
      this.props.router.push('/periods')
    })
  }

  render () {
    return (
      <Grid className='login-container'>
        <Row center='xs' middle='xs' className='login-row'>
          <Col xs={10} md={6}>
            <Card containerStyle={{padding: 30}}>
              <Textfield floatingLabelText='Email' name='email' value={this.email}
                onChange={this.handleChange} />
              <br />
              <Textfield floatingLabelText='Password' name='password' type='password'
                value={this.password} onChange={this.handleChange}/>
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

export default withRouter(checkAuth(Login, UserAuthStatus.IS_AUTHENTICATED))
