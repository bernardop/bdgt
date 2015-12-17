import React, {Component} from 'react';
import SidebarYearItem from '../SidebarYearItem/SidebarYearItem.jsx';
import store from '../../store/store';
import _ from 'lodash';

import './Sidebar.scss';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: store
        };
    }

    render() {
        const years = _(this.state.data).pluck('year').unique().value().sort((a, b) => a - b);
        return (
            <div id="sidebar-wrapper">
                <div className="panel-group" role="tablist">
                    {years.map(this.renderYearItem)}
                </div>
            </div>
        );
    }

    renderYearItem = (year) => {
        return (
            <SidebarYearItem year={year} key={year} items={_.where(this.state.data, { 'year': year })} />
        );
    }
}