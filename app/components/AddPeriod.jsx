import React, { Component } from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import InfiniteCalendar from 'react-infinite-calendar'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'
import moment from 'moment'

import { periodStore } from '../stores/PeriodStore'

import 'react-infinite-calendar/styles.css'

@observer
export default class AddPeriod extends Component {
  @observable sDateValue
  @observable eDateValue

  constructor (props) {
    super(props)

    this.sDateValue = false
    this.eDateValue = false
  }

  @action handleCreatePeriod = () => {
    const dFormat = 'MM/DD/YYYY'
    periodStore.addPeriod(this.sDateValue.format(dFormat), this.eDateValue.format(dFormat))
    this.sDateValue = false
    this.eDateValue = false
  }

  @computed get eDateDisabledDays () {
    return (this.sDateValue) ? [] : [0, 1, 2, 3, 4, 5, 6]
  }

  @computed get eDateMinDate () {
    return (this.sDateValue) ? Number(this.sDateValue.toDate()) : Number(new Date(1980, 0, 1))
  }

  @computed get addButtonStatus () {
    return (this.sDateValue && this.eDateValue) ? false : true
  }

  @computed get selectedStartDate () {
    return (this.sDateValue) ? this.sDateValue.toDate() : false
  }

  @computed get selectedEndDate () {
    var result = false;
    if (this.sDateValue) {
      result = this.sDateValue.toDate().getDate() + 1
    }
    return result
  }

  render () {
    return (
      <div>
        <Col mdOffset={11} md={1} xsOffset={11} xs={1}>
          <Link to='/' className='btn btn-lg glyphicon glyphicon-remove-circle' />
        </Col>
        <Col mdOffset={2} md={8} xsOffset={1} xs={10}>
          <h2>Create a new period</h2>
          <Col md={6}>
            <InfiniteCalendar width={350} height={350} selectedDate={this.selectedStartDate}
              onSelect={action((date) => this.sDateValue = date)}
              afterSelect={action((date) => this.eDateValue = moment(this.eDateMinDate))}/>
          </Col>
          <Col md={6}>
            <InfiniteCalendar width={350} height={350} selectedDate={this.selectedEndDate}
              onSelect={action((date) => this.eDateValue = date)}
              disabledDays={this.eDateDisabledDays} minDate={this.eDateMinDate}/>
          </Col>
          <Col mdOffset={4} md={4} xsOffset={1} xs={10}>
            <Button disabled={this.addButtonStatus} bsStyle='primary' type='button' block bsSize='large' onClick={this.handleCreatePeriod}>Create</Button>
          </Col>
        </Col>
      </div>
    )
  }
}
