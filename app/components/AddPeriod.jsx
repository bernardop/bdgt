import React, { Component } from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { addPeriod } from '../actions/action_creators'
import InputWrapper from './InputWrapper'

export const fields = [ 'periodStartDate', 'periodEndDate' ]

const dateIsValid = (dateText) => {
  const dateRegexp = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
  return dateText.match(dateRegexp)
}

const validate = (values) => {
  const errors = {}

  if (!values.periodStartDate) {
    errors.periodStartDate = 'Required'
  } else if (!dateIsValid(values.periodStartDate)) {
    errors.periodStartDate = 'Please enter a valid date'
  }

  if (!values.periodEndDate) {
    errors.periodEndDate = 'Required'
  } else if (!dateIsValid(values.periodEndDate)) {
    errors.periodEndDate = 'Please enter a valid date'
  }

  return errors
}

class AddPeriod extends Component {
  render () {
    const {
      fields: { periodStartDate, periodEndDate },
      handleSubmit
    } = this.props

    const periodStartDateHasErrors = periodStartDate.error && periodStartDate.touched
    const periodEndDateHasErrors = periodEndDate.error && periodEndDate.touched

    return (
      <div>
        <Col mdOffset={11} md={1} xsOffset={11} xs={1}>
          <Link to='/' className='btn btn-lg glyphicon glyphicon-remove-circle' />
        </Col>
        <Col mdOffset={3} md={6} xsOffset={1} xs={10}>
          <h2>Create a new period</h2>
          <form onSubmit={handleSubmit}>
            <InputWrapper fieldHasErrors={periodStartDateHasErrors} field={periodStartDate} label='Start date'/>
            <InputWrapper fieldHasErrors={periodEndDateHasErrors} field={periodEndDate} label='End date'/>
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
