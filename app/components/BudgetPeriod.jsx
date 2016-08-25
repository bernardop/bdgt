import React, { Component, PropTypes } from 'react'
import { inject, observer } from 'mobx-react'

import { StoresPropTypesShape } from '../utils/constants'

@inject('stores')
@observer
class BudgetPeriod extends Component {
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

BudgetPeriod.wrappedComponent.propTypes = {
    params: PropTypes.object,
    stores: PropTypes.shape(StoresPropTypesShape)
}

export default BudgetPeriod
