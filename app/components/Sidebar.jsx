import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import PeriodStore from '../stores/PeriodStore'

@observer(['stores'])
class Sidebar extends Component {
  constructor (props) {
    super(props)
  }

  handleNewPeriodClick = () => {
    this.props.history.push('/new-period')
  }

  render () {
    const { periodStore } = this.props.stores
    return (
      <Grid fluid>
        <Row center='xs'>
          <Col>
            <RaisedButton label='New Period' primary={true} icon={<ContentAdd />}
              onClick={this.handleNewPeriodClick} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Periods</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {Object.keys(periodStore.periodsByYear).map((year) => {
              return (
                <div>
                  <div>{year}</div>
                  <ul>
                    {periodStore.periodsByYear[year].map((period) => {
                      return <li>{period.displayName}</li>
                    })}
                  </ul>
                </div>
              )
            })}
          </Col>
        </Row>
      </Grid>
    )
  }
}

Sidebar.propTypes = {
  stores: PropTypes.shape({
    periodStore: PropTypes.instanceOf(PeriodStore)
  }),
  history: PropTypes.object
}

export default Sidebar
