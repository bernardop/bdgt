import React, { Component, PropTypes } from 'react'
import { inject, observer } from 'mobx-react'
import { PeriodStore } from '../stores/PeriodStore'

@inject('stores')
@observer
class BudgetPeriod extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>{this.props.params.periodId ? this.props.params.periodId : 'none'}</div>
    )
  }
}

BudgetPeriod.propTypes = {
  params: PropTypes.object,
  stores: PropTypes.shape({
    periodStore: PropTypes.instanceOf(PeriodStore)
  })
}

export default BudgetPeriod
