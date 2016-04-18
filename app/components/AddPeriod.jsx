import React, { Component } from 'react'
import { Input, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { addPeriod } from '../actions/action_creators'

export const fields = [ 'periodStartDate', 'periodEndDate' ]

const validate = (values) => {
  const errors = {}

  if (!values.periodStartDate) {
    errors.periodStartDate = 'Required'
  }

  if (!values.periodEndDate) {
    errors.periodEndDate = 'Required'
  }

  return errors
}

class AddPeriod extends Component {
  getErrorAttrs (field) {
    const fieldHasErrors = field.error && field.touched
    return {
      help: fieldHasErrors ? field.error : null,
      bsStyle: fieldHasErrors ? 'error' : null,
      hasFeedback: fieldHasErrors
    }
  }

  render () {
    const {
      fields: { periodStartDate, periodEndDate },
      handleSubmit
    } = this.props

    const periodStartDateErrorAttrs = this.getErrorAttrs(periodStartDate)
    const periodEndDateErrorAttrs = this.getErrorAttrs(periodEndDate)

    return (
      <div>
        <Col mdOffset={11} md={1} xsOffset={11} xs={1}>
          <Link to='/' className='btn btn-lg glyphicon glyphicon-remove-circle' />
        </Col>
        <Col mdOffset={3} md={6} xsOffset={1} xs={10}>
          <h2>Create a new period</h2>
          <form onSubmit={handleSubmit}>
            <Input type='text' label='Start date' {...periodStartDateErrorAttrs} {...periodStartDate} />
            <Input type='text' label='End date' {...periodEndDateErrorAttrs} {...periodEndDate} />
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
    fields,
    validate
  },
  undefined,
  {
    onSubmit: addPeriod
  }
)(AddPeriod)
