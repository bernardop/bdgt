import React, { Component, PropTypes } from 'react'
import { inject, observer } from 'mobx-react'
import { PeriodStore } from '../stores/PeriodStore'

@inject('stores')
@observer
class BudgetPeriod extends Component {
  render () {
    const { periodStore } = this.props.stores
    const periodName = this.props.params.periodName || periodStore.mostRecentPeriod.displayName
    return (
      <div>{periodName}</div>
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
