import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import CommentApp from './CommentApp'
import './index.css'
// 自动聚焦功能
// react 尽量的减少 DOM 操作
// 查找元素 react refs  docuemnt.querySelector 性能更好 

class AutoFocusElement extends Component {
  componentDidMount() { // input 挂载以后 
    // input 已经在页面上了
    this.input.focus(); // dom 元素
  }
  render() {
    return (
      <input ref={(input) => this.input = input}/>
    )
  }
}

ReactDOM.render(
  <AutoFocusElement />,
  document.getElementById('root')
);