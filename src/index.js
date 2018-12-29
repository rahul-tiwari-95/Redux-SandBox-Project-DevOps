import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

//Initializing Store Functionality
const reactStore = createStore(reducer);



ReactDOM.render(<Provider store ={reactStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
