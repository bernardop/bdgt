import React, { Component, PropTypes } from 'react'
import { observer, inject } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import { StoresPropTypesShape } from '../utils/constants'
import LoadingScreen from './LoadingScreen'

@inject('stores')
@observer
export default class App extends Component {
    renderContent = () => {
        if (this.props.stores.periodStore.storeTriedToSync && this.props.stores.categoryStore.storeTriedToSync) {
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

App.wrappedComponent.propTypes = {
    children: PropTypes.node,
    stores: PropTypes.shape(StoresPropTypesShape)
}
