import React, {Component} from 'react';
import SidebarYearItem from '../SidebarYearItem/SidebarYearItem.jsx';
import _ from 'lodash';

import './Sidebar.scss';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            years: [
                {
                    id: _.uniqueId('year'),
                    year: '2015'
                },
                {
                    id: _.uniqueId('year'),
                    year: '2014'
                }
            ]
        };
    }

    render() {
        return (
            <div id="sidebar-wrapper">
                <div className="panel-group" role="tablist">
                    {this.state.years.map(this.renderYearItem)}
                </div>
            </div>
        );
    }

    renderYearItem = (year) => {
        return (
            <SidebarYearItem id={year.id} year={year.year} key={year.id} />
        );
    }
}