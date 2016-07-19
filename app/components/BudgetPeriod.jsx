import React, { Component, PropTypes } from 'react'
import { inject, observer } from 'mobx-react'
import { PeriodStore } from '../stores/PeriodStore'

@inject('stores')
@observer
class BudgetPeriod extends Component {
  constructor (props) {
    super(props)
  }

  renderContent = () => {
    const { stores, params } = this.props
    return params.periodId ? stores.periodStore.periods.filter(period => period.id === params.periodId)[0].id : this.props.stores.periodStore.mostRecentPeriod.id
  }

  render () {
    return (
      <div>
        {this.renderContent()}
      </div>
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
