import React from 'react';
import ReactDOM from 'react-dom';
// 高阶组件 HOC Povider HashRouter @inject 
// 生命周期 取数据 map 列表渲染 
// CommentList  list    
// BlogPost  list 
const comments = [
  {
    id: 1,
    text: 'aaa'
  },
  {
    id: 2,
    text: 'bbb'
  }
]

const posts = [
  {
    id: 1,
    text: 'post1'
  },
  {
    id: 2,
    text: 'post2'
  }
]
const DataSource = {
  getPosts: () => {
    return posts;
  },
  getComments: () => {
    return comments;
  },
  addChangeListener: function(callback) {
    setTimeout(() => {
      callback();
    }, 3000)
  }
}

const withSubscription = (WrappedComponent,selectData) => {
  // 返回值是 组件
  return class extends React.Component {
    constructor(props) {
      super(props);
      // 抽像的数组状态的初始化
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        data: selectData// array 
      }
    }
    
    componentDidMount() {
      DataSource.addChangeListener(this.handleChange)
    }

    handleChange() {
      this.setState({
        data: [...this.state.data, {
          id: 3,
          text: 'text3'
        }]
      })
    }

    render() {
      // JSX
      // 原组件做为子组件来处理
      return <WrappedComponent data={this.state.data} />
    }
  }

}

class BlogPost extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // HOC props 
    return (
      <div>
        {
          this.props.data.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))
        }
      </div>
    )
  }
}

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  DataSource.getPosts()
)

class CommentList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // HOC props 
    return (
      <div>
        {
          this.props.data.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))
        }
      </div>
    )
  }
}

const CommentListWithSubscription = withSubscription(
  CommentList,
  DataSource.getComments()
)

// class CommentList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       comments: DataSource.getComments() // 初始化
//     }
//   }
//   handleChange = () =>  {
//     this.setState({
//       comments: [
//         ...this.state.comments,
//         {
//           id: 3,
//           text: 'text3'
//         }
//       ]
//     })
//   }

//   componentDidMount() {
//     DataSource.addChangeListener(this.handleChange) // 高阶函数
//   }

//   render() {
//     return (
//       <div>
//         {this.state.comments.map((comment, index) => (
//           <p key={index}>{comment.text}</p>
//         ))}
//       </div>
//     )
//   }
// }


//   class BlogPost extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {
//         // 假设 "DataSource" 是个全局范围内的数据源变量
//         posts: DataSource.getPosts()
//       };
//     }
  
//     componentDidMount() {
//       // 订阅更改
//       DataSource.addChangeListener(this.handleChange);
//     }
  
//     componentWillUnmount() {
//       // 清除订阅
//       DataSource.removeChangeListener(this.handleChange);
//     }
  
//     handleChange() {
//       // 当数据源更新时，更新组件状态
//       this.setState({
//         posts: [...this.state.posts, {
//             id: 3,
//             text: 'text3'
//         }]
//       });
//     }
  
//     render() {
//       console.log(this.state.posts);
//       return (
//         <div>
//           {this.state.posts.map((post, index) => (
//             <p key={index}>{post.text} </p>
//           ))}
//         </div>
//       );
//     }
//   }

class App extends React.Component {
  render() {
    return (
      <div>
        App
        {/* <CommentList />
        <BlogPost /> */}
        <BlogPostWithSubscription />
        <CommentListWithSubscription />
      </div>
    )
  }
}

ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);