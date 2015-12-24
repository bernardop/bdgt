import React, { Component } from 'react';
import { Link } from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './AddPeriod.scss';
import 'react-datepicker/dist/react-datepicker.css';

export default class AddPeriod extends Component {

    constructor(props) {
        super(props);

        this.state = {
            periodName: '',
            periodStartDate: '',
            periodEndDate: ''
        };
    }

    render() {
        const {periodName, periodStartDate, periodEndDate} = this.state;

        return (
            <div id="add-period" className="container-fluid">
                <div className="row">
                    <div className="col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <Link to="/periods" role="button" className="btn btn-lg btn-default glyphicon glyphicon-remove pull-right" />
                        <h1>Create a new period</h1>
                        <form>
                            <div className="col-md-12">
                                <div className="form-group form-group-lg">
                                    <label className="control-label">Period name</label>
                                    <input id="period-name" type="text" className="form-control" placeholder="e.g. Jan-Feb" value={periodName} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-lg">
                                    <label>Period start</label>
                                    <DatePicker id="period-start" className="form-control" placeholderText="When does the new period start?" dateFormat="MM/DD/YYYY" value={periodStartDate} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-lg">
                                    <label>Period end</label>
                                    <DatePicker id="period-end" className="form-control" placeholderText="When does the new period end?" dateFormat="MM/DD/YYYY" value={periodEndDate} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group form-group-lg">
                                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleFormSubmit}>Create period</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    handleChange = (e) => {
        const newValue = e;
        console.log(newValue);
        switch (newValue.id) {
            case "period-name":
                this.setState({periodName: newValue.value});
                break;
            case "period-start":
                this.setState({periodStartDate: newValue.value});
                break;
            case "period-end":
                this.setState({periodEndDate: newValue.value});
                break;
        }
        console.log(this.state);
    }

    handleFormSubmit = () => {
        console.log("form submitted");
    }
}