import React, { Component } from "react";

export default class Footer extends Component {
  handleCheckAll = (flag) => {
    this.props.checkAllTodo(flag);
  };

  render() {
    const { todos } = this.props;
    const length = todos.filter((todo) => todo.done).length;
    return (
      <div>
        <input
          type="checkbox"
          checked={length === todos.length && todos.length !== 0}
          onChange={() =>
            this.handleCheckAll(
              !(length === todos.length) && todos.length !== 0
            )
          }
        />
        已完成{length}项，总共{todos.length}项
      </div>
    );
  }
}
