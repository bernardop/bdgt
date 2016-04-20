import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button, Col } from 'react-bootstrap'
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
            <FormGroup validationState={periodStartDateHasErrors ? 'error' : null}>
              <ControlLabel>Start date</ControlLabel>
              <FormControl type='text' {...periodStartDate} />
              {periodStartDateHasErrors ? <FormControl.Feedback /> : null}
              {periodStartDateHasErrors ? <HelpBlock>{periodStartDate.error}</HelpBlock> : null}
            </FormGroup>

            <FormGroup validationState={periodEndDateHasErrors ? 'error' : null}>
              <ControlLabel>End date</ControlLabel>
              <FormControl type='text' {...periodEndDate} />
              {periodEndDateHasErrors ? <FormControl.Feedback /> : null}
              {periodEndDateHasErrors ? <HelpBlock>{periodEndDate.error}</HelpBlock> : null}
            </FormGroup>

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
