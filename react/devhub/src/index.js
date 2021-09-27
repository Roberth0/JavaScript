import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import logo from './img/logo.svg';

ReactDOM.render(
  <React.StrictMode>
    <App logo={logo}/>
  </React.StrictMode>,
  document.getElementById('root')
);

