import React, { Component } from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import InputWrapper from './InputWrapper'

import { periodStore } from '../stores/PeriodStore'

@observer
export default class AddPeriod extends Component {
  @observable sDateInputValue
  @observable eDateInputValue

  constructor (props) {
    super(props)

    this.sDateInputValue = ''
    this.eDateInputValue = ''
  }

  @action onChangeHandler = (e) => {
    switch (e.target.name) {
      case 'startDate':
        this.sDateInputValue = e.target.value
        break;
      case 'endDate':
        this.eDateInputValue = e.target.value
        break;
    }
    console.log('start', this.sDateInputValue, 'end', this.eDateInputValue)
  }

  render () {
    return (
      <div>
        <Col mdOffset={11} md={1} xsOffset={11} xs={1}>
          <Link to='/' className='btn btn-lg glyphicon glyphicon-remove-circle' />
        </Col>
        <Col mdOffset={3} md={6} xsOffset={1} xs={10}>
          <h2>Create a new period</h2>
          <form>
            <InputWrapper fieldName='startDate' fieldValue={this.sDateInputValue}
              onChangeHandler={this.onChangeHandler} label='Start Date' />
            <InputWrapper fieldName='endDate' fieldValue={this.eDateInputValue}
              onChangeHandler={this.onChangeHandler} label='End Date' />
            <Button bsStyle='primary' type='button' onClick={() => periodStore.addPeriod('01/18/2016', '02/17/2016')}>Create</Button>
          </form>
        </Col>
      </div>
    )
  }
}
