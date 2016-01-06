import React, { Component } from 'react';
import IndexContent from './IndexContent/IndexContent.jsx';
import _ from 'lodash';
import classNames from 'classnames';

import './App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarToggled: !_.has(this.props, 'sidebar')
        };
    }

    render() {
        const { header, sidebar, content } = this.props;
        const wrapperClass = classNames({ 'toggled': this.state.sidebarToggled, 'wrapper': _.has(this.props, 'sidebar') });

        return (
            <div>
                {header}
                <div className={wrapperClass}>
                    {sidebar}
                    {content || <IndexContent onClickSidebarToggle={this.toggleSidebar} /> }
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
