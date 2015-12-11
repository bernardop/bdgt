import React, {Component} from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
import PageContent from './PageContent/PageContent.jsx';

import './App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarToggle: false
        };
    }

    render() {
        let sidebarToggleClass = this.state.sidebarToggle ? 'toggled' : '';

        return (
            <div id="wrapper" className={sidebarToggleClass}>
                <Sidebar />
                <PageContent onClickSidebarToggle={this.toggleSidebar} />
            </div>
        );
    }

    toggleSidebar = () => {
        const currentSidebarToggle = this.state.sidebarToggle;

        this.setState({
            sidebarToggle: !currentSidebarToggle
        });
    }
}
