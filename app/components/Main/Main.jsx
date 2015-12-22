import React, {Component} from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
import PageContent from './PageContent/PageContent.jsx';

import classNames from 'classnames';

import './_Main.scss';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarToggled: false
        };
    }

    render() {
        const wrapperClass = classNames({'toggled': this.state.sidebarToggled});

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
                <div id="wrapper" className={wrapperClass}>
                    <Sidebar />
                    <PageContent onClickSidebarToggle={this.toggleSidebar} />
                </div>
            </div>
        );
    }

    toggleSidebar = () => {
        const currentSidebarToggle = this.state.sidebarToggled;

        this.setState({
            sidebarToggled: !currentSidebarToggle
        });
    }
}
