import {
	combineReducers
} from 'redux';

import productReducer from './product/reducer';
import userReducer from './user/reducer';
const reducer = combineReducers({
	product: productReducer,
	user:userReducer
});
export default reducer;