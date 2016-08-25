import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { Grid, Col, Row } from 'react-flexbox-grid/lib/index'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import LinearProgress from 'material-ui/LinearProgress'
import { observable, action, computed } from 'mobx'
import { inject, observer } from 'mobx-react'
import moment from 'moment'

import { StoresPropTypesShape } from '../utils/constants'
import checkAuth from './checkAuth'
import { UserAuthStatus } from '../utils/constants'
import BdgtCloseButton from './BdgtCloseButton'

import 'react-infinite-calendar/styles.css'

@inject('stores')
@observer
class AddPeriod extends Component {
    @observable sDateValue = false
    @observable eDateValue = false
    @observable showNewPeriodError = false
    @observable showLoadingBar = false

    @action('AddPeriod_handleCreatePeriod') handleCreatePeriod = () => {
        this.showLoadingBar = true
        const dFormat = 'MM/DD/YYYY'
        this.props.stores.periodStore.addPeriod(moment(this.sDateValue).format(dFormat), moment(this.eDateValue).format(dFormat))
        .then(action('PeriodStore_addPeriod-success', () => {
            this.sDateValue = false
            this.eDateValue = false
            this.showLoadingBar = false
            this.props.router.push('/periods')
        })).catch(action('PeriodStore_addPeriod-error', () => {
            this.showLoadingBar = false
            this.showNewPeriodError = true
        }))
    }

    handleCloseButtonClick = () => {
        this.props.router.push('/periods')
    }

    @computed get eDateMinDate () {
        var minDate = new Date(1980, 0, 1)
        if (this.sDateValue) {
            minDate = new Date(this.sDateValue.valueOf())
            minDate.setDate(minDate.getDate() + 1)
        }

        return minDate
    }

    @computed get addButtonStatus () {
        return (this.sDateValue && this.eDateValue) ? false : true
    }

    @action('AddPeriod_handleSetStartDate') handleSetStartDate = (event, date) => {
        this.sDateValue = date
    }

    @action('AddPeriod_handleSetEndDate') handleSetEndDate = (event, date) => {
        this.eDateValue = date
    }

    render () {
        const progressBarVisibility = {
            visibility: this.showLoadingBar ? 'visible' : 'hidden'
        }

        return (
            <div>
                <LinearProgress mode='indeterminate' style={progressBarVisibility} />
                <div className='new-period'>
                    <Grid>
                        <BdgtCloseButton position='end' handleClick={this.handleCloseButtonClick} />
                        <Row center='xs' middle='xs' className='new-period--form-container'>
                            <Col xs={10} md={6}>
                                <Card containerStyle={{padding: 30}}>
                                    <CardTitle title='New Period' />
                                    <CardText>
                                        <DatePicker floatingLabelFixed={true} floatingLabelText="Start Date" autoOk={true}
                                            onChange={this.handleSetStartDate} />
                                        <DatePicker floatingLabelFixed={true} floatingLabelText="End Date" autoOk={true} minDate={this.eDateMinDate}
                                            onChange={this.handleSetEndDate} />
                                        <br />
                                        <br />
                                        <RaisedButton label='Create' primary={true} disabled={this.addButtonStatus} onClick={this.handleCreatePeriod} />
                                    </CardText>
                                </Card>
                            </Col>
                        </Row>
                    </Grid>
                    <Snackbar open={this.showNewPeriodError} message='Error adding period' autoHideDuration={3000}
                        onRequestClose={action(() => this.showNewPeriodError = false)} />
                </div>
            </div>
        )
    }
}

AddPeriod.wrappedComponent.propTypes = {
    stores: PropTypes.shape(StoresPropTypesShape),
    router: PropTypes.object
}

export default withRouter(checkAuth(AddPeriod, UserAuthStatus.SHOULD_BE_AUTHENTICATED))
