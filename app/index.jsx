import 'bootstrap-sass!../bootstrap-sass.config.js';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

main();

function main() {
    const app = document.getElementById('app');

    ReactDOM.render(<App />, app);
}
