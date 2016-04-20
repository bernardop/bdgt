import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

export default class InputWrapper extends Component {
  render () {
    const {
      fieldHasErrors,
      field,
      label
    } = this.props

    return (
      <FormGroup validationState={fieldHasErrors ? 'error' : null}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl type='text' {...field} />
        {fieldHasErrors ? <FormControl.Feedback /> : null}
        {fieldHasErrors ? <HelpBlock>{field.error}</HelpBlock> : null}
      </FormGroup>
    )
  }
}
