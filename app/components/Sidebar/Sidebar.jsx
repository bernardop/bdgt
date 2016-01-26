import React, { Component } from 'react';
import { Link } from 'react-router';
import SidebarYear from './SidebarYear/SidebarYear.jsx';
import _ from 'lodash';
import { connect } from 'react-redux';

import './Sidebar.scss';

class Sidebar extends Component {

    render() {
        const { dispatch, visiblePeriods } = this.props;
        const years = _(visiblePeriods).pluck('year').unique().value().sort((a, b) => b - a);
        return (
            <div id="sidebar-wrapper">
                <div className="sidebar-heading text-uppercase">
                    Budget Periods
                    <Link to="/periods/new" role="button" className="btn btn-default btn-xs glyphicon glyphicon-plus" />
                </div>
                <div className="panel-group" role="tablist">
                    {years.map(year =>
                        <SidebarYear year={year} key={year} items={_.where(visiblePeriods, { 'year': year })} />
                    )}
                </div>
            </div>
        );
    }
}

function select(state) {
    return {
        visiblePeriods: state.periods
    };
}

export default connect(select)(Sidebar);