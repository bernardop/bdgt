import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import PeriodStore from '../stores/PeriodStore'

@observer(['stores'])
class Sidebar extends Component {
  render () {
    return (
      <div>
        <h3>Periods</h3>
        {this.props.stores.periodStore.periodsYears.map((year) => <div>{year}</div>)}
      </div>
    )
  }
}

Sidebar.propTypes = {
  stores: PropTypes.shape({
    periodStore: PropTypes.instanceOf(PeriodStore)
  })
}

export default Sidebar
