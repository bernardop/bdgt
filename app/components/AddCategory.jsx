import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import LinearProgress from 'material-ui/LinearProgress'
import { Grid, Row, Col } from 'react-flexbox-grid'

import { StoresPropTypesShape } from '../utils/constants'
import checkAuth from './checkAuth'
import { UserAuthStatus } from '../utils/constants'
import BdgtCloseButton from './BdgtCloseButton'

@inject('stores')
@observer
class AddCategory extends Component {
  @observable showLoadingBar = false
  @observable categoryFields = {
    name: '',
    type: ''
  }

  constructor (props) {
    super(props)
  }

  handleCloseButtonClick = () => {
    this.props.router.push('/periods')
  }

  render () {
    const progressBarVisibility = {
      visibility: this.showLoadingBar ? 'visible' : 'hidden'
    }

    return (
      <div>
        <LinearProgress mode='indeterminate' style={progressBarVisibility} />
        <Grid>
          <BdgtCloseButton position='end' handleClick={this.handleCloseButtonClick} />
          <Row>
            <Col>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

AddCategory.propTypes = {
  stores: PropTypes.shape(StoresPropTypesShape),
  router: PropTypes.object
}

export default withRouter(checkAuth(AddCategory, UserAuthStatus.SHOULD_BE_AUTHENTICATED))
