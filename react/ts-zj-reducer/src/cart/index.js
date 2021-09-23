import React, { useState, useEffect, useRef } from 'react';
// react DOM 少  ref 
// 引入的过程中是会执行的
import cartData from './data';
import CartItem from './CartItem';

const Cart = () => {
  // 信真理
  const [checkedMap, setCheckedMap ] = useState(0)
  const onCheckedChangeRef=useRef(null);
  console.log(checkedMap, '++++++++');
//   const onCheckedChange = () => {

//   }
  const sumPrice = () => {
    // useState 
    // 需求 选中的话才算总价， 
    // 切换选中的时候， 可以重新计算
    // 选中， state 
    let sum = 0;
    for (const item of cartData) {
      if (checkedMap[item.id]) {
        sum += item.price
      }
    }
    return sum;
  }
  useEffect(()=>{
      onCheckedChangeRef.current=onCheckedChange
  })
  const onCheckedChange =(CartItem,checked)=>{
      console.log(CartItem,checked);
      const{id}=CartItem;
      const newCheckedMap={...checkedMap,[id]:checked};
      setCheckedMap(newCheckedMap)
  }
  const onCheckedAll=(e)=>{
    const {checked}=e.target
    const newCheckedMap={}
    cartData.map(item=>{
        newCheckedMap[item.id]=checked;
    })
    setCheckedMap(newCheckedMap)
  }
  return (
    <div>
      <ul>
        {cartData.map((item) => {
          
          const checked = checkedMap[item.id] || false;
          return <CartItem item={item} checked={checked} onCheckedChangeRef={onCheckedChangeRef} key={item.id}/>
        })}
      </ul>
      <p>
          <input type="checkbox" name="" onChange={onCheckedAll}
          
          />全选;
        总价: {sumPrice()}
      </p>
    </div>
  )
}
export default Cart;