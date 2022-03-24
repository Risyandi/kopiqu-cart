import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import cartReducer from './components/reducers/cartReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const store = createStore(cartReducer);
console.log(store, "debug: store index.js");

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root')
);