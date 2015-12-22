import React, { Component } from 'react';
import { Link } from 'react-router';

import './_AddPeriod.scss';

export default class AddPeriod extends Component {
    render() {
        return (
            <div id="add-period" className="container-fluid">
                <div className="row">
                    <div className="col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <Link to="periods" role="button" className="btn btn-lg btn-default glyphicon glyphicon-remove-circle pull-right" />
                        <h1>Add a new period</h1>
                    </div>
                </div>
            </div>
        );
    }
}