import React, { Component, PropTypes } from 'react'
import { inject, observer } from 'mobx-react'
import { PeriodStore } from '../stores/PeriodStore'

@inject('stores')
@observer
class BudgetPeriod extends Component {
  render () {
    const { periodStore } = this.props.stores
    const { periodYear, periodName } = this.props.params
    return (
      <div>{periodYear || periodStore.mostRecentPeriod.year} - {periodName || periodStore.mostRecentPeriod.displayName}</div>
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
