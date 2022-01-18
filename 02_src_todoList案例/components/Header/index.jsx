import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleInput = (event) => {
    const { target, keyCode } = event;
    if (keyCode !== 13) return;
    if (!target.value) {
      alert("不能为空");
      return;
    }
    this.props.addTodo({ name: target.value, id: nanoid(), done: false });
    target.value = "";
  };

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleInput} />
      </div>
    );
  }
}
