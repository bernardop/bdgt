import React, { Component, PropTypes } from 'react'
import { observer, inject } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import PeriodStore from '../stores/PeriodStore'
import CategoryStore from '../stores/CategoryStore'
import LoadingScreen from './LoadingScreen'

@inject('stores')
@observer
export default class App extends Component {
  constructor (props) {
    super(props)
  }

  renderContent = () => {
    if (this.props.stores.periodStore.storeTriedToSync) {
      return (
        <div>
          {this.props.children}
          <DevTools position={{bottom: 0, right: '20px'}}/>
        </div>
      )
    } else {
      return <LoadingScreen />
    }
  }

  render () {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
  stores: PropTypes.shape({
    periodStore: PropTypes.instanceOf(PeriodStore),
    categoryStore: PropTypes.instanceOf(CategoryStore)
  })
}
