import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { Grid, Col, Row } from 'react-flexbox-grid'
import Textfield from 'material-ui/Textfield'
import { Card } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import LinearProgress from 'material-ui/LinearProgress'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import { login } from '../firebase/auth'
import checkAuth from './checkAuth'
import { UserAuthStatus } from '../utils/constants'

@inject('stores')
@observer
class Login extends Component {
  @observable showLoadingBar = false
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
    this.showLoadingBar = true
    login(this.credentials.email, this.credentials.password).then(() => {
      this.props.stores.periodStore.initializeStore()
      this.showLoadingBar = false
      this.props.router.push('/periods')
    })
  }

  render () {
    const progressBarVisibility = {
      visibility: this.showLoadingBar ? 'visible' : 'hidden'
    }

    return (
      <div>
        <LinearProgress mode='indeterminate' style={progressBarVisibility} />
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
      </div>
    )
  }
}

Login.propTypes = {
  router: PropTypes.object,
  stores: PropTypes.object
}

export default withRouter(checkAuth(Login, UserAuthStatus.IS_AUTHENTICATED))
