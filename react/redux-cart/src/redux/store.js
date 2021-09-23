import { applyMiddleware, createStore } from 'redux';
import {Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default createStore(
  reducer,
  applyMiddleware(thunk)
)