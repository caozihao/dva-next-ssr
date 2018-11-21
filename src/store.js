import { createStore } from 'redux';
import reducer from './reducer';
// create a store creator
const makeStore = (initialState) => {
  //  createStore 第一个参数是Reducers，这里传一个空函数
  return createStore(reducer, initialState);
  // return createStore(() => { }, initialState);
};
export default makeStore;
