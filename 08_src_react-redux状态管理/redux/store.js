// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from "redux";
// 用于支持异步action
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

// export default createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunk))
// );

export default createStore(reducers, applyMiddleware(thunk));
