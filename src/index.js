import React from 'react';
import ReactDOM from 'react-dom';
import './App';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as atatus from 'atatus-spa';
ReactDOM.render(<App />, document.getElementById('root'));

atatus.config('82e9337550b64180b81f6a33d1c8608e').install();
serviceWorker.unregister();

// atatus.notify(new Error('Test Atatus Setup')); 