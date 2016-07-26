import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import LinearProgress from 'material-ui/LinearProgress'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import { StoresPropTypesShape } from '../utils/constants'
import checkAuth from './checkAuth'
import { UserAuthStatus } from '../utils/constants'
import BdgtCloseButton from './BdgtCloseButton'
import { CategoryType } from '../utils/constants'

@inject('stores')
@observer
class AddCategory extends Component {
  @observable showLoadingBar = false
  @observable categoryFields = {
    name: '',
    type: ''
  }
  @observable errors = {
    name: null,
    type: null
  }

  constructor (props) {
    super(props)
  }

  handleCloseButtonClick = () => {
    this.props.router.push('/periods')
  }

  @action('AddCategory_handleChange') handleChange = (event) => {
    this.categoryFields[event.target.name] = event.target.value
  }

  @action('AddCategory_handleTypeChange') handleTypeChange = (event, index, value) => {
    this.categoryFields.type = value
  }

  render () {
    const progressBarVisibility = {
      visibility: this.showLoadingBar ? 'visible' : 'hidden'
    }

    return (
      <div>
        <LinearProgress mode='indeterminate' style={progressBarVisibility} />
        <div className='new-category'>
          <Grid>
            <BdgtCloseButton position='end' handleClick={this.handleCloseButtonClick} />
            <Row center='xs' middle='xs' className='new-category--form-container'>
              <Col xs={10} md={6}>
                <Card containerStyle={{padding: 30}}>
                  <CardTitle title='New Category' />
                  <CardText>
                    <TextField floatingLabelText='Name' floatingLabelFixed={true} name='name' value={this.name}
                      onChange={this.handleChange} errorText={this.errors.name} errorStyle={{textAlign: 'left'}} />
                    <SelectField value={this.categoryFields.type} floatingLabelText="Type" floatingLabelFixed={true}
                      floatingLabelStyle={{left: 0}} onChange={this.handleTypeChange} menuStyle={{textAlign: 'left'}}>
                      <MenuItem key={1} value={CategoryType.EXPENSE.name} primaryText="Expense" />
                      <MenuItem key={2} value={CategoryType.INCOME.name} primaryText="Income" />
                    </SelectField>
                    <br />
                    <br />
                    <RaisedButton label='Create' primary={true} />
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

AddCategory.propTypes = {
  stores: PropTypes.shape(StoresPropTypesShape),
  router: PropTypes.object
}

export default withRouter(checkAuth(AddCategory, UserAuthStatus.SHOULD_BE_AUTHENTICATED))
