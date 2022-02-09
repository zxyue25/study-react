import React, { Component } from "react";
import store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/action/count";

export default class Count extends Component {
  // 监听redux中状态变化，只有变化，就需要重新调用render
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  // 加法
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value * 1));
  };

  // 减法
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  };

  // 奇数加
  incrementIfOdd = () => {
    const count = store.getState();
    if (count % 2 !== 0) {
      const { value } = this.selectNumber;
      store.dispatch(createIncrementAction(value * 1));
    }
  };

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    // setTimeout(() => {
    //   store.dispatch(createIncrementAction(value*1));
    // }, 500);
    store.dispatch(createIncrementAsyncAction(value * 1, 500));
  };

  render() {
    return (
      <div>
        <h1>当前求和为： {store.getState()}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}
