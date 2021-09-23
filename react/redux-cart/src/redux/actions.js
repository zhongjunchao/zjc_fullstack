import api from '../api';
import * as types from './action-types';

export const addGoods = (goods) => ({
  type: types.ADD_GOODS,
  payload: {
    goods
  }
})

// 页面上引入action useEffect 
export const getGoods = () => {
  return (dispatch) => {
    api.getProducts((goods)=> {
      dispatch(addGoods(goods))
    })
  }
}

//加至购物车
export const addToCart = (good) => ({
  type: types.ADD_SHOPCART,
  payload: {
    good
  }
})