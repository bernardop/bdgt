import React, {Component} from 'react';
import SidebarYear from '../SidebarYear/SidebarYear.jsx';
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
        const years = _(this.state.data).pluck('year').unique().value().sort((a, b) => b - a);
        return (
            <div id="sidebar-wrapper">
                <div className="sidebar-heading">
                    Budget Periods
                    <button type="button" className="btn btn-default btn-xs glyphicon glyphicon-plus"
                        onClick={this.addBudgetPeriod}></button>
                </div>
                <div className="panel-group" role="tablist">
                    {years.map(this.renderYearItem)}
                </div>
            </div>
        );
    }

    renderYearItem = (year) => {
        return (
            <SidebarYear year={year} key={year} items={_.where(this.state.data, { 'year': year })} />
        );
    }

    addBudgetPeriod = () => {
        console.log("What up");
    }
}