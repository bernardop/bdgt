import React, { Component, PropTypes } from 'react'

class BudgetPeriod extends Component {
  render () {
    return (
      <div>{this.props.params.periodName}</div>
    )
  }
}

BudgetPeriod.propTypes = {
  params: PropTypes.object
}

export default BudgetPeriod
