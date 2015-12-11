import React, {Component} from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
import PageContent from './PageContent/PageContent.jsx';

import classNames from 'classnames';

import './App.scss';

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
            <div id="wrapper" className={wrapperClass}>
                <Sidebar />
                <PageContent onClickSidebarToggle={this.toggleSidebar} />
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
