import React, { Component } from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import InfiniteCalendar from 'react-infinite-calendar'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'
import moment from 'moment'

import 'react-infinite-calendar/styles.css'

@observer(['stores'])
export default class AddPeriod extends Component {
  @observable sDateValue
  @observable eDateValue

  constructor (props) {
    super(props)

    this.setInitialValues(false, false)
  }

  @action setInitialValues = (sDateValue, eDateValue) => {
    this.sDateValue = sDateValue
    this.eDateValue = eDateValue
  }

  @action handleCreatePeriod = () => {
    const dFormat = 'MM/DD/YYYY'
    this.props.stores.periodStore.addPeriod(this.sDateValue.format(dFormat), this.eDateValue.format(dFormat))
    this.sDateValue = false
    this.eDateValue = false
  }

  @computed get eDateDisabledDays () {
    return (this.sDateValue) ? [] : [0, 1, 2, 3, 4, 5, 6]
  }

  @computed get eDateMinDate () {
    var minDate = new Date(1980, 0, 1)
    if (this.sDateValue) {
      minDate = new Date(this.sDateValue.toDate().valueOf())
      minDate.setDate(minDate.getDate() + 1)
    }

    return Number(minDate)
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
      result = new Date(this.sDateValue.toDate().valueOf())
      result.setDate(result.getDate() + 1)
    }

    return result
  }

  render () {
    const calendarSize = 375
    return (
      <div>
        <Col mdOffset={11} md={1} xsOffset={11} xs={1}>
          <Link to='/' className='btn btn-lg glyphicon glyphicon-remove-circle' />
        </Col>
        <Col mdOffset={2} md={8} xsOffset={1} xs={10}>
          <h2>Create a new period</h2>
          <Col md={6}>
            <h3 className='add-period-label'>Start date</h3>
            <div className='calendar-container'>
              <InfiniteCalendar width={calendarSize} height={calendarSize} selectedDate={this.selectedStartDate}
                onSelect={action((date) => this.sDateValue = date)} className='calendar'
                afterSelect={action(() => this.eDateValue = moment(this.eDateMinDate))}
                showHeader={false} />
            </div>
          </Col>
          <Col md={6}>
            <h3 className='add-period-label'>End date</h3>
            <div className="calendar-container">
              <InfiniteCalendar width={calendarSize} height={calendarSize} selectedDate={this.selectedEndDate}
                onSelect={action((date) => this.eDateValue = date)} className='calendar'
                disabledDays={this.eDateDisabledDays} minDate={this.eDateMinDate}
                showHeader={false} />
            </div>
          </Col>
          <Col mdOffset={4} md={4} xsOffset={1} xs={10}>
            <Button disabled={this.addButtonStatus} bsClass='btn btn-primary btn-lg btn-block btn-add-period'
              type='button' onClick={this.handleCreatePeriod}>Create</Button>
          </Col>
        </Col>
      </div>
    )
  }
}
