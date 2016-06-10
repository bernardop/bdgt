import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

export default class InputWrapper extends Component {
  render () {
    const fieldHasErrors = false
    const { fieldName, fieldValue, onChangeHandler, label } = this.props

    return (
      <FormGroup validationState={null}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl type='text' name={fieldName} value={fieldValue} onChange={onChangeHandler} />
        {fieldHasErrors ? <FormControl.Feedback /> : null}
        {fieldHasErrors ? <HelpBlock>Error</HelpBlock> : null}
      </FormGroup>
    )
  }
}
