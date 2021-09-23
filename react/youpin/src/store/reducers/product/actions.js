import * as actionTypes from './constants';
import api from '../../../api/index';

export const changeDetail  = (payload) =>({
  type: actionTypes.CHANGE_DETAIL,
  payload:payload
}) 

export const getProductDetail = (id) => {
  return (dispatch) => {
    api.product.info(id)
      .then(data => {
        dispatch(changeDetail(data.data))
      })
  }
}