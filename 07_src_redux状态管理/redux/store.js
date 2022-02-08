// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from "redux";
// 用于支持异步action
import thunk from 'redux-thunk'
import countReducers from './reducer/conut'

export default createStore(countReducers, applyMiddleware(thunk))