import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css'

// 

class Header extends Component {
  constructor(){
    super()
    console.log('construct'); // 1
  }

  componentWillMount(){
    // ajax
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  render() {
    console.log('render');  // 此时render 2
    return (
      <div>
        <div>
          <h1 className="title">React 小书</h1>
        </div>
        <div>
          ssss
        </div>
      </div>
    );
  }
}

export default Header;

ReactDom.render(
  <Header />,
  document.getElementById('root')
)