import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import CommentApp from './CommentApp'
import './index.css'

class Header extends Component {
  constructor() {
    super() 
    console.log('construct') //1  new 
  }
  // 即将挂载  jsx -> react -> createElement-> appendChild mount
  componentWillMount() {
    // ajax 
    console.log('component will mount'); // 3
  }

  componentDidMount() {
    console.log('component did mount'); // 4
  }

  componentWillUnmount() { // 即将卸载的时候
    console.log('组件即将卸载');
  }

  render() {
    console.log('render') // 此时render 2
    return (
      <div>
        <h1 className="title">React小书</h1>
      </div>
    )
  }
}

class Index extends Component {
  constructor() {
    super()
    this.state = {
      isShowHeader: true
    }
  }
  handleShowOrHide () {
    this.setState({ // write 
      isShowHeader: !this.state.isShowHeader // read
    })
  }
  render () {
    return (
      <div>
        {this.state.isShowHeader ? <Header />: null}
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或则隐藏标题
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);