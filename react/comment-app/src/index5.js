import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import CommentApp from './CommentApp'
import './index.css'

class Clock extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }
  // 
  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <h1>
          <p>现在的时间是</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}

class Index extends Component {
  constructor() {
    super()
    this.state = {
      isShowClock: true
    }
  }
  handleShowOrHide () {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }
  render() {
    return (
      <div>
        {this.state.isShowClock?<Clock />:null}
        <button onClick={this.handleShowOrHide.bind(this)}>显示或隐藏时钟</button>
      </div>
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);