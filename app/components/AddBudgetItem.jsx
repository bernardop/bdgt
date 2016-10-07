import React, { Component, PropTypes } from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import { Card, CardText, CardActions } from 'material-ui/Card'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import { StoresPropTypesShape } from '../utils/constants'

@inject('stores')
@observer
class AddBudgetItem extends Component {
    @observable currentlySelectedCategory = ''

    @action handleCategoryChange = (event, index, value) => {
        this.currentlySelectedCategory = value
    }

    render () {
        const availableCategories = this.props.stores.categoryStore.categories
        return (
            <Card>
                <CardText>
                    <Grid>
                        <Row>
                            <Col xs={12} sm={6} md={4}>
                                <SelectField value={this.currentlySelectedCategory} floatingLabelText="Category" floatingLabelFixed={true}
                                    onChange={this.handleCategoryChange} floatingLabelStyle={{left: 0}} menuStyle={{textAlign: 'left'}}>
                                    {availableCategories.map(category => <MenuItem key={category.id} value={category.id} primaryText={category.name} />)}
                                </SelectField>
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <TextField floatingLabelText='Name' floatingLabelFixed={true} name='name' />
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <TextField floatingLabelText='Amount' floatingLabelFixed={true} name='amount' />
                            </Col>
                        </Row>
                    </Grid>
                </CardText>
                <CardActions>
                    <FlatButton label="Create" primary={true} />
                    <FlatButton label="Cancel" onClick={this.props.handleCloseButtonClick} />
                </CardActions>
            </Card>
        )
    }
}

AddBudgetItem.propTypes = {
    handleCloseButtonClick: PropTypes.func,
    stores: PropTypes.shape(StoresPropTypesShape)
}

export default AddBudgetItem
