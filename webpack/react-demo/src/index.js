// var p = document.createElement('p');
// p.innerText = 'test';

// var root = document.getElementById('root');
// root.appendChild(p);
import React from 'react'; // lib  数据绑定， 模板编译这些
import ReactDOM from 'react-dom';
// 引入 test.jsx 模块
import TestComponent from './test.jsx';
// 
ReactDOM.render(<TestComponent/>, 
  document.getElementById('root'))