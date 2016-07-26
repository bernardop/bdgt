import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { Grid, Col, Row } from 'react-flexbox-grid'
import TextField from 'material-ui/TextField'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import LinearProgress from 'material-ui/LinearProgress'
import { red500 } from 'material-ui/styles/colors'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import _ from 'lodash'

import { login } from '../firebase/auth'
import checkAuth from './checkAuth'
import { UserAuthStatus } from '../utils/constants'
import { StoresPropTypesShape } from '../utils/constants'

@inject('stores')
@observer
class Login extends Component {
  @observable showLoadingBar = false
  @observable credentials = {
    email: '',
    password: ''
  }
  @observable errors = {
    email: null,
    password: null,
    all: null
  }

  constructor (props) {
    super(props)
  }

  @action('Login_handleChange') handleChange = (event) => {
    this.credentials[event.target.name] = event.target.value
  }

  @action('Login_handleLogin') handleLogin = () => {
    this.showLoadingBar = true
    _.forOwn(this.errors, (val, key) => this.errors[key] = null)
    login(this.credentials.email, this.credentials.password).then(action('Login_auth-success', () => {
      this.props.stores.periodStore.initializeStore()
      this.showLoadingBar = false
      this.props.router.push('/periods')
    })).catch(action('Login_auth-error', (error) => {

      this.showLoadingBar = false
      _.assign(this.errors, error)
    }))
  }

  render () {
    const progressBarVisibility = {
      visibility: this.showLoadingBar ? 'visible' : 'hidden'
    }

    return (
      <div>
        <LinearProgress mode='indeterminate' style={progressBarVisibility} />
        <Grid>
          <Row center='xs' middle='xs' className='login-row'>
            <Col xs={10} md={6}>
              <Card containerStyle={{padding: 30}}>
                <CardTitle title='Login to BDGT' />
                <CardText>
                  <TextField floatingLabelText='Email' floatingLabelFixed={true} name='email' value={this.email}
                    onChange={this.handleChange} errorText={this.errors.email} errorStyle={{'text-align': 'left'}} />
                  <br />
                  <TextField floatingLabelText='Password' floatingLabelFixed={true} name='password' type='password'
                    value={this.password} onChange={this.handleChange} errorText={this.errors.password}
                    errorStyle={{'text-align': 'left'}} />
                  <br />
                  <br />
                  <div className='login-generic-error' style={{color: red500}}>{this.errors.all}</div>
                  <RaisedButton label='Login' primary={true} onClick={this.handleLogin}/>
                </CardText>
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
  stores: PropTypes.shape(StoresPropTypesShape)
}

export default withRouter(checkAuth(Login, UserAuthStatus.IS_AUTHENTICATED))
