import React, {Component} from 'react';

export default class App extends Component {

    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="header clearfix">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-lg-12">
                                <h3>BDGT</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
