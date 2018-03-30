import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './containers/App';
//import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
