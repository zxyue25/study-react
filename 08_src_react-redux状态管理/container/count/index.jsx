import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count";

import React, { Component } from "react";

class CountUI extends Component {
  // 加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(value * 1);
  };

  // 减法
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(value * 1);
  };

  // 奇数加
  incrementIfOdd = () => {
    if (this.props.count % 2 === 1) {
      const { value } = this.selectNumber;
      this.props.increment(value * 1);
    }
  };

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.increment(value * 1);
  };

  render() {
    return (
      <div>
        <h1>当前求和为： {this.props.count}</h1>
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

const mapStateToProps = (state) => ({ count: state.count });

const mapDispatchToProps = (dispatch) => ({
  increment: (number) => {
    dispatch(increment(number));
  },
  incrementAsync: (number) => {
    dispatch(incrementAsync(number, 500));
  },
  decrement: (number) => {
    dispatch(decrement(number));
  },
});

// mapDispatchToProps的一般写法，返回function
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI);

// mapDispatchToProps的简写，返回object
export default connect(mapStateToProps, {
  increment,
  incrementAsync,
  decrement,
})(CountUI);
