import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-flexbox-grid'
import Textfield from 'material-ui/Textfield'
import { Card, CardHeader } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

const cardStyle = {
  padding: 30
}

export default class Login extends Component {
  render () {
    return (
      <Grid className='login-container'>
        <Row center='xs' middle='xs' className='login-row'>
          <Col xs={10} md={6}>
            <Card containerStyle={cardStyle}>
              <Textfield floatingLabelText='Email' />
              <br />
              <Textfield floatingLabelText='Password' type='password' />
              <br />
              <br />
              <RaisedButton label='Login' primary={true} />
            </Card>
          </Col>
        </Row>
      </Grid>
    )
  }
}
