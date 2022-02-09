import { INCREMENT, DECREMENT } from "../constants";

// 普通action的值为object `{type: INCREMENT, data }`
export const increment = data => ({ type: INCREMENT, data });
export const decrement = data => ({ type: DECREMENT, data });

// 异步action的值为函数
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data));
    }, time);
  };
};
