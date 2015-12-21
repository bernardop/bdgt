import 'bootstrap-sass!../bootstrap-sass.config.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import App from './components/App.jsx';
import Main from './components/Main/Main.jsx';

main();

function main() {
    const app = document.getElementById('app');

    ReactDOM.render((
        <Router history={createHistory()}>
            <Route path="/" component={App}>
                <Route path="periods" component={Main} />
            </Route>
        </Router>
    ), app);
}
