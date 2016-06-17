import React, { Component } from 'react'

export default class BudgetPeriod extends Component {
  render () {
    return (
      <div>{this.props.params.periodName}</div>
    )
  }
}
