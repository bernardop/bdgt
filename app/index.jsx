import 'bootstrap-sass!../bootstrap-sass.config.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect } from 'react-router';
import { createHistory } from 'history';
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import AddPeriod from './components/AddPeriod/AddPeriod.jsx';

main();

function main() {
    const app = document.getElementById('app');

    ReactDOM.render((
        <Router history={createHistory()}>
            <Route path="/" component={App}>
                <IndexRedirect to="/periods" />
                <Route path="/periods" component={Home} />
                <Route path="/periods/new" component={AddPeriod} />
            </Route>
        </Router>
    ), app);
}