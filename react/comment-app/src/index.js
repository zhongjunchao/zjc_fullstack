import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import PropTypes from 'prop-types'

class Card extends Component {
  // es6 class 属性新特性
  static PropTypes = {  // 检测
    content: PropTypes.string
  }
  render() {
    return (
      <div className="card">
        <div className="card-content"></div>
        {/* {this.props.content} */}
        {this.props.children}
      </div>
    )
  }
}

// 类的属性
Card.PropTypes={
  content:PropTypes.string
}

// props 校验 ts

ReactDOM.render(
  <Card>
    <div>
      <h2>React.js 小书</h2>
      <div>开源、免费、专业、简单</div>
      订阅：<input />
    </div>
  </Card>,
  document.getElementById('root')
);