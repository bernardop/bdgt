import React, { Component } from 'react'
import { Input, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { addPeriod } from '../actions/action_creators'

export const fields = [ 'periodStartDate', 'periodEndDate' ]

class AddPeriod extends Component {
  render () {
    const {
      fields: { periodStartDate, periodEndDate },
      handleSubmit
    } = this.props

    return (
      <div>
        <Col mdOffset={11} md={1} xsOffset={11} xs={1}>
          <Link to='/' className='btn btn-lg glyphicon glyphicon-remove-circle' />
        </Col>
        <Col mdOffset={3} md={6} xsOffset={1} xs={10}>
          <h2>Create a new period</h2>
          <form onSubmit={handleSubmit}>
            <Input type='text' label='Start date' {...periodStartDate} />
            <Input type='text' label='End date' {...periodEndDate} />
            <Button bsStyle='primary' type='submit'>Create</Button>
          </form>
        </Col>
      </div>
    )
  }
}

export default reduxForm(
  {
    form: 'addPeriod',
    fields
  },
  undefined,
  {
    onSubmit: addPeriod
  }
)(AddPeriod)
