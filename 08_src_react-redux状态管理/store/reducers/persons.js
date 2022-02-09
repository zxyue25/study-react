import { ADD_PERSON } from "../constants";

const initState = [{ id: "001", name: "jona", age: "23" }];

export default function persons(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      // return preState.unshift(data) // 此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了，redux识别不到状态改变，视图不会更新了
      return [data, ...preState];
    default:
      return preState;
  }
}
