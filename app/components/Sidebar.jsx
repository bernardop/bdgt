import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router'

import { Grid, Row, Col } from 'react-flexbox-grid'

import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

import PeriodStore from '../stores/PeriodStore'
import { compareDesc } from '../utils/periodUtils'

@observer(['stores'])
class Sidebar extends Component {
  constructor (props) {
    super(props)
  }

  handleNewPeriodClick = () => {
    this.props.router.push('/new-period')
  }

  renderNestedPeriods = (periods) => {
    return periods.map((period) => {
      return <ListItem key={period.id} primaryText={period.displayName} />
    })
  }

  render () {
    const { periodStore } = this.props.stores
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
        <Subheader>Periods</Subheader>
        <List>
          {Object.keys(periodStore.periodsByYear).sort(compareDesc).map((year, index) => {
            return (
                <ListItem key={year} primaryText={year} primaryTogglesNestedList={true}
                  nestedItems={this.renderNestedPeriods(periodStore.periodsByYear[year])}
                  initiallyOpen={index === 0} />
            )
          })}
        </List>
      </div>
    )
  }
}

Sidebar.propTypes = {
  stores: PropTypes.shape({
    periodStore: PropTypes.instanceOf(PeriodStore)
  }),
  router: PropTypes.object
}

export default withRouter(Sidebar)
