import React, { Component } from 'react';
import { Link } from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './_AddPeriod.scss';
import 'react-datepicker/dist/react-datepicker.css';

export default class AddPeriod extends Component {
    render() {
        return (
            <div id="add-period" className="container-fluid">
                <div className="row">
                    <div className="col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <Link to="periods" role="button" className="btn btn-lg btn-default glyphicon glyphicon-remove pull-right" />
                        <h1>Add a new period</h1>
                        <form action="">
                            <div className="form-group form-group-lg">
                                <label className="control-label">Period name</label>
                                <input type="text" className="form-control" placeholder="e.g. Jan-Feb"/>
                            </div>
                            <div className="form-group form-group-lg">
                                <label>Period start</label>
                                <DatePicker className="form-control" placeholderText="When does the new period start?" dateFormat="MM/DD/YYYY" />
                            </div>
                            <div className="form-group form-group-lg">
                                <label>Period end</label>
                                <DatePicker className="form-control" placeholderText="When does the new period end?" dateFormat="MM/DD/YYYY" />
                            </div>
                            <button type="button" className="btn btn-primary btn-lg">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}