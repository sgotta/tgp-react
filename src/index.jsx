import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './components/App';

const container = document.getElementById('root');

// ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  container
);
