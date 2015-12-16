import React, {Component} from 'react';

import './SidebarYearItem.scss';

export default class SidebarYearItem extends Component {

    render() {
        const {year, ...props} = this.props;
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
                        {year}
                    </div>
                </div>
            </div>
        );
    }
}