import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import LinearProgress from 'material-ui/LinearProgress'
import { Grid, Row, Col } from 'react-flexbox-grid'

import PeriodStore from '../stores/PeriodStore'
import CategoryStore from '../stores/CategoryStore'
import checkAuth from './checkAuth'
import { UserAuthStatus } from '../utils/constants'

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

  render () {
    const progressBarVisibility = {
      visibility: this.showLoadingBar ? 'visible' : 'hidden'
    }

    return (
      <div>
        <LinearProgress mode='indeterminate' style={progressBarVisibility} />
        <Grid>
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
  stores: PropTypes.shape({
    periodStore: PropTypes.instanceOf(PeriodStore),
    categoryStore: PropTypes.instanceOf(CategoryStore)
  })
}

export default withRouter(checkAuth(AddCategory, UserAuthStatus.SHOULD_BE_AUTHENTICATED))
