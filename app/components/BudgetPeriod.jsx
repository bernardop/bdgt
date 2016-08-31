import React, { Component, PropTypes } from 'react'
import { action, observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

import { StoresPropTypesShape } from '../utils/constants'

@inject('stores')
@observer
class BudgetPeriod extends Component {
    @observable newItemFormVisible = false

    renderContent = () => {
        const { stores, params } = this.props
        return params.periodId ? stores.periodStore.periods.filter(period => period.id === params.periodId)[0].id : this.props.stores.periodStore.mostRecentPeriod.id
    }

    @action toggleNewItemForm = () => {
        this.newItemFormVisible = !this.newItemFormVisible
    }

    render () {
        return (
            <div className='periods-main'>
                <Grid fluid>
                    <Row>
                        <Col>
                            <RaisedButton label={this.newItemFormVisible ? 'Close' : 'New Item'} primary={true} icon={this.newItemFormVisible ? <NavigationClose /> : <ContentAdd />}
                                onClick={this.toggleNewItemForm} />
                            {this.newItemFormVisible ? <div>The form</div> : null}
                        </Col>
                    </Row>
                </Grid>
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
