import React, {Component} from 'react';
import SidebarPeriod from '../SidebarPeriod/SidebarPeriod.jsx';

import './SidebarYear.scss';

export default class SidebarYear extends Component {

    render() {
        const {year, items, ...props} = this.props;
        const dataTarget = `#year-${year}-collapse`;
        const collapseId = `year-${year}-collapse`;
        return (
            <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                    <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-target={dataTarget}>
                            {year}
                        </a>
                    </h4>
                </div>
                <div id={collapseId} className="panel-collapse collapse" role="tabpanel">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="periods">
                                    {items.map(this.renderPeriod)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderPeriod = (period) => {
        return (
            <SidebarPeriod period={period} key={period.id} />
        );
    }
}