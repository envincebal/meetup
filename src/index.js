import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import * as atatus from 'atatus-spa';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
// serviceWorker.unregister();
// atatus.config('82e9337550b64180b81f6a33d1c8608e').install();
// atatus.notify(new Error('Test Atatus Setup')); 