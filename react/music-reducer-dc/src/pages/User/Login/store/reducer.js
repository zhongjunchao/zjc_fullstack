import { fromJS } from 'immutable';
import * as actionTypes from './constants';

const defaultState = fromJS({
  userInfo: {},
  loginStatus: false
})

export default (state=defaultState, action) => {
  switch(action) {
    case actionTypes.CHANGE_USER_INFO:
      return state.set("userInfo", action.data)
    default:
      return state;
  }
}
