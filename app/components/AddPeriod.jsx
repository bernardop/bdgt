import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import InfiniteCalendar from 'react-infinite-calendar'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'
import moment from 'moment'
import PeriodStore from '../stores/PeriodStore'

import 'react-infinite-calendar/styles.css'

@observer(['stores'])
class AddPeriod extends Component {
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
    this.props.history.push('/periods')
  }

  handleCloseButtonClick = () => {
    this.props.history.push('/periods')
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
    var result = false
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
        <FloatingActionButton onMouseUp={this.handleCloseButtonClick}>
          <NavigationClose />
        </FloatingActionButton>
        <h2>Create a new period</h2>

        <h3 className='add-period-label'>Start date</h3>
        <div className='calendar-container'>
          <InfiniteCalendar width={calendarSize} height={calendarSize} selectedDate={this.selectedStartDate}
            onSelect={action((date) => this.sDateValue = date)} className='calendar'
            afterSelect={action(() => this.eDateValue = moment(this.eDateMinDate))}
            showHeader={false} />
        </div>

        <h3 className='add-period-label'>End date</h3>
        <div className="calendar-container">
          <InfiniteCalendar width={calendarSize} height={calendarSize} selectedDate={this.selectedEndDate}
            onSelect={action((date) => this.eDateValue = date)} className='calendar'
            disabledDays={this.eDateDisabledDays} minDate={this.eDateMinDate}
            showHeader={false} />
        </div>
        <RaisedButton primary={true} disabled={this.addButtonStatus} className='btn-add-period'
          onClick={this.handleCreatePeriod}>Create</RaisedButton>

      </div>
    )
  }
}

AddPeriod.propTypes = {
  stores: PropTypes.shape({
    periodStore: PropTypes.instanceOf(PeriodStore)
  }),
  history: PropTypes.object
}

export default AddPeriod
