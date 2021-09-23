import React from 'react';
import ReactDOM from 'react-dom';
// // 取别名
// import {BrowserRouter as Router,Router,Switch,Redirect }from 'react-router-dom';
// import Admin from './admin';
import './index.css';
import './common.css';
import './data.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
