import React, {Component} from 'react';

import './SidebarPeriod.scss';

export default class SidebarPeriod extends Component {
    render() {
        const {period, ...props} = this.props;

        return (
            <li>{period.name}</li>
        );
    }
}