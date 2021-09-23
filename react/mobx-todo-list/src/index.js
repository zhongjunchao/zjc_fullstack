import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
// Hooks
function Child(props) {
  console.log('child 执行了');
  return (
    <div onClick={props.onClick}>
      child: {props.data}
    </div>
  )
}

const Child2 = React.memo(Child);

function App () {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  const [k, setK] = useState(0); 
  // 全面的函数式编程风格 
  const add = () => {
    setN(i=>i + 1)
  }
  const addChild = () => {
    setM(i=>i + 1)
  }

  // const onClickChild = () => {};
  const onClickChild = useMemo(() =>{
    // 原来该做的事件
    return () => {
      console.log(m)
    }
  }, [m])
  return (
    <div>
      <div>
        n: {n}
        k: {k}
        <button onClick={add}>n+1</button>
        <button onClick={addChild}>m+1</button>
      </div>
      {/* <Child data={m}/> */}
      <Child2 data={m} onClick={onClickChild}/>
    </div>
  )
}



ReactDOM.render(
  <App/>,
  document.getElementById('root')
)