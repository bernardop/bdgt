import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import PeriodStore from '../stores/PeriodStore'

@observer(['stores'])
class Sidebar extends Component {
  render () {
    const { stores } = this.props
    return (
      <div>
        <h3>Periods</h3>
        {Object.keys(stores.periodStore.periodsByYear).map((year) => {
          return (
            <div>
              <div>{year}</div>
              <ul>
                {stores.periodStore.periodsByYear[year].map((period) => {
                  return <li>{period.displayName}</li>
                })}
              </ul>
            </div>
          )
        })}
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
