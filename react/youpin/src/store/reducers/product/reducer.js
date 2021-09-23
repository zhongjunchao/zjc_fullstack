import * as actionTypes  from './constants';
const initialVal = {
  detail: {}, // 详情页 id
  list: []
}

export default function productReducer (state=initialVal, action) {
  switch(action.type) {
    case actionTypes.CHANGE_DETAIL:
      state = { // 浅拷贝 
        ...state,
        detail: action.payload
      }
      return state
    default: 
      return state
  }
}