import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store/store'

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <App />
</Provider>
</BrowserRouter>,
  document.getElementById('root')
);
