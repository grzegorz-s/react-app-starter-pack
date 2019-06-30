import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/_index.scss';
import * as serviceWorker from './serviceWorker';

const { location, history } = window;
const path = location.hash.slice(1);
if (path) {
  location.hash = '';
  history.replaceState(
    {},
    '',
    `${location.protocol}//${location.host}/${path}`
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
