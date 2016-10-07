import React, { Component, PropTypes } from 'react'
import { action, observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { StoresPropTypesShape } from '../utils/constants'
import AddBudgetItem from './AddBudgetItem'

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
                        <Col xs={12}>
                            {this.newItemFormVisible
                                ? <AddBudgetItem handleCloseButtonClick={this.toggleNewItemForm} />
                                : <RaisedButton label='New Item' secondary={true} icon={<ContentAdd />} onClick={this.toggleNewItemForm} />
                            }
                        </Col>
                    </Row>
                </Grid>
                {/* {this.renderContent()} */}
            </div>
        )
    }
}

BudgetPeriod.wrappedComponent.propTypes = {
    params: PropTypes.object,
    stores: PropTypes.shape(StoresPropTypesShape)
}

export default BudgetPeriod
