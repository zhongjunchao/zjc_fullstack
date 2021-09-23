import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterMap from './router'
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
  <React.StrictMode>
    <RouterMap />
  </React.StrictMode>,
  document.getElementById('root')
);
