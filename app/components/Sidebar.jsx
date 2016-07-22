import React, { Component, PropTypes } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router'

import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import DateRange from 'material-ui/svg-icons/action/date-range'
import Today from 'material-ui/svg-icons/action/today'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'

import PeriodStore from '../stores/PeriodStore'
import CategoryStore from '../stores/CategoryStore'
import { compareDesc } from '../utils/periodUtils'

@inject('stores')
@observer
class Sidebar extends Component {
  constructor (props) {
    super(props)
  }

  handleNewPeriodClick = () => {
    this.props.router.push('/periods/new')
  }

  handlePeriodClick = ({id}) => {
    this.props.hideSidebar()
    const path = `/periods/${id}`
    this.props.router.push(path)
  }

  renderPeriodsList = () => {
    const { periodStore } = this.props.stores
    if (Object.keys(periodStore.periodsByYear).length > 0) {
      return (
        <div>
          <Divider />
          <Subheader>Periods</Subheader>
          <List>
            {Object.keys(periodStore.periodsByYear).sort(compareDesc).map((year, index) => {
              return (
                <ListItem key={year} primaryText={year} primaryTogglesNestedList={true}
                  nestedItems={this.renderNestedPeriods(periodStore.periodsByYear[year])}
                  initiallyOpen={index === 0} leftIcon={<DateRange />} />
              )
            })}
          </List>
        </div>
      )
    } else {
      return (
        <div className='sidebar-no-periods-message'>Click on <strong>NEW PERIOD</strong> to create your first period</div>
      )
    }
  }

  renderNestedPeriods = (periods) => {
    return periods.map((period) => {
      return <ListItem key={period.id} primaryText={period.displayName}
        onClick={() => this.handlePeriodClick(period)}
        leftIcon={<Today />} />
    })
  }

  render () {
    return (
      <div>
        <Grid fluid>
          <Row center='xs'>
            <Col>
              <RaisedButton label='New Period' primary={true} icon={<ContentAdd />}
                onClick={this.handleNewPeriodClick} className='sidebar-new-period-btn'/>
            </Col>
          </Row>
        </Grid>
        {this.renderPeriodsList()}
      </div>
    )
  }
}

Sidebar.propTypes = {
  stores: PropTypes.shape({
    periodStore: PropTypes.instanceOf(PeriodStore),
    categoryStore: PropTypes.instanceOf(CategoryStore)
  }),
  router: PropTypes.object,
  hideSidebar: PropTypes.func
}

export default withRouter(Sidebar)
